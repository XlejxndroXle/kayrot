import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagosAdeudosPage } from './pagos-adeudos.page';

const routes: Routes = [
  {
    path: '',
    component: PagosAdeudosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosAdeudosPageRoutingModule {}
