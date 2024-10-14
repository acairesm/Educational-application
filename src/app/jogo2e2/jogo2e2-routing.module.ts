import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jogo2e2Page } from './jogo2e2.page';

const routes: Routes = [
  {
    path: '',
    component: Jogo2e2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jogo2e2PageRoutingModule {}
