import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  constructor(private router: Router) {}

  AbrirPagina() {
    console.log("Você clicou no botão"); // Verifique se isso aparece no console
    this.router.navigate(['/jogo1']); // Navega para a página Jogo1
  }

  navegarDireita() {
    console.log("Você clicou no botão"); // Verifique se isso aparece no console
    this.router.navigate(['/jogo2']); // Navega para a página Jogo1

  }
  navegarEsquerda() {
    console.log("Você clicou no botão"); // Verifique se isso aparece no console
    this.router.navigate(['/jogo3']); // Navega para a página Jogo1

  }

  ngOnInit() {
    // Aqui você pode adicionar qualquer lógica adicional de inicialização se necessário
  }
}
