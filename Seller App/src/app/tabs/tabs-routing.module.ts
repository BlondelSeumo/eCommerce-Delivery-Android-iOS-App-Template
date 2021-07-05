import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'my_orders',
        loadChildren: () => import('../my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
      },
      {
        path: 'items',
        loadChildren: () => import('../items/items.module').then(m => m.ItemsPageModule)
      },
      {
        path: 'my_account',
        loadChildren: () => import('../my-account/my-account.module').then(m => m.MyAccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/items',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/items',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
