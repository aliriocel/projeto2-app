import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosDetalhePage } from './usuarios-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosDetalhePageRoutingModule {}
