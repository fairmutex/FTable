import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FPagerComponent } from './fpager.component';
import { FPaginateComponent } from './fpaginate.component';
import { FExporterComponent } from './fexporter.component';
import { FInfoComponent } from './finfo.component';
import { FSearchComponent } from './fsearch.component';

import { FSorterComponent } from './fsorter.component';
import { FFilterComponent } from './ffilter/ffilter.component';
import { FFilterDirective } from './ffilter/ffilter.directive';
import { FTableLocalService } from './service/ftablelocal.service';
import { FTableAPIService } from './service/ftableAPI.service';

import { EmptyFFilterComponent } from './ffilter/filters/emptyffilter.component';
import { TextFFilterComponent } from './ffilter/filters/textffilter.component';
import { NumberFFilterComponent } from './ffilter/filters/numberffilter.component';
import { CheckBoxFFilterComponent } from './ffilter/filters/checkboxffilter.component';
import { DateFFilterComponent } from './ffilter/filters/dateffilter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    FPaginateComponent,
    FExporterComponent,
    FInfoComponent,
    FSearchComponent,
    FPagerComponent,
    FSorterComponent,
    FFilterComponent,
    FFilterDirective,
    TextFFilterComponent,
    NumberFFilterComponent,
    CheckBoxFFilterComponent,
    DateFFilterComponent,
    EmptyFFilterComponent
  ],
  exports: [
    FPaginateComponent,
    FExporterComponent,
    FInfoComponent,
    FSearchComponent,
    FPagerComponent,
    FSorterComponent,
    FFilterComponent
  ],
  entryComponents: [
    TextFFilterComponent,
    NumberFFilterComponent,
    CheckBoxFFilterComponent,
    DateFFilterComponent,
    EmptyFFilterComponent

  ],
  providers: [
    FTableAPIService,
    FTableLocalService
  ]
})
export class FTableModule { }
