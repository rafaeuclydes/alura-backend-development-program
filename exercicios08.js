// Funções
// 1. Função de saudação
// Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.
function saudacao() {
    console.log('Olá! Seja bem-vindo(a)')
}

saudacao();

// 2. Função com parâmetros
// Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."
function apresentarPessoa(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`)
}

apresentarPessoa('Rafael', 36);

// 3. Cálculo de IMC
// Crie uma função que receba peso e altura e retorne o valor do IMC. Mostre também uma frase com o resultado.
function imc (peso, altura) {
    let imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`)
}

imc(74, 1.72);

// 4. Verificar aprovação
// Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.
function verificarAprovacao(nota) {
    if (nota >= 7) {
        console.log ('Aprovado')
    } else {
        console.log ('Reprovado')
    }
}

verificarAprovacao(9);

// 5. Número par ou ímpar
// Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.
function ehPar(numero) {
    if(numero % 2 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

ehPar(13);

// 6. Função soma
// Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.
function soma (num1, num2) {
    let somatoria = num1 + num2;
    console.log(`A soma de ${num1} e ${num2} é: ${somatoria}`)
}

soma(5,5);

// 7. Reutilizando código
// Reescreva o exercício da calculadora de troco usando uma função calcularTroco(compra, pagamento).
function calcularTroco (compra, pagamento) {
    let troco = pagamento - compra;
    console.log(`O troco é: ${troco}`);
}

calcularTroco (8, 10);


// 8. Arrow function
// Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.
let somar = (a, b) => a + b;

console.log('A soma é: ' + somar (3,3));

// 9. Callback simples
// Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".
function executarAcao (acao) {
    acao(); 
}

executarAcao(function() {
    console.log('Executando ação')
})

// 10. Desafio do quiz
// Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).
function fazerPergunta(pergunta, respostaCorreta) {
    let respostaUsuario = respostaCorreta;
    
    if (respostaUsuario === respostaCorreta) {
        console.log('Resposta correta!');
    } else {
        console.log('Resposta errada!');
    }
}

fazerPergunta("Qual é a capital do Brasil?", "Brasília");
