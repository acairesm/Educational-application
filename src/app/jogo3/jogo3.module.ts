import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jogo3PageRoutingModule } from './jogo3-routing.module';

import { Jogo3Page } from './jogo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jogo3PageRoutingModule
  ],
  declarations: [Jogo3Page]
})
export class Jogo3PageModule {}
