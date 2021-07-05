import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VtPopupPageRoutingModule } from './vt-popup-routing.module';

import { VtPopupPage } from './vt-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VtPopupPageRoutingModule
  ],
  declarations: [VtPopupPage]
})
export class VtPopupPageModule {}
