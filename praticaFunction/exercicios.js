// FUNCTION (declaração de função)

// Elevar um número x a uma potencia y
function calculaPotencia (num, pow) {
    let resultado = 1;
    for(let i = 0; i < pow; i++){
        resultado = resultado * num;
    }
    return resultado;
}

console.log(calculaPotencia(2, 10));


// Fiz antes de assistir a aula
function exponenciar (x, y) {
  return x ** y
}

const resultado = exponenciar (2, 2)
console.log(resultado)

// EXPRESSÃO DE FUNÇÃO
// criar função que calcula o fatorial de um número usando recursão.
// fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 x 4 x 3 x 2 x 1
const fatorial = function f(num) {
    if(num === 0 || num === 1) return 1;
    return num * f(num -1);
}

console.log(fatorial(15));

// Lógica do exercício anterior
// 5 * fatorial(4)
// 4 * fatorial(3)
// 3 * fatorial(2)
// 2 * fatorial(1)


// ARROW FUNCTION
// Criar um função para calcular juros compostos 
// função deve receber os valores no formato inteiro: valor, % de juros e tempo
// fórmula: valor * (juros elevado a tempo)
const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = (juros/100) + 1;
    return valor * Math.pow(taxaJuros, tempo);
}

console.log(calculaJuros(100,5,2));

// FUNÇÃO CALLBACK
// Funções callback são passadas como parâmetro para dentro de uma outra função. Elas são executadas a partir
// da função externa e podem receber valores da função mais externa.
//Função setTimeout
setTimeout(function(){
    console.log("Olá");
},5000);

setTimeout(() => console.log("Bom dia"), 6000);

// Desacoplando funções callback
setTimeout(desacoplado, 7000);

function desacoplado () {
    console.log("Tudo bem?")
}

// CALLBACKS
// Criar uma função que faça operações matemáticas entre 2 valores (soma e multiplicação)
// função deve receber por parâmetro: operação desejada, valor1 e valor2
function soma(a, b) { return a + b};
function multiplica(a, b) {return a * b};

function calcula(fnOperacao, valorA, valorB) {
    return fnOperacao(valorA, valorB);
}

console.log(calcula(soma, 10, 10));
console.log(calcula(multiplica, 10, 10));

// Criar uma função que emita uma mensagem caso usuário 
// x não  esteja interagindo com o sistema após uma quantidade de tempo
const idUser = "56954457";

// FORMA DESACOPLADA
const avisaUsuario = idUser => console.log(`sessão id ${idUser} esta inativa`);
setTimeout(avisaUsuario, 10000, idUser);

// FORMA MAIS 'SIMPLES'
setTimeout((idUser) => console.log(`sessão do user ${idUser} inativa`), 10000, idUser);

