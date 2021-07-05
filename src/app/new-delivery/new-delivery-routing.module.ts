import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDeliveryPage } from './new-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: NewDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDeliveryPageRoutingModule {}
