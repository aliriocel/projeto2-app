import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosNewPageRoutingModule } from './usuarios-new-routing.module';

import { UsuariosNewPage } from './usuarios-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosNewPageRoutingModule,    
    ReactiveFormsModule
  ],
  declarations: [UsuariosNewPage]
})
export class UsuariosNewPageModule {}
