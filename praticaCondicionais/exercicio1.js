// IF/ELSE

// definir um fluxo para somar ou multiplicar dois números usando if/else
const num1 = 5;
const num2 = 35;
const operacao = 'multiplicação';

if (operacao === 'soma'){
	console.log(num1 + num2)
} else if (operacao === 'multiplicação'){
	console.log(num1 * num2)
} else {
	console.log('Operação inválida')
};


// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4008: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salario = 5000;

if (salario >= 1000) {
	console.log ('Bônus de 3%')
} else if (salario < 11000 && salario >= 7000) {
	console.log ('Bônus de 5%')
} else if (salario < 7000 && salario > 4000) {
	console.log ('Bônus de 7%')
} else {
	console.log ('Bônus de 9%')
}

