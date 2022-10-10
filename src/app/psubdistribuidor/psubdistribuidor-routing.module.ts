import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsubdistribuidorPage } from './psubdistribuidor.page';

const routes: Routes = [
  {
    path: '',
    component: PsubdistribuidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsubdistribuidorPageRoutingModule {}
