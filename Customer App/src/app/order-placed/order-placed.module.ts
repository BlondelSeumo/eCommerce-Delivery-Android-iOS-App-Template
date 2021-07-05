import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { OrderPlacedPageRoutingModule } from './order-placed-routing.module';

import { OrderPlacedPage } from './order-placed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    OrderPlacedPageRoutingModule
  ],
  declarations: [OrderPlacedPage]
})
export class OrderPlacedPageModule {}
