import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosDetalhePageRoutingModule } from './usuarios-detalhe-routing.module';

import { UsuariosDetalhePage } from './usuarios-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosDetalhePageRoutingModule
  ],
  declarations: [UsuariosDetalhePage]
})
export class UsuariosDetalhePageModule {}
