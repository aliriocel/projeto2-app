import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosUpdatePageRoutingModule } from './usuarios-update-routing.module';

import { UsuariosUpdatePage } from './usuarios-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UsuariosUpdatePage]
})
export class UsuariosUpdatePageModule {}
