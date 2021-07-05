import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { AcceptedPageRoutingModule } from './accepted-routing.module';

import { AcceptedPage } from './accepted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    AcceptedPageRoutingModule
  ],
  declarations: [AcceptedPage]
})
export class AcceptedPageModule {}
