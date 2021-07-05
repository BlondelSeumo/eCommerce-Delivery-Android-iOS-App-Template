import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedAddressesPage } from './saved-addresses.page';

const routes: Routes = [
  {
    path: '',
    component: SavedAddressesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedAddressesPageRoutingModule {}
