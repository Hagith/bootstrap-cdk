import { NgModule } from '@angular/core';

import { BsTableModule } from './table';

const MODULES = [BsTableModule];

@NgModule({ imports: MODULES, exports: MODULES })
export class BootstrapCdkModule {
}
