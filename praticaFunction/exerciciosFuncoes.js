// FUNÇÕES

// Gerando mensagens personalizadas
// Imagine que você está criando uma página de boas-vindas para um site de cursos online. Ao acessar a plataforma, o sistema precisa exibir uma mensagem de saudação para cada usuário. Às vezes, porém, o nome da pessoa pode estar ausente — e, nesse caso, uma saudação genérica deve ser exibida.

// Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. Use o parâmetro pré-definido para lidar com isso.
function saudacao(nome) {
    if(nome){
        console.log(`Olá ${nome}, Bem vinda(o)!`);
    } else {
        console.log("Olá, Bem vinda(o)!");
    }
}

saudacao("Rafael");
saudacao();


// Calculando desconto
// Imagine que você está criando um sistema para um e-commerce que vende livros.Toda vez que o cliente aplica um cupom de desconto, o sistema precisa calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto.

// Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:

// o preço original do produto,
// a porcentagem de desconto (com um valor padrão de 10%)
function calcularDesconto(valorProduto, desconto = 10) {
    const valorFinal = valorProduto - (valorProduto * desconto/100);
    return valorFinal;
} 

console.log(calcularDesconto(100, 20));
console.log(calcularDesconto(100));


// Calculando a média de duas notas
// Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.

// Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.
const calcularMedia = (notaA, notaB) => (notaA + notaB) / 2; 

console.log("Média = ", calcularMedia(10, 5));


// Verificando se um número é par ou ímpar
// Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — mas a lógica precisa estar encapsulada em uma arrow function.

// Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:

// "Par" se o número for par
// "Ímpar" se for ímpar

const verificarParidade = (numero) => {
    if (numero % 2 === 0) {console.log(`O número ${numero} é par`)}
    else {console.log(`o número ${numero} é ímpar`)}
}

verificarParidade(6);

// Mais simples
const verificarParidade2 = (numero) => numero % 2 === 0 ? "Par" : "Ímpar";
console.log(verificarParidade2(81));


// Cálculo de frete por distância
// Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

    // Até 5 km: frete fixo de R$ 5
    // De 5.1 km até 20 km: R$ 0,50 por quilômetro
    // Acima de 20 km: frete fixo de R$ 20
// Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow Function? E aí? Como vai implementar esse desafio?
function calculaFrete(distancia) {
    if(distancia <= 5) {
        console.log("Valor do frete: R$ 5,00")
    } else if(distancia <= 20) {
        let calc = distancia * 0.5
        console.log(calc.toFixed(2))
    } else {
        console.log("Valor do frete: R$ 20,00")
    }
}

calculaFrete(15)
