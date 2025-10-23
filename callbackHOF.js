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

function multiplicacao (num1, num2) {
	return num1 * num2;
}

function subtracao (num1, num2) {
	return num1 - num2;
}

function exponencial (num1, num2) {
	return num1 ** num2;
}

const resultadoSoma = calcular(9, 4, soma); // função soma é um callback
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadoDivisao = calcular(8, 2, divisao); // função divisão é um callback
console.log(`Resultado da divisão: ${resultadoDivisao}`);

const resultMultip = calcular(90, 3, multiplicacao);
console.log(`Resultado multiplicação: ${resultMultip}`);

const resultSub = calcular(10, 12, subtracao);
console.log(`Resultado subtração: ${resultSub}`);

const resultExp = calcular(3, 3, exponencial);
console.log(`Resultado exponencial: ${resultExp}`); 

// Callback é uma função passada como parâmetro para outra função, para ser executada 
// em um momento específico dentro dessa função.
