import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
// import { OnInit } from '@angular/core';
// import { CTableComponent } from '../ctable/ctable.component';
// import { CTableService } from "../ctable/ctable.service";



@Component({
    selector: 'ft-fsorter',
    templateUrl: './fsorter.component.html',
    styleUrls: ['./fsorter.component.scss'],

})


export class FSorterComponent {
    // @Input() private index: number;

    @Output() order: EventEmitter<any> = new EventEmitter<any>();
    // Number of Items per page
    // @Input() private states: string[];
    // // Data
    @Input() public icons: string[];


    public states: string[];
   // public icons: string[];
    // Current Page
    // Number of Pagination pages
    // @Output() onPagingChange = new EventEmitter<Number>();


   public nextState: number;
   public currentIcon: number;


   constructor() {
       this.nextState = 0;
       this.currentIcon = 0;
       this.states = ['', 'Asc', 'Desc'];
    }

   next() {
    //    if (this.nextState === this.states.length - 1) {
    //        this.nextState = 0;
    //    } else {
    //        this.nextState++;
    //    }
    this.nextState = (this.nextState + 1) % 3;
    this.currentIcon = this.nextState;
     //  console.log(this.nextState );
    this.order.emit({state: this.states[this.nextState]});
   }

}
