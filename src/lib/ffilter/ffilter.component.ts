import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { EmptyFFilterComponent } from './filters/emptyffilter.component';
import { TextFFilterComponent } from './filters/textffilter.component';
import { NumberFFilterComponent } from './filters/numberffilter.component';
import { CheckBoxFFilterComponent } from './filters/checkboxffilter.component';
import { DateFFilterComponent } from './filters/dateffilter.component';
import { FFilterDirective } from './ffilter.directive';
// import { FFilter } from './model/ffilter.model';
import { FFilterBase } from './filters/ffilter.base';

import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
//                 // <h3>Filter</h3>
@Component({
  selector: 'ft-ffilter',
  template: `

                <ng-template ffilter-host></ng-template>
            `
})
export class FFilterComponent implements OnInit, OnDestroy {

  @ViewChild(FFilterDirective) ffilterHost: FFilterDirective; // Handle to template where to load custom filter

  // @Input() public columnIndex: number;
  @Input() public columnName: string;
  @Input() public debounce: number = 500;

  @Input() public filterType: any; // Type of filter to load or custom.
  @Input() public otherData: any;  // Other data needed to be passed to filter

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();
  
  filterr: FFilterBase;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

  loadComponent() {
    // Check if standard filters else load custom
    let  fftilter;
    if (this.filterType === 'string') {
        fftilter = TextFFilterComponent;
    } else if (this.filterType === 'number') {
        fftilter = NumberFFilterComponent;
    } else if (this.filterType === 'checkbox') {
        fftilter = CheckBoxFFilterComponent;
      } else if (this.filterType === 'date') {
        fftilter = DateFFilterComponent;
    } else if (typeof this.filterType  !== 'string') {
        fftilter = this.filterType;
    } else {
         // No filter Filter
         fftilter = EmptyFFilterComponent;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(fftilter);
    // get reference of insertion point through
    const viewContainerRef = this.ffilterHost.viewContainerRef;
    viewContainerRef.clear();
    // Create instance of component
    const componentRef = viewContainerRef.createComponent(componentFactory);
    // Pass data to filters
    (<FFilterBase>componentRef.instance).columnName = this.columnName;
    (<FFilterBase>componentRef.instance).otherData = this.otherData;

    // Bubble filter event
    (<FFilterBase>componentRef.instance).filter.pipe(debounceTime(this.debounce)).subscribe((event) => {
      this.filter.emit(event);
    });
    this.filterr = (<FFilterBase>componentRef.instance);
  }


  public reset() {
    this.filterr.reset();
  }

}
