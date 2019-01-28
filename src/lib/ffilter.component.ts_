import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';



@Component({
    selector: 'ft-ffilter',
    templateUrl: './ffilter.component.html',
    styleUrls: ['./ffilter.component.scss'],

})


export class FFilterComponent {
    // Number of Items per page
    @Output() filter: EventEmitter<any> = new EventEmitter<any>();
    @Input() public propertyType: string;
    @Input() private propertyName: string;
    @Input() public otherData: any;


  private min: number;
  private max: number;

    // Data
    // @Input() private items: any[];
    // //Current Page
    // @Input() private currentPage: number;
    // // Number of Pagination pages
    // private totalPages: number;
    // // Orientation of Pagination

    // // Redundant
    // private itemsCount: number;
    // Math: any;

    constructor() {
       // this.Math = Math;
    }


    text(event) {
       // if (event.key === 'Enter') {
            console.log(event.target.value);
            this.filter.emit({value: event.target.value});
      //    }
        //    if (this.nextState === this.states.length - 1) {
        //        this.nextState = 0;
        //    } else {
        //        this.nextState++;
        //    }
        // this.nextState = (this.nextState + 1) % 3;
        // this.currentIcon = this.nextState;
        //  //  console.log(this.nextState );
        // this.order.emit({state: this.states[this.nextState]});
       }

       numberKeyUp(name, event) {
       // if (event.key === 'Enter') {
           this[name] = event.target.value;
           this.filter.emit({  min: this.min, max: this.max});
      //  }
    }


    // maxNumberKeyUp(event) {
    //     if (event.key === 'Enter') {
    //         this.max = event.target.value;
    //         this.filter.emit({value: event.target.value});
    //       }
    // }



    next() {
        //    if (this.nextState === this.states.length - 1) {
        //        this.nextState = 0;
        //    } else {
        //        this.nextState++;
        //    }
        // this.nextState = (this.nextState + 1) % 3;
        // this.currentIcon = this.nextState;
        //  //  console.log(this.nextState );
        // this.filter.emit({state: this.states[this.nextState]});
       }



       checkBoxClicked(value, event) {
        // console.log(value+":"+event.target.checked);

        // if (event.key === 'Enter') {
            this.filter.emit({value: value, checked: event.target.checked});
       //  }
     }

       





}
