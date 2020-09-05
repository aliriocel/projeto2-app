import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosUploadPage } from './usuarios-upload.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosUploadPageRoutingModule {}
