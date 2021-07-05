import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { TermsConditionsPageRoutingModule } from './terms-conditions-routing.module';

import { TermsConditionsPage } from './terms-conditions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    TermsConditionsPageRoutingModule
  ],
  declarations: [TermsConditionsPage]
})
export class TermsConditionsPageModule {}
