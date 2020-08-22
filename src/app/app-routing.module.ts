import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  
  {
    path: 'noticias-list',
    loadChildren: () => import('./noticias-list/noticias-list.module').then( m => m.NoticiasListPageModule)
  },
  {
    path: 'noticias-detalhe/:id',
    loadChildren: () => import('./noticias-detalhe/noticias-detalhe.module').then( m => m.NoticiasDetalhePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
