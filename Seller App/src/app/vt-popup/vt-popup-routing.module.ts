import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VtPopupPage } from './vt-popup.page';

const routes: Routes = [
  {
    path: '',
    component: VtPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VtPopupPageRoutingModule {}
