import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { OnInit } from '@angular/core';
// import { Http } from '@angular/http';


// import { DataService } from './crud/data.service';

// import { FPaginateComponent } from './fpaginate.component';
// import { FPagerComponent } from './fpager.component';
// import { FInfoComponent } from './finfo.component';
// import { FSearchComponent } from './fsearch.component';
import { FTableService } from './ftable.service';
import {  FTable, FColumn, FSearch, FOrder, FFilter  } from './ftable.model';

// import { FExporterComponent } from './fexporter.component';

// import { FSorterComponent } from './fsorter.component';

@Component({
    selector: 'app-ftable',
    templateUrl: './ftable.component.html',
    styleUrls: ['./ftable.component.scss'],

})
export class FTableComponent implements OnChanges, OnInit {

//     // Table model injected
    @Input() public table: FTable;
        public page: any;

//    // @Input() private url: string;



//     // Classes that control the icons for sorting
    public sortIcons = [];

//     // Column Titles
//     private errorMessage: string;

    constructor(private _ftableService: FTableService
            ) {
                  this.sortIcons = ['fa fa-sort', 'fa fa-sort-asc', 'fa fa-sort-desc'];
    }


    ngOnInit() {
        this.page = this._ftableService.getData(this.table);
    }

    ngOnChanges(changes) {
        // When the data is async : get the changes when they are ready
        // Get @Input data when it's ready

        if (changes.url) {
            this.page = this._ftableService.getData(this.table);
        }
    }


    onPageOptionChange(pageSizeIndex: number) {
        this.table.pageSizeIndex = pageSizeIndex;
        this.page = this._ftableService.getData(this.table);
    }

    onPagingChange(pageNumber: number) {
        this.table.currentPage = pageNumber;
        this.page = this._ftableService.getData(this.table);
    }


    sortOrder(index, event) {
        this.table.orders =  this.table.orders.filter(x => x.columnIndex !== index);
        if (event.state !== '') {
            this.table.orders.push(new FOrder(index, event.state));
        }
        this.page = this._ftableService.getData(this.table);
    }


    filter(index, event) {
        this.table.filters = this.table.filters.filter(x => this.table.columns[x.columnIndex].name !== this.table.columns[index].name);
        if (event.state !== '') {
            if (this.table.columns[index].type === 'string') {
                this.table.filters.push(new FFilter(index, event.value));
            } else if (this.table.columns[index].type === 'number') {
                this.table.filters.push(new FFilter(index,  {'min': event.min, 'max': event.max }));
            } else if (this.table.columns[index].type === 'checkbox') {
                this.table.filters.push(new FFilter(index,  {'value': event.value, 'checked': event.checked }));
            }
        }
        this.page = this._ftableService.getData(this.table);
    }


    search(event) {
        this.table.search = new FSearch(event.searchString);
        this.page = this._ftableService.getData(this.table);
    }

}
