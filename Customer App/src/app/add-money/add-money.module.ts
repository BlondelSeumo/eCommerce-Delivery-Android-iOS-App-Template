import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { AddMoneyPageRoutingModule } from './add-money-routing.module';

import { AddMoneyPage } from './add-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,     
    AddMoneyPageRoutingModule
  ],
  declarations: [AddMoneyPage]
})
export class AddMoneyPageModule {}
