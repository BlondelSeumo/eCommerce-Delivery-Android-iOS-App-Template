import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddReviewPage } from './add-review.page';

const routes: Routes = [
  {
    path: '',
    component: AddReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddReviewPageRoutingModule {}
