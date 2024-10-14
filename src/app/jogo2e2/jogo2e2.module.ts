import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jogo2e2PageRoutingModule } from './jogo2e2-routing.module';

import { Jogo2e2Page } from './jogo2e2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jogo2e2PageRoutingModule
  ],
  declarations: [Jogo2e2Page]
})
export class Jogo2e2PageModule {}
