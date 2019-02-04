import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';


export class FFilterBase {
  @Input() public source: string;
  @Input() public otherData: any;
  @Input() public columnName: string;
  @Output() filter: EventEmitter<any> = new EventEmitter<any>();


  reset() { }
}
