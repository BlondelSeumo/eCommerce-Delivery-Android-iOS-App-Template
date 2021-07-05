import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneNumberPage } from './phone-number.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneNumberPageRoutingModule {}
