import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jogo3e3Page } from './jogo3e3.page';

const routes: Routes = [
  {
    path: '',
    component: Jogo3e3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jogo3e3PageRoutingModule {}
