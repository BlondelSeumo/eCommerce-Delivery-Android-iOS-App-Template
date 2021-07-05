import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { VerificationPageRoutingModule } from './verification-routing.module';

import { VerificationPage } from './verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    VerificationPageRoutingModule
  ],
  declarations: [VerificationPage]
})
export class VerificationPageModule {}
