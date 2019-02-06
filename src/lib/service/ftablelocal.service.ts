import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {  map } from 'rxjs/operators';
import {firstBy} from 'thenby';
import {  FTable, FColumn, FSearch, FOrder, FTableResult, FTableDataModifier  } from '../ftable.model';
import { FTableBaseService } from './ftablebase.service';
import { Observable, empty } from 'rxjs';
import { of } from 'rxjs'



@Injectable()
export class FTableLocalService implements FTableBaseService {

    constructor(private http: HttpClient) {
    }

    public data = [];
    private mode: string;

    setLocalTableData(data: any[]){
        this.mode = '';
        this.data = data;
    }


    get(id:any): Observable<any>{
        //  console.log('get');
         return this.getRowByColumnNameAndValue('id',id);
    }
 
    getRowByColumnNameAndValue(name: string,value:any): Observable<any>{
        // console.log('getRowByColumnNameAndValue'+' '+name+' '+value);

        const result = this.data.filter(x => x[name]== value);
        // console.log('getRowByColumnNameAndValue'+' '+name+' '+value);

        if(result.length > 0){
           return of(result[0]);
        }
        return empty();
    }

    /*
    *
    */
    setData(id:any,propertyToChange:string,fn: (n:any)=>any):Observable<any>{
       var row = this.data.find(d=>d['id'] === id);
       row[propertyToChange] = fn(row[propertyToChange]);
       return of(row);
    }

    delete(id:any):Observable<any>{
        // cant modify JSON files frontend
         var row = this.data.find(d=>d['id'] === id);
        return of(row);
    }

