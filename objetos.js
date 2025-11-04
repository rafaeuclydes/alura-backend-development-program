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

// Manipulando objetos
livro.idiomas.push('Mandarin');
livro.idiomas.push('Espanhol');

console.log(livro);

console.log('Livro antes: ', livro);
delete livro.paginas;
console.log(`Livro depois: `, livro);

// Acessar propriedades de forma alternativa
livro ['autor'];
console.log('Autor do livro:', livro['autor']);

// Quando a propriedade não existe
console.log('Editora: ', livro['editora']);

// Objetos aninhados
const autor = {
	nome: 'Raphael Montes',
	nacionalidade: 'Brasileiro',
	idade: 35
};

console.log('Autor: ', autor);

livro.autor = autor;
console.log(livro);

livro.autor.nome;
livro.autor.nacionalidade;

livros: [livro];

const propriedade = ['autor'];
console.log(livro[propriedade]);
