import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosUpdatePage } from './usuarios-update.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosUpdatePageRoutingModule {}
