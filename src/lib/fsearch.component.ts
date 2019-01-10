import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

// import "rxjs/add/operator/debounceTime";
// import "rxjs/add/operator/distinctUntilChanged";


@Component({
    selector: 'ft-fsearch',
    templateUrl: './fsearch.component.html',
    styleUrls: ['./fsearch.component.scss'],

})


export class FSearchComponent {

    @Output() search: EventEmitter<any> = new EventEmitter<any>();
    private searchUpdated: Subject<String> = new Subject<string>();


    constructor() {
        // this.searchChangeEmitter = this.searchUpdated
        // .pipe(debounceTime(200))
        // .pipe(distinctUntilChanged()
        // .subscribe(() => {}));


        // this.search.emit({state: this.states[this.nextState]});

    }

    // ngOnInit(): void {

    // }



    onKeyUp(event) {
      //  if (event.key === 'Enter') {
            console.log(event.target.value);
            this.search.emit({searchString: event.target.value});
    //      }
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




}
