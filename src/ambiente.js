class Ambiente {
  constructor() {
    this.ambiente = [];

    this.gerarAmbiente();
  }

  gerarAmbiente() {
    /**
     * Popula a matriz ambiente com quadrantes inicialmente Sujos
     */
    for(let i = 0; i < 2; i++) {
      this.ambiente[i] = ['S', 'S'];
    }
    
    /**
     * Gerar posição X e Y aleatoriamente entre os valores 0 e 1
     */
    const posX = Math.floor(Math.random() * 2);
    const posY = Math.floor(Math.random() * 2);

    /**
     * Utiliza as variáveis posX e posY para definir o quadrante 
     * inicial do agente
     */
    this.ambiente[posY][posX] = '*A*';
  }
}

module.export = new Ambiente();