
import {  FTable } from '../ftable.model';



export abstract class FTableBaseService {


    public data = [];

    abstract setData(idProperty:string,idValue:any,propertyToChange:string,fn: (n:any)=>any):any

    abstract getData(table: FTable): any[];

}