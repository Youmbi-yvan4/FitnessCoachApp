import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachDetailsPageRoutingModule } from './coach-details-routing.module';

import { CoachDetailsPage } from './coach-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachDetailsPageRoutingModule
  ],
  declarations: [CoachDetailsPage]
})
export class CoachDetailsPageModule {}
