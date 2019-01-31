import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {  map } from 'rxjs/operators';
import {firstBy} from 'thenby';
import {  FTable, FColumn, FSearch, FOrder  } from '../ftable.model';
import { FTableBaseService } from './ftablebase.service';

// @Injectable({
//   providedIn: 'root'
// })


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


 

    /*
    *
    */
    setData(idProperty:string,idValue:any,propertyToChange:string,fn: (n:any)=>any){
       var row = this.data.find(d=>d[idProperty] === idValue);
       row[propertyToChange] = fn(row[propertyToChange]);
    }


    getData(table: FTable) {

      // console.log(JSON.stringify(table));

      let data = this.data;

      for (let i = 0; i < table.columns.length; i++) {
        if (table.columns[i].type === 'checkbox') {
           // table.columns[i].filterData = [...new Set(data.map(x => x[table.columns[i].name]))];
            table.columns[i].filterData = Array.from(new Set(data.map(x => x[table.columns[i].name])))
        }
      }



      table.totalRows = data.length;
      // Generic Search
      // TODO: Cater for Formatted Datatypes
      if (table.search.value) {
        table.currentPage = 1;
      if (table.columns.length > 0) {
        let temp = [];
          for (let i = 0; i < table.columns.length; i++) {
              if (table.columns[i].name.length > 0) {
                  temp = temp.concat(data.filter(x => String(x[table.columns[i].name]).indexOf(table.search.value) !== -1));
                  data = data.filter(x => String(x[table.columns[i].name]).indexOf(table.search.value) === -1);
              }
          }

          data = temp;
      }
    }


 if (table.filters.length > 0) {
    for (let i = 0; i < table.filters.length; i++) {
        if(table.filters[i].apply)
           data = table.filters[i].apply(data);
    }
 }

 

      // Column Priority Sorting
      // TODO: Cater for Formatted Datatypes
      if (table.orders.length > 0) {
          let sortBy;
          for (let i = 0; i < table.orders.length; i++) {
              const order = (table.orders[i].direction === 'Desc') ? -1 : 1;
              if (i === 0) {
                  if (typeof data[0][table.columns[table.orders[i].columnIndex].name] === 'string') {
                    //  console.log('String firstBy:' + table.columns[table.orders[i].columnIndex].name);
                      sortBy = firstBy(table.columns[table.orders[i].columnIndex].name, {
                          ignoreCase: true,
                          direction: order
                      });
                  } else if (typeof data[0][table.columns[table.orders[i].columnIndex].name] === 'number') {
                      sortBy = firstBy(function(v1, v2) {
                          return v1[table.columns[table.orders[i].columnIndex].name] - v2[table.columns[table.orders[i].columnIndex].name];
                      }, order);
                  } else {
                      console.log('otherType sort:' + typeof data[0][table.columns[table.orders[i].columnIndex].name]);
                  }
              } else {
                  console.log('thenBy:' + table.columns[table.orders[i].columnIndex].name);
                  if (typeof data[0][table.columns[table.orders[i].columnIndex].name] === 'string') {

                      sortBy = sortBy.thenBy(table.columns[table.orders[i].columnIndex].name, {
                          ignoreCase: true,
                          direction: order
                      });
                  } else if (typeof data[0][table.columns[table.orders[i].columnIndex].name] === 'number') {
                      sortBy = sortBy.thenBy(function(v1, v2) {
                          return v1[table.columns[table.orders[i].columnIndex].name] - v2[table.columns[table.orders[i].columnIndex].name];
                      }, order);
                  } else {
                      console.log('otherType sort');
                  }
              }
          }
          data.sort(sortBy);
      }

console.log('SIZE:' + table.currentPage + ' ' + table.pageSizes[table.pageSizeIndex]);
// this.page = this.data.slice(( this.currentPage - 1) * this.pageSize,  this.currentPage * this.pageSize);

      table.filteredRows = data.length;
      return data.slice((table.currentPage-1) * table.pageSizes[table.pageSizeIndex], (table.currentPage * (table.pageSizes[table.pageSizeIndex])));
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