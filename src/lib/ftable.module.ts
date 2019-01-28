import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



// import { DataListComponent } from './crud/data-list.component';
// import { DataDetailComponent } from './crud/data-detail.component';
// import { DataDetailGuard, DataEditGuard } from './crud/data-guard.service';
// import { DataEditComponent } from './crud/data-edit.component';
// import { DataCreateComponent } from './crud/data-create.component';

// import { DataFilterPipe } from './crud/data-filter.pipe';
// import { DataService } from './crud/data.service';


// import { UniversalModule } from 'angular2-universal';

// import { FTableComponent } from './ftable.component';
import { FPagerComponent } from './fpager.component';
import { FPaginateComponent } from './fpaginate.component';
import { FExporterComponent } from './fexporter.component';
import { FInfoComponent } from './finfo.component';
import { FSearchComponent } from './fsearch.component';

import { FSorterComponent } from './fsorter.component';
 import { FFilterComponent } from './ffilter/ffilter.component';
 import { FFilterDirective } from './ffilter/ffilter.directive';
import { FTableService } from './ftable.service';
// import ftable from './ftable.model';

// import {FFilterService } from './ffilter/ffilter.service';

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
    //   RouterModule.forChild([
    //   // { path: 'tables', component: FTableComponent },
    //   // { path: 'table/Create',
    //   //   canDeactivate: [ DataEditGuard ],
    //   //   component: DataCreateComponent,
    //   // },
    //   // { path: 'table/:id',
    //   //   canActivate: [ DataDetailGuard ],
    //   //   component: DataDetailComponent
    //   // },

    //   // { path: 'table/Edit/:id',
    //   //   canDeactivate: [ DataEditGuard ],
    //   //   component: DataEditComponent
    //   //  },

    // ])
      ], // , UniversalModule
    declarations: [
      // FTableComponent,
      FPaginateComponent,
      FExporterComponent,
      FInfoComponent,
      FSearchComponent,
      FPagerComponent,
      FSorterComponent,
       FFilterComponent,
       FFilterDirective,
     //   DataListComponent,
        // DataDetailComponent,
        // DataEditComponent,
        // DataCreateComponent,
        // DataFilterPipe
        TextFFilterComponent,
        NumberFFilterComponent,
        CheckBoxFFilterComponent,
      DateFFilterComponent,
        EmptyFFilterComponent
    ],
    exports: [
      // FTableComponent,
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
      FTableService,
      // FFilterService
        // DataService,
        // DataDetailGuard,
        // DataEditGuard
    ]
})
export class FTableModule { }
