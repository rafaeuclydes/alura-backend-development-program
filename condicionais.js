// if, else e else if
const idade = 18;

if (idade >= 18) {
	console.log(`Você tem ${idade} anos, é maior de idade`);
} else {
	console.log(`Você tem ${idade} anos, é menor de idade`);
}

// else if
const notaAluno = 4;

if (notaAluno >= 9) {
	console.log(`Nota excelente!`);
} else if (notaAluno >= 7) {
	console.log(`Nota boa!`);
} else if (notaAluno >= 5){
	console.log("Precisa melhorar!");
} else {
	console.log("Apenas melhore!");
}

// Operadores ternários
const idade2 = 16;

idade2 >= 18 ? console.log ("Maior de idade!") : console.log ("Menor de idade");

// Quando tem muitas condições não é indicado usar ternário pq pode ficar confuso. EX:
const notaDoAluno = 10;

notaDoAluno >= 9 ? console.log("Excelente") : notaDoAluno >= 7 ? console.log("Boa") :
 notaDoAluno >= 5 ? console.log("Melhorar") : console.log("Melhore");
