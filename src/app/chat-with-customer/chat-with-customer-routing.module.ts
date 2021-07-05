import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatWithCustomerPage } from './chat-with-customer.page';

const routes: Routes = [
  {
    path: '',
    component: ChatWithCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatWithCustomerPageRoutingModule {}
