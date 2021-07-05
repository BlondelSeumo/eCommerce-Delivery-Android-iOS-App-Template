import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
     
import { IonicModule } from '@ionic/angular';

import { SendToBankPageRoutingModule } from './send-to-bank-routing.module';

import { SendToBankPage } from './send-to-bank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    SendToBankPageRoutingModule
  ],
  declarations: [SendToBankPage]
})
export class SendToBankPageModule {}
