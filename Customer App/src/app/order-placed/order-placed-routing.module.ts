import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPlacedPage } from './order-placed.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPlacedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPlacedPageRoutingModule {}
