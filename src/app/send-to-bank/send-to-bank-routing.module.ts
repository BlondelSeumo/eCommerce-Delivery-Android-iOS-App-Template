import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendToBankPage } from './send-to-bank.page';

const routes: Routes = [
  {
    path: '',
    component: SendToBankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendToBankPageRoutingModule {}
