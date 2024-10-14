import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jogo2e2',
  templateUrl: './jogo2e2.page.html', // Verifique se o nome do arquivo de template é o correto
  styleUrls: ['./jogo2e2.page.scss'],
})
export class Jogo2e2Page {
  resultadoMensagem: string = '';
  animalNome: string = '';
  animalImagem: string = '';
  opcoes: string[] = [];

  private animais = [
    { nome: 'Macaco', imagem: 'assets/img/macaco.png' },
    { nome: 'Elefante', imagem: 'assets/img/elefante.png' },
    { nome: 'Girafa', imagem: 'assets/img/girafa.png' },
    { nome: 'Leão', imagem: 'assets/img/leão.png' },
    { nome: 'Jacaré', imagem: 'assets/img/jacare.png' },
    { nome: 'Pássaro', imagem: 'assets/img/pássaro.png' },
    { nome: 'Cachorro', imagem: 'assets/img/cachorro.png' },
    { nome: 'Gato', imagem: 'assets/img/gato.png' },
    { nome: 'Peixe', imagem: 'assets/img/peixe.png' },
    { nome: 'Porco', imagem: 'assets/img/porco.png' },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.mudarAnimal(); // Muda o animal ao iniciar a página
  }

  verificarResposta(opcaoEscolhida: string) {
    if (opcaoEscolhida === this.animalNome) {
      this.resultadoMensagem = `Correto! O animal é um ${this.animalNome}.`;
    } else {
      this.resultadoMensagem = 'Incorreto! Tente novamente.';
    }
  }

  mudarAnimal() {
    this.resultadoMensagem = ''; // Limpa a mensagem de resultado ao mudar de animal
    const animalAtual = this.animais[Math.floor(Math.random() * this.animais.length)];
    this.animalNome = animalAtual.nome;
    this.animalImagem = animalAtual.imagem;

    const opcoesCorretas = this.animais.map(animal => animal.nome).filter(nome => nome !== this.animalNome);
    const opcoesAleatorias = opcoesCorretas.sort(() => Math.random() - 0.5).slice(0, 2);
    this.opcoes = [...opcoesAleatorias, this.animalNome].sort(() => Math.random() - 0.5);
  }

  voltarDashboard() {
    this.navCtrl.navigateBack('/dashboard');
  }
}
