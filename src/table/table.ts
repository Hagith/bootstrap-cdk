import { CDK_TABLE_TEMPLATE, CdkTable } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bs-table, table[bs-table]',
  exportAs: 'bsTable',
  template: CDK_TABLE_TEMPLATE,
  host: {
    class: 'table',
  },
  providers: [{ provide: CdkTable, useExisting: BsTable }],
  encapsulation: ViewEncapsulation.None,
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BsTable<T> extends CdkTable<T> {
  protected stickyCssClass = 'bs-table-sticky';
}
