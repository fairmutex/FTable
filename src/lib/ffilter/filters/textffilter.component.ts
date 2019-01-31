import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

import { FFilterBase } from './ffilter.base';

@Component({
  template: `
  <div class="input-group input-group-sm mb-3">
  <input class="form-control input-sm" type='text' [(ngModel)]='value' (keyup)='onKeyUp($event)'/>
  </div>
  `
})
export class TextFFilterComponent implements FFilterBase {
  @Input() public otherData: any;
  @Input() public columnName: string;

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();

  public value = '';

  onKeyUp(event) {
    const fn = function (name, searchValue) {
      return d => {
        return (<any[]>d).filter(x => String(x[name]).toLowerCase().indexOf(String(searchValue).toLowerCase()) !== -1);
      };
    };
    this.filter.emit({ columnName: this.columnName, apply: fn(this.columnName, event.target.value) });
  }


    reset() {
    this.value = '';
    this.filter.emit({ columnName: this.columnName, apply: null });
  }
}
