import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachDetailsPage } from './coach-details.page';

const routes: Routes = [
  {
    path: '',
    component: CoachDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachDetailsPageRoutingModule {}
