import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Jogo1PageRoutingModule } from './jogo1-routing.module';
import { Jogo1Page } from './jogo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jogo1PageRoutingModule
  ],
  declarations: [Jogo1Page]
})
export class Jogo1PageModule {}
