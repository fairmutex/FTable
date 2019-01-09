import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
//import { CTableComponent } from '../ctable/ctable.component';
//import { CTableService } from "../ctable/ctable.service";



@Component({
    selector: 'app-fpaginate',
    templateUrl: './fpaginate.component.html',
    styleUrls: ['./fpaginate.component.scss'],

})


export class FPaginateComponent implements OnInit, OnChanges {

    @Output() PagingChange: EventEmitter<number> = new EventEmitter<number>();
 //   @Input() public totalItemsAfterFilters: number;

    @Input()
    set totalItemsAfterFilters(totalItemsAfterFilters: number) {
      this._totalItemsAfterFilters = totalItemsAfterFilters;
      this.totalPages = Math.ceil( this._totalItemsAfterFilters / this.itemsPerPage);
      this.currentPage = 1;
    }

    // Number of Items per page
    @Input() private itemsPerPage: number;
    // Data
    @Input() private totalItems: number;
    // Current Page
    @Input() public currentPage: number;
    // Number of Pagination pages


    private _totalItemsAfterFilters: number;
    public totalPages: number;

    // Redundant
    public itemsCount: number;


    constructor() {

    }

    ngOnInit() {
        // When the data is passed instantly, you can access it here.
        // You can also use {{childInput}} in your HTML

        console.log('TotalItems:' + this._totalItemsAfterFilters);
        this.totalPages = Math.ceil(this._totalItemsAfterFilters / this.itemsPerPage);
        console.log('TotalPages:' + this._totalItemsAfterFilters);
        this.setCurrentPage(this.currentPage);

    }

    ngOnChanges() {
        // When the data is passed instantly, you can access it here.
        // You can also use {{childInput}} in your HTML

        console.log('TotalItems:' + this._totalItemsAfterFilters);
        this.totalPages = Math.ceil(this._totalItemsAfterFilters / this.itemsPerPage);
        console.log('TotalPages:' + this._totalItemsAfterFilters);
    }

    setCurrentPage(number: number) {
        console.log(number);
        this.currentPage = number;
        this.PagingChange.emit(number);

    }


    // changePage(index: number) {
    //    console.log(index);
    //    this.currentPage = index;

    //}

    firstPage() {
        // this.currentPage = 1;#
        this.setCurrentPage(1);
        // this.onPagingChange.emit(1);
   }

   previousPage() {
       // this.currentPage--;
       this.setCurrentPage(this.currentPage - 1);
       // this.onPagingChange.emit(this.currentPage - 1);
   }

   nextPage() {
       // this.currentPage++;

       this.setCurrentPage(this.currentPage + 1);
       // this.onPagingChange.emit(this.currentPage + 1);
   }

   lastPage() {
       // this.currentPage = this.totalPages;
       this.setCurrentPage(this.totalPages);
      // this.onPagingChange.emit(this.totalPages);
   }

    isFirstDisabled() {
        return (this.currentPage === 1);
    }

    isPreviousDisabled() {
        return (this.currentPage === 1);
    }

    isNextDisabled() {
        return (this.currentPage === this.totalPages);
    }

    isLastDisabled() {
        return (this.currentPage === this.totalPages);
    }


}
