import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter  } from '@angular/core';

@Component({
    selector: 'ft-fpager',
    templateUrl: './fpager.component.html',
    styleUrls: ['./fpager.component.scss'],

})

export class FPagerComponent {
    @Input() public selectedPageIndex: number;
    @Input() public pageOptions: Array<number>;
    @Output() onPageOptionChange = new EventEmitter<Number>();

    onChange(event: any) {
         this.selectedPageIndex = this.pageOptions.indexOf(Number(event.target.value));
         this.onPageOptionChange.emit(this.pageOptions.indexOf(Number(event.target.value)));
    }

}
