import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsTableModule } from 'bootstrap-cdk';

import { TableComponent } from './table.component';

const routes: Routes = [
  { path: '', component: TableComponent },
];

@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BsTableModule,
  ],
})
export class TableModule {
}
