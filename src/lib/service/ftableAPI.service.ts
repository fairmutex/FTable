import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

import {  map } from 'rxjs/operators';
import {firstBy} from 'thenby';
import {  FTable, FColumn, FSearch, FOrder , FTableResult, FTableDataModifier } from '../ftable.model';
import { FTableBaseService } from './ftablebase.service';
import {Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })


@Injectable()
export class FTableAPIService implements FTableBaseService{

    constructor(private httpClient: HttpClient) {
    }

     private httpHeaders: HttpHeaders
     private APIURL: string


    setAPIConfig(APIURL: string, httpHeaders: HttpHeaders) {
        this.httpHeaders = httpHeaders;
        this.APIURL = APIURL;
      //  this.http.post(APIURL,'',{headers: headers});
    } 
    
    get(id:any){
        return this.httpClient.get(this.APIURL+id,{headers: this.httpHeaders});
    }

    // getByColumnNameAndValue(name: string,value:any): Observable<any>{
    //  return this.httpClient.get(this.APIURL+'/'+)
    // }


    /*
    *
    */
    setData(id:any,propertyToChange:string,value: any):Observable<any>{
        console.log(this.APIURL+id+'/'+propertyToChange);
        let options = {
            headers: this.httpHeaders
       }; 

       return this.httpClient.put(this.APIURL+id+'/'+propertyToChange,'"'+value+'"',options);
    }

    delete(id:any):Observable<any>{
        let options = {
            headers: this.httpHeaders
       }; 

       return this.httpClient.delete(this.APIURL+id,options);
    }

        getData(table: FTable): Observable<FTableResult> {
            // console.log("post getdata:"+this.APIURL+'FTables');
            let options = {
                headers: this.httpHeaders
           }; 
            return this.httpClient.post<FTableResult>(this.APIURL+'FTables',table.dataModifier,options);
            

        }

}