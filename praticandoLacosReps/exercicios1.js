// Prática For
// Gerar números aleatórios de 1 a 50 e 
// Interromper o laço caso o número gerado seja 15
// Interromper depois de 30 tentativas e contar a quantidade de tentativas

for (let contador = 1; contador <= 30; contador++) {   
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (numero === 15) {
        console.log(`${numero} em ${contador} tentativas`);
        break;
    }
}

// Criando laço com o continue
// Gerar um número aleatório de 1 a 50
// Criar um contador que só é incrementado caso os números NÃO sejam divisívies por 5
// No final, exibir o valor do contador

let contador = 0;
for (let i = 1; i <= 30; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (numero % 5 === 0){
        continue
    }
    contador++
}

console.log(contador)

// WHILE

// Gerar um laço que tente 'adivinhar' um dado número de 0 a 50
// e conte a quantidade de tentativas até o resultado
const numeroSecreto = 3;
let numeroAleatorio = 0;
let tentativas = 0;

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tentativas++;
}

console.log(`Acertou o número secreto em ${tentativas} tentativas`)

// Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// executar o laço enquanto não gerar um número par
let numeroRandom = 0;

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) +1);
    console.log(numeroRandom)
    }
while (numeroRandom % 2 !== 0);

console.log("------------------------")
console.log(numeroRandom)

// Usando strings
// criar um laço que recebe um texto e verifica se é um palíndromo
// imprimir no console o texto, informando se é ou não palíndromo
//const palavra = "hanna";
const palavra = "luz azul";

// console.log(palavra.length);
// console.log(palavra[2])

let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
    
    //ignorar espaço
    if (palavra === " ") {
        continue
    }
    
    //letras maiúsculas
    //let nomeTrat = palavraInvertida.toLowerCase();
}

console.log(palavraInvertida);

const result = palavraInvertida === palavra 
    ? `Palavra ${palavraInvertida} é um palíndromo`
    : `Palavra ${palavraInvertida} não é um palíndromo`
    
console.log(result);

