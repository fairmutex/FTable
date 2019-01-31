import { FTableBaseService } from './service/ftablebase.service';
import {  FTable, FColumn, FSearch, FOrder, FFilter  } from './ftable.model';
import { OnChanges } from '@angular/core';
import { OnInit } from '@angular/core';


import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { FFilterComponent } from './ffilter/ffilter.component';

export class FTableComponent implements OnChanges, OnInit {

    @ViewChildren(FFilterComponent) filterChildren: QueryList<FFilterComponent>;

    public table: FTable;
    public page = [];
    // Classes that control the icons for sorting
    public sortIcons = [];

//     // Column Titles
//     private errorMessage: string;

    constructor(public _ftableService: FTableBaseService) {
                  this.sortIcons = ['fa fa-sort', 'fa fa-sort-asc', 'fa fa-sort-desc'];
    }

    ngOnInit() {
        this.refreshPage();
        // this.page = this._ftableService.getData(this.table);
    }

    ngOnChanges(changes) {
        // When the data is async : get the changes when they are ready
        // Get @Input data when it's ready
        if (changes.url) {
            this.refreshPage();
            // this.page = this._ftableService.getData(this.table);
        }
    }

    onPageOptionChange(pageSizeIndex: number) {
        this.table.pageSizeIndex = pageSizeIndex;
        this.refreshPage();
        // this.page = this._ftableService.getData(this.table);
    }

    onPagingChange(pageNumber: number) {
        this.table.currentPage = pageNumber;
        this.refreshPage();
        // this.page = this._ftableService.getData(this.table);
    }

    sortOrder(index, event) {
        this.table.orders =  this.table.orders.filter(x => x.columnIndex !== index);
        if (event.state !== '') {
            this.table.orders.push(new FOrder(index, event.state));
        }
        this.refreshPage();
        // this.page = this._ftableService.getData(this.table);
    }

    filter(event) {
        // console.log("ftable.base:filter(event)");
        // console.log(event);
        this.table.filters = this.table.filters.filter(x => x.columnName !== event.columnName);
        // Push Filter
        this.table.filters.push(new FFilter(event.columnName,event.apply))
        // Filter the data
        this.refreshPage();
        // this.page = this._ftableService.getData(this.table);
    }

    search(event) {
        this.table.search = new FSearch(event.searchString);
        this.refreshPage();
        // this.page = this._ftableService.getData(this.table);
    }


    getGlobalIndex(index: number){

    }

    refreshPage(){
        this.page = this._ftableService.getData(this.table);
    }


    changeValue(idProperty:string,idValue:any,propertyToChange: string,fn: (n:any)=>any){
        this._ftableService.setData(idProperty,idValue,propertyToChange,fn);
        this.refreshPage();
    }

    
    public resetFilters() {
        this.filterChildren.forEach(x => x.reset());
    }
}