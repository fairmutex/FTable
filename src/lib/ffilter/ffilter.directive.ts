import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ffilter-host]',
})
export class FFilterDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

