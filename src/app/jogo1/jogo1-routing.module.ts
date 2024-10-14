import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jogo1Page } from './jogo1.page';

const routes: Routes = [
  {
    path: '',
    component: Jogo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Jogo1PageRoutingModule {}
