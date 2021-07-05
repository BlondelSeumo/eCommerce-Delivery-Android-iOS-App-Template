import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAccountPage } from './my-account.page';

const routes: Routes = [
  {
    path: '',
    component: MyAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAccountPageRoutingModule {}
