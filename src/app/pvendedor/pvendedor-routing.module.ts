import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvendedorPage } from './pvendedor.page';

const routes: Routes = [
  {
    path: '',
    component: PvendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvendedorPageRoutingModule {}
