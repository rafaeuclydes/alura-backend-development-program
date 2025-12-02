// FUNCTION

// Elevar um número x a uma potencia y
function calculaPotencia (num, pow) {
    let resultado = 1;
    for(let i = 0; i < pow; i++){
        resultado = resultado * num;
    }
    return resultado;
}

console.log(calculaPotencia(2, 10));


// Fiz antes de assistir a aula
function exponenciar (x, y) {
  return x ** y
}

const resultado = exponenciar (2, 2)
console.log(resultado)
