import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { OnInit } from '@angular/core';
// import { CTableComponent } from '../ctable/ctable.component';
// import { CTableService } from "../ctable/ctable.service";



@Component({
    selector: 'app-finfo',
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

    // Redundant
   // private itemsCount: number;
    Math: any;

    constructor() {
        this.Math = Math;
    }

    ngOnInit() {
        // When the data is passed instantly, you can access it here.
        // You can also use {{childInput}} in your HTML
        console.log('TotalItems:' + this.totalItems);
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        console.log('TotalPages:' + this.totalPages);
    }








}
