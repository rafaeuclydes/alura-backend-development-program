// Funcionalidade destructuring

const pessoa = {
	nome: 'Hanna',
	idade: 35,
	profissao: 'Analista'
}

// console.log(pessoa.nome);
// console.log(pessoa.profissao);

const {nome, profissao, idade} = pessoa;

console.log(nome);

// Vantagem do destructuring
function saudacao ({nome, idade}) {
	console.log('Olá,', nome);
	if (idade >=18) {
		console.log('maior de idade')
	}
}

saudacao(pessoa);


// Destructuring em arrays

const frutas = ['Uva', 'Banana', 'Maçã', 'Manga', 'Framboesa'];

console.log(frutas);

const [primeiro, segundo] = frutas;

console.log(segundo);
