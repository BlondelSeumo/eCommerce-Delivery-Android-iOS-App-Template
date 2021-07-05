import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMoneyPage } from './add-money.page';

const routes: Routes = [
  {
    path: '',
    component: AddMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMoneyPageRoutingModule {}
