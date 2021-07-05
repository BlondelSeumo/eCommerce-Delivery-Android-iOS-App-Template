import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DeliveredSuccesfullyPageRoutingModule } from './delivered-succesfully-routing.module';

import { DeliveredSuccesfullyPage } from './delivered-succesfully.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    DeliveredSuccesfullyPageRoutingModule
  ],
  declarations: [DeliveredSuccesfullyPage]
})
export class DeliveredSuccesfullyPageModule {}
