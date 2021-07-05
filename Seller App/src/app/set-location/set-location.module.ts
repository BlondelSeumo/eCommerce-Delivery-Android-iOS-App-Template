import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { SetLocationPageRoutingModule } from './set-location-routing.module';

import { SetLocationPage } from './set-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    SetLocationPageRoutingModule
  ],
  declarations: [SetLocationPage]
})
export class SetLocationPageModule {}
