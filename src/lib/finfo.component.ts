import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
    selector: 'ft-finfo',
    templateUrl: './finfo.component.html',
    styleUrls: ['./finfo.component.scss'],
})

export class FInfoComponent implements OnInit {
    @Input() public totalItemsAfterFilters: number;
    // Number of Items per page
    @Input() public itemsPerPage: number;
    // Data
    @Input() public totalItems: number;
    // Current Page
    @Input() public currentPage: number;
    // Number of Pagination pages
    private totalPages: number;
    // Orientation of Pagination

    Math: any;

    constructor() {
        this.Math = Math;
    }

    ngOnInit() {
        // console.log('TotalItems:' + this.totalItems);
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        // console.log('TotalPages:' + this.totalPages);
    }

}
