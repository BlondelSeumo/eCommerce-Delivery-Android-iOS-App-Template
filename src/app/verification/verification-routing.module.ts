import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificationPage } from './verification.page';

const routes: Routes = [
  {
    path: '',
    component: VerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationPageRoutingModule {}
