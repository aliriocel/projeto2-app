import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosDeletePage } from './usuarios-delete.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosDeletePageRoutingModule {}
