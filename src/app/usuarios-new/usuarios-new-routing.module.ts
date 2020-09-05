import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosNewPage } from './usuarios-new.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosNewPageRoutingModule {}
