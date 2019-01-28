import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

import { FFilterBase } from './ffilter.base';


@Component({
  template: `
  <div class="input-group input-group-sm mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-sm">&gt;</span>
    </div>
    <input class="form-control input-sm" type="number"  (keyup)='numberKeyUp("min",$event)'><br/>
    </div>
    <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-sm">&lt;</span>
    </div>
    <input class="form-control input-sm" type="number" (keyup)='numberKeyUp("max",$event)'>
  </div>
  `
  // <input class="form-control input-sm" type="number"  (keyup)='numberKeyUp("min",$event)'> <br />
  // <input class="form-control input-sm" type="number" (keyup)='numberKeyUp("max",$event)'>
})
export class NumberFFilterComponent implements FFilterBase {
  @Input() public otherData: any;
  @Input() public columnName: string;

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();

  // Hold Inputted Values
  private min: number;
  private max: number;

  numberKeyUp(mode, event) {
    this[mode] = event.target.value;
    const fn = function (name, searchMin, searchMax) {
      return d => {
        if (searchMin && searchMax) {
          return (<any[]>d).filter(x => ((Number(x[name]) >= searchMin) && (Number(x[name]) <= searchMax)));
        } else if (searchMin) {
          return (<any[]>d).filter(x => (Number(x[name]) >= searchMin));
        } else if (searchMax) {
          return (<any[]>d).filter(x => (Number(x[name]) <= searchMax));
        } else {
          return (<any[]>d);
        }
      };
    };
    this.filter.emit({ columnName: this.columnName, apply: fn(this.columnName, this.min, this.max) });
  }

}

