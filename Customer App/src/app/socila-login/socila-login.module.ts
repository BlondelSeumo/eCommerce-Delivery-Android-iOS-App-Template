import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SocilaLoginPageRoutingModule } from './socila-login-routing.module';

import { SocilaLoginPage } from './socila-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    SocilaLoginPageRoutingModule
  ],
  declarations: [SocilaLoginPage]
})
export class SocilaLoginPageModule {}
