// Desafio quiz
const readline = require ('readline');

const rl = readline.createInterface ({
	input: process.stdin,
	output: process.stdout
})

console.log ('Bem vindos ao Quiz do Javascript');
console.log ('Responda com a letra correta:, a, b ou c\n');

let acertos = 0;

rl.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n>', (resposta1) => {
	if (resposta1 == 'b') {
		acertos++;
	}



rl.question('2) Qual dessas é suma esturura de repetição?\n(a) function\n(b) repeat\n(c) for\n>', (resposta2) => {
	if (resposta2 == 'c') {
		acertos++;
	}


rl.question('3) Qual valor é considerado falsy em Javascript?\n(a) 1\n(b) 0\n(c) "texto"\n>',(resposta3) => {
	if (resposta3 == 'b') {
		acertos++;	
	}

	rl.close();

	if (acertos == 3) {
		console.log('Parabéns, você acertou todas as questões!!!');
	} else if (acertos == 2) {
		console.log('Você acertou 2 questões, continue assim');
	} else if (acertos == 1) {
		console.log('Você acertou 1 questão, estude um pouco mais');
	} else {
		console.log('Você errou todas');
	}


		});
	});
});



