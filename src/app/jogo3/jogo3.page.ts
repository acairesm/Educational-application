import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ // Adicione o @ aqui
  selector: 'app-jogo3',
  templateUrl: './jogo3.page.html',
  styleUrls: ['./jogo3.page.scss'],
})
export class Jogo3Page implements OnInit {
  
  constructor(private router: Router) {}

  AbrirPagina() {
    console.log("Você clicou no botão"); // Verifique se isso aparece no console
    this.router.navigate(['/jogo3e3']); // Navega para a página Jogo1
  }

  navegarDireita3() {
    console.log("Você clicou no botão"); // Verifique se isso aparece no console
    this.router.navigate(['/dashboard']); // Navega para a página Jogo2
  }

  navegarEsquerda3() {
    console.log("Você clicou no botão"); // Verifique se isso aparece no console
    this.router.navigate(['/jogo2']); // Navega para a página Jogo2
  }

  ngOnInit() {
    // Aqui você pode adicionar qualquer lógica adicional de inicialização se necessário
  }
}
