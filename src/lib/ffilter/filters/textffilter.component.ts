import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

import { FFilterBase } from './ffilter.base';

@Component({
  template: `
  <div class="ft-ffilter">
    <div class="ft-div1-ffilter">
      <input class="ft-i ft-i-filter" type='text' [(ngModel)]='value' (keyup)='onKeyUp($event)'/>
    </div>
  </div>
  `
})
export class TextFFilterComponent implements FFilterBase {
  @Input() public source: string;
  @Input() public otherData: any;
  @Input() public columnName: string;

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();

  public value = '';

  onKeyUp(event) {
    if (this.source === 'frontend') {
    const fn = function (name, searchValue) {
      return d => {
        return (<any[]>d).filter(x => String(x[name]).toLowerCase().indexOf(String(searchValue).toLowerCase()) !== -1);
      };
    };
    this.filter.emit({ columnName: this.columnName, apply: fn(this.columnName, event.target.value) });
  }else{
    var result =  {value:event.target.value};
    this.filter.emit({ columnName: this.columnName,type:'string', apply: result });
  }
  }


    reset() {
    this.value = '';
    this.filter.emit({ columnName: this.columnName, apply: null });
  }
}
