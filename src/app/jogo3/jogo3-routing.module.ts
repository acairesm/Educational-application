import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jogo3Page } from './jogo3.page';

const routes: Routes = [
  {
    path: '',
    component: Jogo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jogo3PageRoutingModule {}
