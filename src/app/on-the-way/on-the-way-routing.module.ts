import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnTheWayPage } from './on-the-way.page';

const routes: Routes = [
  {
    path: '',
    component: OnTheWayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnTheWayPageRoutingModule {}
