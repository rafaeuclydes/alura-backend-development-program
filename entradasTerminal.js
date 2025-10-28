//readline pacote do node mas que precisa fazer required
const readLine = require ('readline');

const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

reader.question ("Qual seu nome? ", (nome) => {
	console.log(`Olá, ${nome}`);
	console.log("Boas vindas ao nosso sistema");

	reader.question ("Qual sua idade? ", (idade) => {
		if(idade >= 18) {
			console.log("Você é de maior, pode tirar CNH");
		} else {
			console.log("Você não tem 18 anos ainda, não pode tirar CNH");
		};

		reader.close();
	});
});
