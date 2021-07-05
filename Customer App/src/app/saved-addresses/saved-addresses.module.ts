import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { SavedAddressesPageRoutingModule } from './saved-addresses-routing.module';

import { SavedAddressesPage } from './saved-addresses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    SavedAddressesPageRoutingModule
  ],
  declarations: [SavedAddressesPage]
})
export class SavedAddressesPageModule {}
