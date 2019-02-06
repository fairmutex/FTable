import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
    selector: 'ft-fsearch',
    templateUrl: './fsearch.component.html',
    styleUrls: ['./fsearch.component.scss'],

})

export class FSearchComponent {

    @Output() search: EventEmitter<any> = new EventEmitter<any>();
    private searchUpdated: Subject<String> = new Subject<string>();

    onKeyUp(event) {
            console.log(event.target.value);
            this.search.emit({searchString: event.target.value});
       }

}
