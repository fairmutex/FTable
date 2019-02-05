import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import { FFilterBase } from './ffilter.base';


@Component({
  template: `
  <div class="input-group input-group-sm mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-sm">&gt;=</span>
    </div>
    <input class="form-control input-sm" type="number"  [(ngModel)]='min' (keyup)='numberKeyUp("min",$event)' #minRef ><br/>
    </div>
    <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-sm">&lt;=</span>
    </div>
    <input class="form-control input-sm" type="number"  [(ngModel)]='max' (keyup)='numberKeyUp("max",$event)' #maxRef >
  </div>
  `
})
export class NumberFFilterComponent implements FFilterBase {
  @ViewChild("minRef") _elMinRef: ElementRef;
  @ViewChild("maxRef") _elMaxRef: ElementRef;

  @Input() public source: string;
  @Input() public otherData: any;
  @Input() public columnName: string;

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();

  // Hold Inputted Values
  public min: number = null;
  public max: number = null;

  numberKeyUp(mode: string, event) {
    if (event.keyCode !== 8 && event.keyCode !== 46) {
      this[mode] = event.target.value;

      // Move focus for UX
      if (mode === 'min' && event.keyCode === 39) {
        this._elMaxRef.nativeElement.focus();
      }
      else if (mode === 'max' && event.keyCode === 39) {
        this._elMinRef.nativeElement.focus();
      }
    }

      if (this.source === 'frontend') {
        const fn = function (name, searchMin, searchMax) {
          return d => {
            return (<any[]>d).filter(x =>
              (searchMin ? searchMin <= Number(x[name]) : true) &&
              (searchMax ? searchMax >= Number(x[name]) : true)
            );
          };
        };
        this.filter.emit({ columnName: this.columnName, apply: fn(this.columnName, this.min, this.max) });
      } else {
        var result = { min: this.min, max: this.max };
        this.filter.emit({ columnName: this.columnName, type: 'number', apply: result });
      }
  }

  reset() {
    this.min = null;
    this.max = null;
    this.filter.emit({ columnName: this.columnName, apply: null });
  }
}
