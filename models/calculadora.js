function somar(numero1, numero2) {
  if (typeof numero1 !== "number") {
    return "Erro";
  }

  return numero1 + numero2;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

exports.somar = somar;
exports.dividir = dividir;
exports.multiplicar = multiplicar;
