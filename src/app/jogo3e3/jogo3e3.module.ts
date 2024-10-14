import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jogo3e3PageRoutingModule } from './jogo3e3-routing.module';

import { Jogo3e3Page } from './jogo3e3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jogo3e3PageRoutingModule
  ],
  declarations: [Jogo3e3Page]
})
export class Jogo3e3PageModule {}
