// 1. Boas-vindas personalizadas
// Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"
let nome = "Rafael Euclyde dos Santos";

console.log(`Olá, ${nome}! Seja bem vindo ao curso de JavaScript`);

// 2. Cálculo de idade
// Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."
const anoNascimento = 1989;
const anoAtual = 2025;

let idade = anoAtual - anoNascimento;

console.log(`A idade do Rafa é ${idade}`);

// 3. Mensagem de localização
// Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País."
let cidade = "Curitiba";
let estado = "Paraná";
let pais = "Brasil";

console.log(`Você esta em ${cidade} - ${estado}, ${pais}`);

// 4. Tipo da variável:
// Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.
let temCarteira = true;

console.log(typeof temCarteira);

// 5. Simulação bancária simples:
// Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.
let saldo = 0;
let deposito = 200;
let saque = 50;
let movimentacao = saldo + deposito - saque;

console.log(`Meu saldo atual é ${movimentacao}`);

// 6. Média de notas:
// Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.
let matematica = 80;
let portugues = 20;
let ciencias = 50;
let media = (matematica + portugues + ciencias) / 3;

console.log(`A média das diciplinas é ${media.toFixed(2)}`);

// 7. Reajuste de salário:
// Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.
let salario = 3000;
let aumento = salario + salario * 0.1;
console.log(aumento);

// 8. Contador de cliques:
// Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.

// 9. Constantes não podem ser alteradas
// Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.

// 10. Concatenando tipos diferentes
// Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.
