import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionSetupPageRoutingModule } from './session-setup-routing.module';

import { SessionSetupPage } from './session-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionSetupPageRoutingModule
  ],
  declarations: [SessionSetupPage]
})
export class SessionSetupPageModule {}
