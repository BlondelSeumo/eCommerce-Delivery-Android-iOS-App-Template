import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { OnTheWayPageRoutingModule } from './on-the-way-routing.module';

import { OnTheWayPage } from './on-the-way.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,     
    OnTheWayPageRoutingModule
  ],
  declarations: [OnTheWayPage]
})
export class OnTheWayPageModule {}
