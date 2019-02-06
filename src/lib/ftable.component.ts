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
    }

    ngOnChanges(changes) {
        // When the data is async : get the changes when they are ready
        // Get @Input data when it's ready
        if (changes.url) {
            this.refreshPage();
        }
    }

    onPageOptionChange(pageSizeIndex: number) {
        this.table.pageSizeIndex = pageSizeIndex;
        this.refreshPage();
    }

    onPagingChange(pageNumber: number) {
        this.table.dataModifier.currentPage = pageNumber;
        this.refreshPage();
    }

    // sortOrder(index, event) {
    //     this.table.dataModifier.orders =  this.table.dataModifier.orders.filter(x => x.columnIndex !== index);
    //     if (event.state !== '') {
    //         this.table.dataModifier.orders.push(new FOrder(index, event.state));
    //     }
    //     this.refreshPage();
    // }

    sortOrder(columnName:string, event) {
        this.table.dataModifier.orders =  this.table.dataModifier.orders.filter(x => x.columnName !== columnName);
        if (event.state !== '') {
            this.table.dataModifier.orders.push(new FOrder(columnName, event.state));
        }
        this.refreshPage();
    }

    private filterResetCount:number = 0;
    filter(event) {
        // TODO Count Resets
        this.table.dataModifier.filters = this.table.dataModifier.filters.filter(x => x.columnName !== event.columnName);
        // Push Filter
        console.log(event);
        this.table.dataModifier.filters.push(new FFilter(event.columnName,event.type,event.apply));

        // If reset count all filter resets and emit one reset event
        if (event.apply == null){
            if(++this.filterResetCount == this.table.dataModifier.filters.length){
              this.filterResetCount = 0;
              this.refreshPage();
          }
        }else{
           this.refreshPage();
        }
    }

    search(event) {
        this.table.dataModifier.search = new FSearch(event.searchString);
        this.refreshPage();
    }




    refreshPage(){
         this._ftableService.getData(this.table)
        .subscribe(
            (result) => {
                 this.table.result = result;
            }, error => {
              console.log("Error", error);
            });
          
    }


    changeValue(idValue:any,propertyToChange: string,fn: any){
        this._ftableService.setData(idValue,propertyToChange,fn)
        .subscribe(
            (result) => {
                this.refreshPage();
            }, error => {
              console.log("Error", error);
            });
       
    }

    
    public resetFilters() {
        this.filterChildren.forEach(x => x.reset());
    }
}