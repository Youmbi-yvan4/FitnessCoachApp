import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionSetupPage } from './session-setup.page';

const routes: Routes = [
  {
    path: '',
    component: SessionSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionSetupPageRoutingModule {}
