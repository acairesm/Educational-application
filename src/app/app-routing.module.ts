import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'jogo1',
    loadChildren: () => import('./jogo1/jogo1.module').then( m => m.Jogo1PageModule)
  },
  {
    path: 'jogo2',
    loadChildren: () => import('./jogo2/jogo2.module').then( m => m.Jogo2PageModule)
  },
  {
    path: 'jogo2e2',
    loadChildren: () => import('./jogo2e2/jogo2e2.module').then( m => m.Jogo2e2PageModule)
  },
  {
    path: 'jogo3',
    loadChildren: () => import('./jogo3/jogo3.module').then( m => m.Jogo3PageModule)
  },
  {
    path: 'jogo3e3',
    loadChildren: () => import('./jogo3e3/jogo3e3.module').then( m => m.Jogo3e3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
