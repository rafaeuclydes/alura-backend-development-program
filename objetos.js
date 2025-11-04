// Objetos
let pessoa = {
	nome: 'Grampola',
	idade: 9,
	cnd: false
};

pessoa.idade = 30;
pessoa.sobrenome = 'Euclydes da Justa';

console.log(pessoa)
console.log(`Nome: ${pessoa.nome}`);
console.log(`Sobrenome: ${pessoa.sobrenome}`);

const livro = {
	titulo: 'Jantar secreto',
	autor: 'Raphael Montes',
	paginas: 368
};

livro.publicado = true;
livro.idiomas = ['Português', 'Inglês', 'Francês'];

console.log(livro);
