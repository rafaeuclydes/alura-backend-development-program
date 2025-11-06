// Spread operator

let hanna1 = {
	nome: 'Hanna',
	idade: 35,
	profissao: 'Estagiária de análise de mercado'
}

// O spread clona objetos
let hanna2 = { ...hanna1 };

hanna2.profissao = 'Analista de mercado';

hanna1 = {
	...hanna2,
	possuiCNH: false,
	idade: 36,
	pets: 'Grampola'
};


console.log(hanna1);
console.log(hanna2);





// Se atribuir diretamente um  valor ao outro como hanna1 = hanna2, sempre que eu substitruir um valor de uma dos objetos vai mudar do outro tbm.



// Separando propriedades com o REST Operator
const { nome, ...restante } = hanna1;

console.log(nome);
console.log(restante);
