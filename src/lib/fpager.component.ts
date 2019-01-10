import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter  } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
    selector: 'ft-fpager',
    templateUrl: './fpager.component.html',
    styleUrls: ['./fpager.component.scss'],

})


export class FPagerComponent implements OnInit {
    @Input() public selectedPageIndex: number;
    @Input() public pageOptions: Array<number>;
    @Output() onPageOptionChange = new EventEmitter<Number>();


    constructor() {

    }

    ngOnInit() {
        console.log(JSON.stringify(+this.pageOptions));
    }




    onChange(event: any) {
         this.selectedPageIndex = this.pageOptions.indexOf(Number(event.target.value));
        this.onPageOptionChange.emit(this.pageOptions.indexOf(Number(event.target.value)));
    }








}
