import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ChatWithCustomerPageRoutingModule } from './chat-with-customer-routing.module';

import { ChatWithCustomerPage } from './chat-with-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    ChatWithCustomerPageRoutingModule
  ],
  declarations: [ChatWithCustomerPage]
})
export class ChatWithCustomerPageModule {}
