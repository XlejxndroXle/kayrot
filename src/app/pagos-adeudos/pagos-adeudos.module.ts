import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagosAdeudosPageRoutingModule } from './pagos-adeudos-routing.module';

import { PagosAdeudosPage } from './pagos-adeudos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagosAdeudosPageRoutingModule
  ],
  declarations: [PagosAdeudosPage]
})
export class PagosAdeudosPageModule {}
