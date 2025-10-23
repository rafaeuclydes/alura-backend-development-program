// HOF -> Higher-Order Function === função que recebe outra função
// como parâmetro.

function calcular (numero1, numero2, operacao) {
	return operacao (numero1, numero2);
}

function soma (num1, num2) {
	return num1 + num2;
}

function divisao (num1, num2) {
	return num1 / num2;
}

const resultadoSoma = calcular(9, 4, soma) // função soma é um callback
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadoDivisao = calcular(8, 2, divisao); // função divisão é um callback
console.log(`Resultado da divisão: ${resultadoDivisao}`);


// Callback é uma função passada como parâmetro para outra função, para ser executada 
// em um momento específico dentro dessa função.
