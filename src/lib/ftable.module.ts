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

import { FTableComponent } from './ftable.component';
import { FPagerComponent } from './fpager.component';
import { FPaginateComponent } from './fpaginate.component';
import { FExporterComponent } from './fexporter.component';
import { FInfoComponent } from './finfo.component';
import { FSearchComponent } from './fsearch.component';

import { FSorterComponent } from './fsorter.component';
import { FFilterComponent } from './ffilter.component';
import { FTableService } from './ftable.service';
// import ftable from './ftable.model';



@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forChild([
      { path: 'tables', component: FTableComponent },
      // { path: 'table/Create',
      //   canDeactivate: [ DataEditGuard ],
      //   component: DataCreateComponent,
      // },
      // { path: 'table/:id',
      //   canActivate: [ DataDetailGuard ],
      //   component: DataDetailComponent
      // },

      // { path: 'table/Edit/:id',
      //   canDeactivate: [ DataEditGuard ],
      //   component: DataEditComponent
      //  },

    ])
      ], // , UniversalModule
    declarations: [
      FTableComponent,
      FPaginateComponent,
      FExporterComponent,
      FInfoComponent,
      FSearchComponent,
      FPagerComponent,
      FSorterComponent,
      FFilterComponent,
     //   DataListComponent,
        // DataDetailComponent,
        // DataEditComponent,
        // DataCreateComponent,
        // DataFilterPipe
    ],
    exports: [FTableComponent],
    providers: [
      FTableService,
        // DataService,
        // DataDetailGuard,
        // DataEditGuard
    ]
})
export class FTableModule { }
