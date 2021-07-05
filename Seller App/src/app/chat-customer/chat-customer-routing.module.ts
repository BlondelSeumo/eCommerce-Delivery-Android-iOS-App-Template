import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatCustomerPage } from './chat-customer.page';

const routes: Routes = [
  {
    path: '',
    component: ChatCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatCustomerPageRoutingModule {}
