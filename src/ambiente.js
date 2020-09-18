class Ambiente {
  constructor() {
    this.ambiente = [];

    /**
     * Gerar posição X e Y aleatoriamente entre os valores 0 e 1
     */
    this.posX = Math.floor(Math.random() * 2);
    this.posY = Math.floor(Math.random() * 2);

    this.gerarAmbiente();
  }

  gerarAmbiente() {
    /**
     * Popula a matriz ambiente com quadrantes inicialmente Sujos
     */
    for (let i = 0; i < 2; i++) {
      this.ambiente[i] = ['S', 'S'];
    }

    /**
     * Utiliza as variáveis posX e posY para definir o quadrante 
     * inicial do agente
     */
    this.ambiente[this.posY][this.posX] = 'A';
  }

  imprimirAmbiente() {
    this.ambiente.map(ambiente => {
      console.log('| ' + ambiente[0] + ' | ' + ambiente[1] + ' |');
    });
  }

  alterarAmbiente(posY, posX, estado) {
    if (posY < this.ambiente.length && posX < this.ambiente.length) {
      this.ambiente[posY][posX] = estado;
    }
  }

  getPostXInicial() {
    return this.posX;
  }

  getPostYInicial() {
    return this.posY;
  }
}

module.export = new Ambiente();