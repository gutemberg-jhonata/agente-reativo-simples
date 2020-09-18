const { ambiente } = require('./ambiente');

/**
 * Loop do agente
 */
while (1) {
  const movimentosPossiveis = [];
  const { salas, posX, posY } = ambiente;

  ambiente.imprimir();

  /**
   * Percepções
   */
  if (posX + 1 <= salas.length - 1 && salas[posY][posX + 1] === 'S') {
    movimentosPossiveis.push('Direita');
  }
  if (posX - 1 >= 0 && salas[posY][posX - 1] === 'S') {
    movimentosPossiveis.push('Esquerda');
  }
  if (posY + 1 <= salas.length - 1 && salas[posY + 1][posX] === 'S') {
    movimentosPossiveis.push('Baixo');
  } 
  if (posY - 1 >= 0 && salas[posY - 1][posX] === 'S') {
    movimentosPossiveis.push('Cima');
  }

  /**
   * Condição de parada
   */
  if (movimentosPossiveis.length <= 0) {
    break;
  }

  /**
   * Ação: escolhe aleatoriamente um quadrante para limpar
   */
  const numeroAcao = Math.floor(Math.random() * movimentosPossiveis.length);
  const acao = movimentosPossiveis[numeroAcao];

  ambiente.alterarQuadrante(posY, posX, 'L');

  if (acao === 'Cima') {
    ambiente.posY--;
    ambiente.alterarQuadrante(ambiente.posY, posX, 'A');
  }

  if (acao === 'Baixo') {
    ambiente.posY++;
    ambiente.alterarQuadrante(ambiente.posY, posX, 'A');
  }

  if (acao === 'Direita') {
    ambiente.posX++;
    ambiente.alterarQuadrante(posY, ambiente.posX, 'A');
  }

  if (acao === 'Esquerda') {
    ambiente.posX--;
    ambiente.alterarQuadrante(posY, ambiente.posX, 'A');
  }

}
