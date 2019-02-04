import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import { FFilterBase } from './ffilter.base';

@Component({
  template: `
  <div class="datefilter input-group input-group-sm mb-3" style='width:180px;'>
  <input class="form-control input-sm" type='text'  placeholder='dd'    [(ngModel)]='minDay'   (keydown)='onKeyUp("minDay",   2, $event)' (keyup)='onKeyUp("minDay",   2 ,$event)' style='width:45px;' #minDayRef />
  <input class="form-control input-sm" type='text'  placeholder='mm'    [(ngModel)]='minMonth' (keydown)='onKeyUp("minMonth", 2, $event)' (keyup)='onKeyUp("minMonth", 2 ,$event)' style='width:45px;' #minMonthRef />
  <input class="form-control input-sm" type='text'  placeholder='yyyy'  [(ngModel)]='minYear'  (keydown)='onKeyUp("minYear",  4, $event)' (keyup)='onKeyUp("minYear",  4 ,$event)' style='width:90px;' #minYearRef />
  </div>
  <div class="input-group input-group-sm" style='width:180px;'>
  <input class="form-control input-sm" type='text'  placeholder='dd'    [(ngModel)]='maxDay'   (keydown)='onKeyUp("maxDay" ,  2, $event)' (keyup)='onKeyUp("maxDay",   2, $event)' style='width:45px;' #maxDayRef />
  <input class="form-control input-sm" type='text'  placeholder='mm'    [(ngModel)]='maxMonth' (keydown)='onKeyUp("maxMonth", 2, $event)' (keyup)='onKeyUp("maxMonth", 2, $event)' style='width:45px;' #maxMonthRef />
  <input class="form-control input-sm" type='text'  placeholder='yyyy'  [(ngModel)]='maxYear'  (keydown)='onKeyUp("maxYear",  4, $event)' (keyup)='onKeyUp("maxYear",  4, $event)' style='width:90px;' #maxYearRef />
  </div>
  `,
  styles: ['.datefilter { display:flex; flex-grow:1 }']
})

export class DateFFilterComponent implements FFilterBase {
  @ViewChild("minDayRef")   _elMinDayRef:   ElementRef;
  @ViewChild("minMonthRef") _elMinMonthRef: ElementRef;
  @ViewChild("minYearRef")  _elMinYearRef:  ElementRef;

  @ViewChild("maxDayRef")   _elMaxDayRef:   ElementRef;
  @ViewChild("maxMonthRef") _elMaxMonthRef: ElementRef;
  @ViewChild("maxYearRef")  _elMaxYearRef:  ElementRef;


  @Input() public source: string;
  @Input() public otherData: any;
  @Input() public columnName: string;

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();


  public minDay   = '';
  public minMonth = '';
  public minYear  = '';
  public maxDay   = '';
  public maxMonth = '';
  public maxYear  = '';

  onKeyUp(mode: string, max:number, event) {
    // filter letters and Trim
    this[mode] = this[mode].match(/[0-9]*/).join('').substring(0, max);
    
    // Move focus for UX
    if(mode === 'minDay' && this[mode].length === 2){
               this._elMinMonthRef.nativeElement.focus();
    }
    else if(mode === 'minMonth' && this[mode].length === 2){
               this._elMinYearRef.nativeElement.focus();
    }
    else if(mode === 'minYear' && this[mode].length === 4){
               this._elMaxDayRef.nativeElement.focus();
    }
    else if(mode === 'maxDay' && this[mode].length === 2){
               this._elMaxMonthRef.nativeElement.focus();
    }
    else if(mode === 'maxMonth' && this[mode].length === 2){
               this._elMaxYearRef.nativeElement.focus();
    }
    else if(mode === 'maxYear' && this[mode].length === 4){
               this._elMinDayRef.nativeElement.focus();
    }

    if (this.source === 'frontend') {
    const fn = function (name, minDay,minMonth,minYear,maxDay,maxMonth,maxYear) {
      return d => {
        return (<any[]>d).filter(x => {
            const date = new Date(x[name]);
            return (minDay.length   > 0? Number(minDay)   <= date.getDate()    : true) &&
                   (minMonth.length > 0? Number(minMonth) <= date.getMonth()+1 : true) &&
                   (minYear.length  > 0? Number(minYear)  <= date.getFullYear(): true) &&
                   (maxDay.length   > 0? Number(maxDay)   >= date.getDate()    : true) &&
                   (maxMonth.length > 0? Number(maxMonth) >= date.getMonth()+1 : true) &&
                   (maxYear.length  > 0? Number(maxYear)  >= date.getFullYear(): true) 
        });
      };
    };
   
    this.filter.emit({ columnName: this.columnName,type:'date', apply: fn(this.columnName, this.minDay,this.minMonth,this.minYear, this.maxDay,this.maxMonth,this.maxYear) });
  }else{
    var result =  { minDay:this.minDay, minMonth:this.minMonth, minYear:this.minYear, maxDay:this.minDay, maxMonth:this.minMonth, maxYear:this.maxYear};
    this.filter.emit({ columnName: this.columnName,type:'date', apply: result });
  }
  }

  reset() { 
    this.minDay = '';
    this.minMonth = '';
    this.minYear = '';
    this.maxDay = '';
    this.maxMonth = '';
    this.maxYear = '';
    this.filter.emit({ columnName: this.columnName, apply: null });
  }
}
