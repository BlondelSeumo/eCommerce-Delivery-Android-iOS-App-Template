import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariationSelectionPage } from './variation-selection.page';

const routes: Routes = [
  {
    path: '',
    component: VariationSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariationSelectionPageRoutingModule {}
