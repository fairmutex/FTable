
import {  FTable, FTableResult, FTableDataModifier } from '../ftable.model';
import { Observable } from 'rxjs';


export abstract class FTableBaseService {


    // public data = [];

    // abstract setData(idProperty:string,idValue:any,propertyToChange:string,fn: (n:any)=>any):any
    abstract setData(id:any,propertyToChange:string,fn:any):Observable<any>

    // abstract getData(table: FTable):Observable<FTableResult>;
    abstract getData(table: FTable):Observable<FTableResult>;

    // abstract getRowByColumnNameAndValue(name: string,value:any):Observable<any>;
     abstract get(id:any):Observable<any>;


     abstract delete(id:any):Observable<any>;

}