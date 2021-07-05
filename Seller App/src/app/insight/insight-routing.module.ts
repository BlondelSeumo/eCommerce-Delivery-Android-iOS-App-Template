import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsightPage } from './insight.page';

const routes: Routes = [
  {
    path: '',
    component: InsightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsightPageRoutingModule {}
