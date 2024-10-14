import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Certifique-se de importar o Router

@Component({
  selector: 'app-jogo2',
  templateUrl: './jogo2.page.html',
  styleUrls: ['./jogo2.page.scss'],
})
export class Jogo2Page implements OnInit {

  constructor(private router: Router) {}

  AbrirPagina2(){
    console.log("Você clicou no botão"); // Verifique se isso aparece no console
    this.router.navigate(['/jogo2e2']); // Navega para a página Jogo2

  }

  navegarDireita2() {
    this.router.navigate(['/jogo3']); // Navega para a página Dashboard

  }

  navegarEsquerda2() {
    console.log("Você clicou no botão"); // Verifique se isso aparece no console
    this.router.navigate(['/dashboard']); // Navega para a página Dashboard
  }

  ngOnInit() {
    // Aqui você pode adicionar qualquer lógica adicional de inicialização se necessário
  }

}
