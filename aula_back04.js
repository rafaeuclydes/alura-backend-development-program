// 8. Contador de cliques:
// Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.
let cliques = 0;

cliques++;
cliques++;
cliques++;

console.log (`Total de clique ${cliques}`);


// 9. Constantes não podem ser alteradas
// Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o 
// erro gerado. Depois, explique por que isso acontece.
const PI = 3.14

//PI = 6

console.log("Explicação: a variavel PI é uma const 'constante' e contantes não podem ser alteradas");

//Erro: "TypeError: Assignment to constant variable..."

// 10. Concatenando tipos diferentes
// Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte
// as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.
const frase = "Hoje é segunda-feira, dia:";
const num = 13;
const dataDia = frase + num;

console.log (dataDia);
console.log (typeof dataDia);
// Resposta: String

// Teste
let contador = 5;
console.log(++contador); // imprime 6, pois a variável é incrementada antes da impressão

let contador2 = 5;
console.log(contador2++); // imprime 5 e só depois incrementa; ao final, contador passa a valer 6

// DESAFIO CALCULADORA DE TROCA
console.log ("Bem vindos a calculadora de troco");
let valorPago = 18;
let valorRecebido = 20;

let troco = valorRecebido - valorPago;
console.log(`O troco é de: ${troco}`);
