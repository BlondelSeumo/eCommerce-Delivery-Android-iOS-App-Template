import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreProfilePage } from './store-profile.page';

const routes: Routes = [
  {
    path: '',
    component: StoreProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreProfilePageRoutingModule {}
