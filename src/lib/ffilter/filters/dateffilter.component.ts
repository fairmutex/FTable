import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

import { FFilterBase } from './ffilter.base';

@Component({
  template: `
  <div class="input-group input-group-sm mb-3">
  <input  class="form-control input-sm" type="date" id="start" name="trip-start"  value=""  min="2015-01-01" max="2018-12-31">
  </div>
  <div class="input-group input-group-sm">
  <input  class="form-control input-sm" type="date" id="start" name="trip-start"  value=""  min="2015-01-01" max="2018-12-31">
  </div>
  `
})
export class DateFFilterComponent implements FFilterBase {
  @Input() public source: string;
  @Input() public otherData: any;
  @Input() public columnName: string;

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();

  onKeyUp(event) {
    if (this.source === 'frontend') {
    const fn = function (name, searchValue) {
      return d => {
        return (<any[]>d).filter(x => String(x[name]).toLowerCase().indexOf(String(searchValue).toLowerCase()) !== -1);
      };
    };
   
    this.filter.emit({ columnName: this.columnName,type:'date', apply: fn(this.columnName, event.target.value) });
  }else{
    var result = {min:'', max:''}
    this.filter.emit({ columnName: this.columnName,type:'date', apply: result });
  }
  }

  reset() { 

    this.filter.emit({ columnName: this.columnName, apply: null });
  }
}

// Ideas:
// Cater for Case-Sensitivity? in otherData ?
