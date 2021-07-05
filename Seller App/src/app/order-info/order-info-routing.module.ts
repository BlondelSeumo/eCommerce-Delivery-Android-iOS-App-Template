import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderInfoPage } from './order-info.page';

const routes: Routes = [
  {
    path: '',
    component: OrderInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderInfoPageRoutingModule {}
