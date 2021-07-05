import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptedPage } from './accepted.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptedPageRoutingModule {}
