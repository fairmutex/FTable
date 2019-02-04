import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { FFilterBase } from './ffilter.base';
// import { initDomAdapter } from '@angular/platyform-browser/src/browser';

@Component({
  template: `
  <div *ngFor="let value of otherData;let index = index">
  <input  type="checkbox" [name]="columnName" (click)='checkBoxClicked(index, value ,$event)' value="value" [(ngModel)]='values[index].checked'> {{ value }}<br>
</div>
  `
})
export class CheckBoxFFilterComponent implements FFilterBase, OnInit {
  @Input() public source: string;
  @Input() public otherData: string[];
  @Input() public columnName: string;

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();

  public values: any[];

  constructor() {
    this.values = [];
  }

  ngOnInit() {
    this.initData();
  }

  private initData() {
    this.values = this.otherData.map(x => {
      const result = {};
      result['value'] = x;
      result['checked'] = true;
      return result;
    });
  }

  checkBoxClicked(index, value, event) {
    if (this.source === 'frontend') {
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
    } else {

      this.values[index].checked = !this.values[index].checked
      var filtered = this.values.filter(x=>x.checked === true).map(a => a.value);
      var result = {values:filtered};
      this.filter.emit({ columnName: this.columnName,type:'checkbox', apply: result });
    }
  }

  reset() {
    this.initData();
    this.filter.emit({ columnName: this.columnName, apply: null });
  }

}