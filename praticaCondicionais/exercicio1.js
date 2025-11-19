// IF/ELSE

// definir um fluxo para somar ou multiplicar dois números usando if/else
const num1 = 5;
const num2 = 35;
const operacao = 'multiplicação';

if (operacao === 'soma'){
	console.log(num1 + num2)
} else if (operacao === 'multiplicação'){
	console.log(num1 * num2)
} else {
	console.log('Operação inválida')
};


// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4008: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salario = 5000;

if (salario >= 1000) {
	console.log ('Bônus de 3%')
} else if (salario < 11000 && salario >= 7000) {
	console.log ('Bônus de 5%')
} else if (salario < 7000 && salario > 4000) {
	console.log ('Bônus de 7%')
} else {
	console.log ('Bônus de 9%')
}


// verificar se um ano é bissexto
// um ano é bissexto quando:
// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400
const ano = 2010;

if (ano % 4 === 0 && ano % 100 !== 0) {
	console.log(`${ano} é bissexto`)
} else {
	console.log(`${ano} não é bissexto`)
}


// Operador condicional (operador ternário)
const nome = '';
const saudacao = nome ? `Ola, ${nome}` : 'Olá pessoa!';

console.log(saudacao);


// Com if else
const nome2 = 'Hanna';
let saudar;

if (nome2) {
    console.log(`Olá ${nome2}`)
} else {
    console.log('Olá pessoa')
}


// Switch case
const avaliacao = 1;

switch (avaliacao) {
    case 5:
        console.log('Ótimo');
        break;
    case 4:
        console.log('Bom');
        break;
    case 3:
        console.log('Neutro');
        break;
    default:
        console.log('Melhorem');
        break;
}   


// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 
estudante = 'Grampola';
nota = 9;
faltas = 1;

const recebeBonus = (nota >= 8) && (faltas <= 2) 
? `${estudante} recebe bônus` 
: `${estudante} não recebe bônus`;

console.log(recebeBonus);


// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais.
const user = 'super premium';

switch (user) {
    case 'free':
        console.log('Acesso limitado');
        break;
    case 'premium':
        console.log('Acesso ilimitado');
        break;
    case 'super premium':
        console.log('Acesso ilimitado com bônus');
        break;
    default:
        console.log('Plano não encontrado');
        break;
}



