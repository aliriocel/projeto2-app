import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'noticias-list',
    pathMatch: 'full'
  },
  
  {
    path: 'noticias-list',
    loadChildren: () => import('./noticias-list/noticias-list.module').then( m => m.NoticiasListPageModule),
    canActivate : [AuthGuardService]
  },
  {
    path: 'noticias-detalhe/:id',
    loadChildren: () => import('./noticias-detalhe/noticias-detalhe.module').then( m => m.NoticiasDetalhePageModule),
    canActivate : [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logoff',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate : [AuthGuardService]
  },
  {
    path: 'noticias-new',
    loadChildren: () => import('./noticias-new/noticias-new.module').then( m => m.NoticiasNewPageModule)
  },
  {
    path: 'noticias-update/:id',
    loadChildren: () => import('./noticias-update/noticias-update.module').then( m => m.NoticiasUpdatePageModule)
  },
  {
    path: 'noticias-delete/:id',
    loadChildren: () => import('./noticias-delete/noticias-delete.module').then( m => m.NoticiasDeletePageModule)
  },
  {
    path: 'noticias-upload/:id',
    loadChildren: () => import('./noticias-upload/noticias-upload.module').then( m => m.NoticiasUploadPageModule)
  },
  {
    path: 'usuarios-list',
    loadChildren: () => import('./usuarios-list/usuarios-list.module').then( m => m.UsuariosListPageModule),
    canActivate : [AuthGuardService]
  },
  {
    path: 'usuarios-new',
    loadChildren: () => import('./usuarios-new/usuarios-new.module').then( m => m.UsuariosNewPageModule)
  },
  {
    path: 'usuarios-detalhe/:id',
    loadChildren: () => import('./usuarios-detalhe/usuarios-detalhe.module').then( m => m.UsuariosDetalhePageModule)
  },
  {
    path: 'usuarios-update/:id',
    loadChildren: () => import('./usuarios-update/usuarios-update.module').then( m => m.UsuariosUpdatePageModule)
  },
  {
    path: 'usuarios-upload/:id',
    loadChildren: () => import('./usuarios-upload/usuarios-upload.module').then( m => m.UsuariosUploadPageModule)
  },
  {
    path: 'usuarios-delete/:id',
    loadChildren: () => import('./usuarios-delete/usuarios-delete.module').then( m => m.UsuariosDeletePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
