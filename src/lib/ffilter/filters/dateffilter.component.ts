import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import { FFilterBase } from './ffilter.base';

@Component({
  template: `

  <table class='ft-ffilter-table ft-ffilter-date-table'>
  <tr class='ft-ffilter-column'>
      <td class='ft-ffilter-row  ft-ffilter-dd-row'>
          <input class="ft-i ft-i-ffilter ft-i-ffilter-day" type='text'  placeholder='dd'    [(ngModel)]='minDay'   (keyup)='onKeyUp("minDay",   2, $event)'  #minDayRef />
      </td>
      <td class='ft-ffilter-row  ft-ffilter-mm-row'>
          <input class="ft-i ft-i-ffilter ft-i-ffilter-month" type='text'  placeholder='mm'    [(ngModel)]='minMonth' (keyup)='onKeyUp("minMonth", 2, $event)' #minMonthRef />
      </td>
      <td class='ft-ffilter-row  ft-ffilter-yyyy-row'>
          <input class="ft-i ft-i-ffilter ft-i-ffilter-year" type='text'  placeholder='yyyy'  [(ngModel)]='minYear'  (keyup)='onKeyUp("minYear",  4, $event)'   #minYearRef />
      </td>
  </tr>
  <tr class='ft-ffilter-column'>
      <td class='ft-ffilter-row  ft-ffilter-dd-row'>
          <input class="ft-i ft-i-ffilter ft-i-ffilter-day" type='text'  placeholder='dd'    [(ngModel)]='maxDay'   (keyup)='onKeyUp("maxDay" ,  2, $event)'  #maxDayRef />
      </td>
      <td class='ft-ffilter-row  ft-ffilter-mm-row'>
          <input class="ft-i ft-i-ffilter ft-i-ffilter-month" type='text'  placeholder='mm'    [(ngModel)]='maxMonth' (keyup)='onKeyUp("maxMonth", 2, $event)'  #maxMonthRef />
      </td>
      <td class='ft-ffilter-row  ft-ffilter-yyyy-row'>
          <input class="ft-i ft-i-ffilter ft-i-ffilter-year" type='text'  placeholder='yyyy'  [(ngModel)]='maxYear'  (keyup)='onKeyUp("maxYear",  4, $event)'  #maxYearRef />
      </td>
  </tr>
</table>
  <!--
  <div class='ft-ffilter'>
    <div class="ft-filter-date ft-div1-ffilter">
    <input class="ft-i ft-i-filter ft-i-filter-day" type='text'  placeholder='dd'    [(ngModel)]='minDay'   (keyup)='onKeyUp("minDay",   2, $event)'  #minDayRef />
    <input class="ft-i ft-i-filter ft-i-filter-month" type='text'  placeholder='mm'    [(ngModel)]='minMonth' (keyup)='onKeyUp("minMonth", 2, $event)' #minMonthRef />
    <input class="ft-i ft-i-filter ft-i-filter-year" type='text'  placeholder='yyyy'  [(ngModel)]='minYear'  (keyup)='onKeyUp("minYear",  4, $event)'   #minYearRef />
    </div>
    <div class="ft-filter-date ft-div2-ffilter">
    <input class="ft-i ft-i-filter ft-i-filter-day" type='text'  placeholder='dd'    [(ngModel)]='maxDay'   (keyup)='onKeyUp("maxDay" ,  2, $event)'  #maxDayRef />
    <input class="ft-i ft-i-filter ft-i-filter-month" type='text'  placeholder='mm'    [(ngModel)]='maxMonth' (keyup)='onKeyUp("maxMonth", 2, $event)'  #maxMonthRef />
    <input class="ft-i ft-i-filter ft-i-filter-year" type='text'  placeholder='yyyy'  [(ngModel)]='maxYear'  (keyup)='onKeyUp("maxYear",  4, $event)'  #maxYearRef />
    </div>
  </div>

  -->
  `,
  styles: [`
  :host { flex:1;
  }`]
})

export class DateFFilterComponent implements FFilterBase {
  @ViewChild("minDayRef") _elMinDayRef: ElementRef;
  @ViewChild("minMonthRef") _elMinMonthRef: ElementRef;
  @ViewChild("minYearRef") _elMinYearRef: ElementRef;

  @ViewChild("maxDayRef") _elMaxDayRef: ElementRef;
  @ViewChild("maxMonthRef") _elMaxMonthRef: ElementRef;
  @ViewChild("maxYearRef") _elMaxYearRef: ElementRef;


  @Input() public source: string;
  @Input() public otherData: any;
  @Input() public columnName: string;

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();


  public minDay = '';
  public minMonth = '';
  public minYear = '';
  public maxDay = '';
  public maxMonth = '';
  public maxYear = '';

  onKeyUp(mode: string, max: number, event) {
    // Ignore if Delete or Backspace
    if (event.keyCode !== 8 && event.keyCode !== 46) {
      // filter letters and Trim
      this[mode] = this[mode].match(/[0-9]*/).join('').substring(0, max);

      // Move focus for UX
      if (mode === 'minDay' && (this[mode].length === 2 || event.keyCode === 39)) {
        this._elMinMonthRef.nativeElement.focus();
      }
      else if (mode === 'minMonth' && (this[mode].length === 2 || event.keyCode === 39)) {
        this._elMinYearRef.nativeElement.focus();
      }
      else if (mode === 'minYear' && (this[mode].length === 4 || event.keyCode === 39)) {
        this._elMaxDayRef.nativeElement.focus();
      }
      else if (mode === 'maxDay' && (this[mode].length === 2 || event.keyCode === 39)) {
        this._elMaxMonthRef.nativeElement.focus();
      }
      else if (mode === 'maxMonth' && (this[mode].length === 2 || event.keyCode === 39)) {
        this._elMaxYearRef.nativeElement.focus();
      }
      else if (mode === 'maxYear' && (this[mode].length === 4 || event.keyCode === 39)) {
        this._elMinDayRef.nativeElement.focus();
      }
    }

    if (this.source === 'frontend') {
      const fn = function (name, minDay, minMonth, minYear, maxDay, maxMonth, maxYear) {
        return d => {
          return (<any[]>d).filter(x => {
            console.log(name, minDay, minMonth, minYear, maxDay, maxMonth, maxYear);
            const date = new Date(x[name]);
            return (minDay.length > 0 ? Number(minDay) <= date.getDate() : true) &&
              (minMonth.length > 0 ? Number(minMonth) <= date.getMonth() + 1 : true) &&
              (minYear.length > 0 ? Number(minYear) <= date.getFullYear() : true) &&
              (maxDay.length > 0 ? Number(maxDay) >= date.getDate() : true) &&
              (maxMonth.length > 0 ? Number(maxMonth) >= date.getMonth() + 1 : true) &&
              (maxYear.length > 0 ? Number(maxYear) >= date.getFullYear() : true)
          });
        };
      };

      this.filter.emit({ columnName: this.columnName, type: 'date', apply: fn(this.columnName, this.minDay, this.minMonth, this.minYear, this.maxDay, this.maxMonth, this.maxYear) });
    } else {
      var result = { minDay: this.minDay, minMonth: this.minMonth, minYear: this.minYear, maxDay: this.maxDay, maxMonth: this.maxMonth, maxYear: this.maxYear };
      this.filter.emit({ columnName: this.columnName, type: 'date', apply: result });
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
