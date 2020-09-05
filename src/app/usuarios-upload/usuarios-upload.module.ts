import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosUploadPageRoutingModule } from './usuarios-upload-routing.module';

import { UsuariosUploadPage } from './usuarios-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosUploadPageRoutingModule
  ],
  declarations: [UsuariosUploadPage]
})
export class UsuariosUploadPageModule {}
