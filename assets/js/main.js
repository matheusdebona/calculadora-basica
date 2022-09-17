const visor = document.querySelector('.display');
const botoes = document.querySelector('.btn');

function inserir(num) {
  const numero = visor.value;
  visor.value = numero + num;
}

function limpar() {
  visor.value = '';
}

function calcular() {
  if (visor.value) {
    const resultado = eval(visor.value);
    if (Number.isInteger(resultado)) {
      visor.value = resultado;
    } else {
      visor.value = resultado.toFixed(2);
    }
  }
}

function deletar() {
  const numero = visor.value;
  visor.value = numero.slice(0, -1);
}

function quadrado() {
  if (visor.value) {
    const numero = visor.value;
    const resultado = numero * numero;
    if (Number.isInteger(resultado)) {
      visor.value = resultado;
    } else {
      visor.value = resultado.toFixed(2);
    }
  }
}
