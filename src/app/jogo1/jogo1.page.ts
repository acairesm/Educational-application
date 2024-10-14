import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jogo1',
  templateUrl: './jogo1.page.html',
  styleUrls: ['./jogo1.page.scss'],
})
export class Jogo1Page {
  resultadoMensagem: string = '';
  animalNome: string = '';
  animalImagem: string = '';
  palavraCorreta: string = '';
  letraCorreta: string = '';
  opcoes: string[] = [];

  private animais = [
    { nome: 'Macaco', imagem: 'assets/img/macaco.png', palavra: '_ACACO', letra: 'M' },
    { nome: 'Elefante', imagem: 'assets/img/elefante.png', palavra: 'ELEF_NTE', letra: 'A' },
    { nome: 'Girafa', imagem: 'assets/img/girafa.png', palavra: 'G_RAFA', letra: 'I' },
    { nome: 'Leão', imagem: 'assets/img/leão.png', palavra: 'LEÃ_', letra: 'O' },
    { nome: 'Jacaré', imagem: 'assets/img/jacare.png', palavra: 'JA_ARÉ', letra: 'C' },
    { nome: 'Pássaro', imagem: 'assets/img/pássaro.png', palavra: '_ÁSSARO', letra: 'P' },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.mudarAnimal(); // Muda o animal ao iniciar a página
  }

  verificarResposta(letraEscolhida: string) {
    if (letraEscolhida === this.letraCorreta) {
      // Substitui a letra correta na palavra correta
      const palavraCompleta = this.palavraCorreta.replace(this.letraCorreta, letraEscolhida);
      this.resultadoMensagem = `Correto! `; // Exibe a palavra completa
    } else {
      this.resultadoMensagem = 'Incorreto! Tente novamente.';
    }
  }

  mudarAnimal() {
    // Limpa a mensagem de resultado ao mudar de animal
    this.resultadoMensagem = '';

    // Seleciona um animal aleatório da lista
    const animalAtual = this.animais[Math.floor(Math.random() * this.animais.length)];
    
    // Atualiza os detalhes do animal
    this.animalNome = animalAtual.nome;
    this.animalImagem = animalAtual.imagem;
    this.palavraCorreta = animalAtual.palavra;
    this.letraCorreta = animalAtual.letra;

    // Gera opções de letras incluindo a letra correta
    const letrasAdicionais = this.animais
      .map(animal => animal.letra) // Obtém letras dos animais
      .filter(letra => letra !== this.letraCorreta) // Remove a letra correta
      .sort(() => Math.random() - 0.5) // Embaralha as letras
      .slice(0, 3); // Pega 3 letras adicionais

    // Adiciona a letra correta e embaralha todas as opções
    this.opcoes = [...letrasAdicionais, this.letraCorreta]
      .sort(() => Math.random() - 0.5); // Embaralha as opções
  }

  voltarDashboard() {
    this.navCtrl.navigateBack('/dashboard');
  }
}
