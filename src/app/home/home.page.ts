import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importe o Router para navegação

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {  // Implemente OnInit para a inicialização

  constructor(private router: Router) {}  // Injete o Router no construtor

  ngOnInit() {
    // Temporizador para redirecionar após 3 segundos
    setTimeout(() => {
      this.router.navigate(['/dashboard']);  // Navega para a rota 'dashboard' após 3 segundos
    }, 5000);  // 3000 milissegundos = 3 segundos
  }

}
