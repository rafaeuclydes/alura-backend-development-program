// 1. Verificação de maioridade
// Crie uma variável idade e verifique se a pessoa é maior de idade (18 anos ou mais). Mostre no console uma mensagem adequada.
const idade = 35;

idade == 18;

console.log(`A idade do Rafa é ${idade}, ele é maior de idade!`);

// 2. Situação do aluno
// Crie duas variáveis com notas de um aluno. Calcule a média. Se for maior ou igual a 7, mostre "Aprovado". Caso contrário, mostre "Reprovado".
const nota1 = 7;
const nota2 = 6;
const media = (nota1 + nota2) / 2;
if (media >= 7) {
  console.log(`A média do aluno é ${media.toFixed(2)}. Aprovado!`);
} else {
  console.log(`Reprovado, nota ${media}`);
}

// 3. Simulação de troco
// Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.
let valorCompra = 35.9;
let valorPago = 50;
let troco = valorPago - valorCompra;

console.log(`Valor a ser devolvido: ${troco.toFixed(2)}`);

// 4. Validação de senha
// Crie duas variáveis com senhas digitadas em momentos diferentes. Verifique se são iguais usando operadores de comparação.
const senha1 = "senhaum";
const senha2 = "senhadois";

const comparacao = senha1 == senha2;

console.log(`As senha são: ${comparacao}`);

// 5. Controle de faltas
// Considere totalAulas = 80 e faltas = 25. Calcule se as faltas ultrapassam 25% das aulas. Mostre a conclusão no console.
const totalAulas = 80;
const faltas = 25;

let limiteFaltas = totalAulas * 0.25;

if (faltas > limiteFaltas) {
  console.log(`Reprovado. Faltas: ${limiteFaltas}`);
} else {
  console.log(`Aprovado!`);
}

// 6. Verificação de login
// Crie duas variáveis temLogin e temSenha. Use operadores lógicos para verificar se o usuário pode acessar o sistema.
let temLogin = true;
let temSenha = true;

if (temLogin && temSenha) {
  console.log("Acesso permitido");
}

// 7. Valor negado
// Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.
let disponivel = false;

console.log(!disponivel);
console.log(disponivel);

// 8. Condições compostas
// Crie duas variáveis com números. Verifique se os dois são pares e se são iguais. Exiba a conclusão.
let num1 = 6;
let num2 = 6;

if (num1 % 2 === 0 && num2 % 2 === 0 && num1 == num2) {
  console.log(`Os números são pares e iguais`);
} else {
  console.log(`Os números fornecidos não obedecem a alguma condição`);
}

// 9. Calculadora de porcentagem
// Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."
let porcentagem = 120 * 0.15;
console.log(`15% de 120 é igual a ${porcentagem}`);

// 10. Ordem de operações
// Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.
let conta = 2 + 3 * 5;

console.log(
  `O valor da conta é ${conta}. Foi calculado primeiro a multiplicação pq o JS segue regras matemáticas`
);
