import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo3e3',
  templateUrl: './jogo3e3.page.html',
  styleUrls: ['./jogo3e3.page.scss'],
})
export class Jogo3e3Page implements OnInit {
  palavras: string[] = ['MACACO', 'GATO', 'PEIXE', 'CACHORRO', 'PORCO'];
  palavraEscolhida: string = '';
  letrasTentadas: string[] = [];
  maxTentativas: number = 6;
  tentativasRestantes: number = this.maxTentativas;
  letraEntrada: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.iniciarJogo();
  }

  iniciarJogo() {
    this.palavraEscolhida = this.palavras[Math.floor(Math.random() * this.palavras.length)];
    this.letrasTentadas = [];
    this.tentativasRestantes = this.maxTentativas;
    this.letraEntrada = '';
  }

  tentarLetra() {
    const letra = this.letraEntrada.toUpperCase();
    if (letra && !this.letrasTentadas.includes(letra) && this.tentativasRestantes > 0) {
      this.letrasTentadas.push(letra);
      if (!this.palavraEscolhida.includes(letra)) {
        this.tentativasRestantes--;
      }
      this.letraEntrada = ''; // Limpa o campo de entrada
    }
  }

  palavraOculta(): string {
    return this.palavraEscolhida.split('').map(letra => 
      this.letrasTentadas.includes(letra) ? letra : '_'
    ).join(' ');
  }

  jogoGanho(): boolean {
    return this.palavraEscolhida.split('').every(letra => this.letrasTentadas.includes(letra));
  }

  jogoPerdido(): boolean {
    return this.tentativasRestantes <= 0;
  }

  voltarDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
