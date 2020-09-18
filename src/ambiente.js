class Ambiente {

  constructor() {
    this.salas = [];

    /**
     * Gerar posição X e Y aleatoriamente entre os valores 0 e 1
     */
    this.posX = Math.floor(Math.random() * 2);
    this.posY = Math.floor(Math.random() * 2);

    this.gerar();
  }

  gerar() {
    /**
     * Popula a matriz ambiente com quadrantes inicialmente Sujos
     */
    for (let i = 0; i < 2; i++) {
      this.salas[i] = ['S', 'S'];
    }

    /**
     * Utiliza as variáveis posX e posY para definir o quadrante 
     * inicial do agente
     */
    this.salas[this.posY][this.posX] = 'A';
  }

  imprimir() {
    this.salas.map(ambiente => {
      console.log('| ' + ambiente[0] + ' | ' + ambiente[1] + ' |');
    });
    console.log();
  }

  alterarQuadrante(posY, posX, estado) {
    if (posY < this.salas.length && posX < this.salas.length) {
      this.salas[posY][posX] = estado;
    }
  }
}

module.exports = {
  ambiente: new Ambiente(),
}