import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocilaLoginPage } from './socila-login.page';

const routes: Routes = [
  {
    path: '',
    component: SocilaLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocilaLoginPageRoutingModule {}
