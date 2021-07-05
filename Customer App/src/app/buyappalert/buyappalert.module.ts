import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyappalertPageRoutingModule } from './buyappalert-routing.module';

import { BuyappalertPage } from './buyappalert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyappalertPageRoutingModule
  ],
  declarations: [BuyappalertPage]
})
export class BuyappalertPageModule {}
