import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveredSuccesfullyPage } from './delivered-succesfully.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveredSuccesfullyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveredSuccesfullyPageRoutingModule {}
