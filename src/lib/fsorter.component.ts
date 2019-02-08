import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'ft-fsorter',
    templateUrl: './fsorter.component.html',
    styleUrls: ['./fsorter.component.scss'],

})

export class FSorterComponent {
    @Input() public icons: string[];
    @Output() order: EventEmitter<any> = new EventEmitter<any>();

    public states: string[];
    public nextState: number;
    public currentIcon: number;

    constructor() {
        this.nextState = 0;
        this.currentIcon = 0;
        this.states = ['', 'Asc', 'Desc'];
    }

    next() {
        this.nextState = (this.nextState + 1) % 3;
        this.currentIcon = this.nextState;
        this.order.emit({ state: this.states[this.nextState] });
    }

}
