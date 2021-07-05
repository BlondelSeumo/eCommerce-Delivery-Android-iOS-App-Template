import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProductPage } from './edit-product.page';

const routes: Routes = [
  {
    path: '',
    component: EditProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProductPageRoutingModule {}
