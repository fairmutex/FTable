import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { FFilterBase } from './ffilter.base';


@Component({
  template: `
  <div *ngFor="let value of otherData;let index = index">
  <input  type="checkbox" name="propertyName" (click)='checkBoxClicked(index, value ,$event)' value="value" checked> {{ value }}<br>
</div>
  `
})
export class CheckBoxFFilterComponent implements FFilterBase, OnInit {
  @Input() public otherData: string[];
  @Input() public columnName: string;

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();

  private values: any[];

  constructor() {
    this.values = [];
  }

  ngOnInit() {
    // { value: x, checked: true }
    this.values = this.otherData.map(x => {
        const result = {};
        result['value'] = x;
        result['checked'] = true;
        return result;
      });
      console.log(this.values);
   }

  checkBoxClicked(index, value, event) {
     console.log('Debug:' + index, value, event);

    this.values = this.values.filter( x => x.value !== value);
    this.values.push({ value: value, checked: event.target.checked});
    console.log(this.values);


    const fn = function (name: string, values: any) {
      return d => {
        if (values.length > 0) {
          return (<any[]>d).filter(x => {
              const i = values.map(e => e.value).indexOf(String(x[name]));
              return i !== -1 && values[i].checked === true;
          });
        } else {
          return (<any[]>d);
        }
      };
    };
    this.filter.emit({ columnName: this.columnName, apply: fn(this.columnName, this.values) });
  }

}