     getData(table: FTable): Observable<FTableResult>  {

      let data = this.data;
     

      for (let i = 0; i < table.columns.length; i++) {
        if (table.columns[i].type === 'checkbox') {
            table.columns[i].filterData = Array.from(new Set(data.map(x => x[table.columns[i].name])))
        }
      }



      var totalRows = data.length;
      // Generic Search
      if (table.dataModifier.search.value) {
        table.dataModifier.currentPage = 1;
      if (table.columns.length > 0) {
        let temp = [];
          for (let i = 0; i < table.columns.length; i++) {
              if (table.columns[i].name.length > 0) {
                  temp = temp.concat(data.filter(x => String(x[table.columns[i].name]).indexOf(table.dataModifier.search.value) !== -1));
                  data = data.filter(x => String(x[table.columns[i].name]).indexOf(table.dataModifier.search.value) === -1);
              }
          }

          data = temp;
      }
    }


 if (table.dataModifier.filters.length > 0) {
    for (let i = 0; i < table.dataModifier.filters.length; i++) {
        if(table.dataModifier.filters[i].apply)
           data = table.dataModifier.filters[i].apply(data);
    }
 }

 

      // Column Priority Sorting
      if (table.dataModifier.orders.length > 0) {
          let sortBy;
          for (let i = 0; i < table.dataModifier.orders.length; i++) {
              const order = (table.dataModifier.orders[i].direction === 'Desc') ? -1 : 1;
              if (i === 0) {
                  if (typeof data[0][table.dataModifier.orders[i].columnName] === 'string') {
                    //  console.log('String firstBy:' + table.columns[table.orders[i].columnIndex].name);
                      sortBy = firstBy(table.dataModifier.orders[i].columnName, {
                          ignoreCase: true,
                          direction: order
                      });
                  } else if (typeof data[0][table.dataModifier.orders[i].columnName] === 'number') {
                      sortBy = firstBy(function(v1, v2) {
                          return v1[table.dataModifier.orders[i].columnName] - v2[table.dataModifier.orders[i].columnName];
                      }, order);
                  } else {
                    //   console.log('otherType sort:' + typeof data[0][table.columns[table.dataModifier.orders[i].columnIndex].name]);
                  }
              } else {
                  if (typeof data[0][table.dataModifier.orders[i].columnName] === 'string') {
                      sortBy = sortBy.thenBy(table.dataModifier.orders[i].columnName, {
                          ignoreCase: true,
                          direction: order
                      });
                  } else if (typeof data[0][table.dataModifier.orders[i].columnName] === 'number') {
                      sortBy = sortBy.thenBy(function(v1, v2) {
                          return v1[table.dataModifier.orders[i].columnName] - v2[table.dataModifier.orders[i].columnName];
                      }, order);
                  } else {
                      console.log('otherType sort');
                  }
              }
          }
          data.sort(sortBy);
      }

// console.log('SIZE:' + table.dataModifier.currentPage + ' ' + table.pageSizes[table.pageSizeIndex]);
// this.page = this.data.slice(( this.currentPage - 1) * this.pageSize,  this.currentPage * this.pageSize);

      var totalRowsAfterModifications = data.length;
      var page = data.slice((table.dataModifier.currentPage-1) * table.pageSizes[table.pageSizeIndex], (table.dataModifier.currentPage * (table.pageSizes[table.pageSizeIndex])));
      var result = new FTableResult(page,totalRows,totalRowsAfterModifications,null);
      return of(result);
  }









  
//     getData1(url: string,
//             propertyNames: string[],
//             propertyTypes: string[],
//             sortStates: { 'propertyName': string , 'order': string}[],
//             filters:any[],
//             searchString: string) {

//         console.log(url);
//         console.log(propertyNames);
//         console.log(propertyTypes);
//         console.log(sortStates);
//         console.log(filters);
//         console.log(searchString);
 
//         let data = this.data;

//     // Generic Search
//     // TODO: Cater for Formatted Datatypes
//     let temp = [];
//     if (propertyNames.length > 0)  {
//     for (let i = 0; i < propertyNames.length; i++) {
//         if (propertyNames[i].length > 0) {
//             temp = temp.concat(data.filter(x => String(x[propertyNames[i]]).indexOf(searchString) !== -1));
//             data = data.filter(x => String(x[propertyNames[i]]).indexOf(searchString) === -1);
//         }
//     }

//     data = temp;
//   }

//   console.log(filters.length);
//     if (filters.length > 0)  {
//       temp = [];

//       for (let i = 0; i < filters.length; i++) {
//         // If string
//         if(propertyTypes[filters[i].index] == 'string') {
//             temp = data.filter(x =>
//                  String(x[propertyNames[filters[i].index]]).toLowerCase().indexOf(filters[i].data.value.toLowerCase()) !== -1);
//         // If number
//         } else if(propertyTypes[filters[i].index] == 'number') {
//           // if both min and max specified
//           if(filters[i].data.max && filters[i].data.min){
//             temp = data.filter(x =>
//                 ((Number(x[propertyNames[filters[i].index]]) >= filters[i].data.min) &&
//                  (Number(x[propertyNames[filters[i].index]]) <= filters[i].data.max)));
//           // if max only specified
//           } else if(filters[i].data.max) {
//              temp = data.filter(x =>
//                 Number(x[propertyNames[filters[i].index]]) <= filters[i].data.max);
//           // if only min specified
//           } else if(filters[i].data.min) {
//              temp = data.filter(x =>
//                 Number(x[propertyNames[filters[i].index]]) >= filters[i].data.min);
//           // if nothing is specified
//           } else  {
//             temp = data;
//           }
//         }
//             data = temp;
//       }
//       data = temp;
//     }


//     // Column Priority Sorting
//     // TODO: Cater for Formatted Datatypes
//     if (sortStates.length > 0) {
//         let sortBy;
//         for (let i = 0; i < sortStates.length; i++) {
//             const order = (sortStates[i].order === 'Desc') ? -1 : 1;
//             if (i === 0) {
//                 if (typeof data[0][sortStates[i].propertyName] === 'string') {
//                     console.log('String firstBy:' + sortStates[i].propertyName);
//                     sortBy = firstBy(sortStates[i].propertyName, {
//                         ignoreCase: true,
//                         direction: order
//                     });
//                 } else if (typeof data[0][sortStates[i].propertyName] === 'number') {
//                     sortBy = firstBy(function(v1, v2) {
//                         return v1[sortStates[i].propertyName] - v2[sortStates[i].propertyName];
//                     }, order);
//                 } else {
//                     console.log('otherType sort:' + typeof data[0][sortStates[i].propertyName]);
//                 }
//             } else {
//                 console.log('thenBy:' + sortStates[i].propertyName);
//                 if (typeof data[0][sortStates[i].propertyName] === 'string') {

//                     sortBy = sortBy.thenBy(sortStates[i].propertyName, {
//                         ignoreCase: true,
//                         direction: order
//                     });
//                 } else if (typeof data[0][sortStates[i].propertyName] === 'number') {
//                     sortBy = sortBy.thenBy(function(v1, v2) {
//                         return v1[sortStates[i].propertyName] - v2[sortStates[i].propertyName];
//                     }, order);
//                 } else {
//                     console.log('otherType sort');
//                 }
//             }
//         }
//         data.sort(sortBy);
//     }


//   return data;
//   }

}