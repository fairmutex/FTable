import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
    selector: 'ft-fpaginate',
    templateUrl: './fpaginate.component.html',
    styleUrls: ['./fpaginate.component.scss'],

})

export class FPaginateComponent implements OnInit, OnChanges {

    // Number of Items per page
    @Input() private itemsPerPage: number;
    // Data
    @Input() private totalItems: number;
    // Current Page
    @Input() public currentPage: number;

    @Input()
    set totalItemsAfterFilters(totalItemsAfterFilters: number) {
        this._totalItemsAfterFilters = totalItemsAfterFilters;
        this.totalPages = Math.ceil(this._totalItemsAfterFilters / this.itemsPerPage);
        this.currentPage = 1;
    }


    @Output() PagingChange: EventEmitter<number> = new EventEmitter<number>();

    private _totalItemsAfterFilters: number;
    public totalPages: number;

    ngOnInit() {
        this.totalPages = Math.ceil(this._totalItemsAfterFilters / this.itemsPerPage);
        this.setCurrentPage(this.currentPage);
    }

    ngOnChanges() {
        this.totalPages = Math.ceil(this._totalItemsAfterFilters / this.itemsPerPage);
    }

    setCurrentPage(number: number) {
        this.currentPage = number;
        this.PagingChange.emit(number);
    }

    firstPage() {
        this.setCurrentPage(1);
    }

    previousPage() {
        this.setCurrentPage(this.currentPage - 1);
    }

    nextPage() {
        this.setCurrentPage(this.currentPage + 1);
    }

    lastPage() {
        this.setCurrentPage(this.totalPages);
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
