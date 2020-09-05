import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosDeletePageRoutingModule } from './usuarios-delete-routing.module';

import { UsuariosDeletePage } from './usuarios-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosDeletePageRoutingModule
  ],
  declarations: [UsuariosDeletePage]
})
export class UsuariosDeletePageModule {}
