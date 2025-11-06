// this é uma palavra-chave especial que representa quem está chamando a função.
// Quando usamos funções dentro de objetos (chamadas de métodos), o this aponta para o próprio objeto.
// Isso é muito útil, pois permite que a função acesse outras propriedades do mesmo objeto.

let pessoa = {
	nome: 'Maria',
	idade: 36,
	apresenta: function(){
		console.log('Olá, meu nome é ' + this.nome);
	}
};

pessoa.apresenta();

// No exemplo acima, a função apresentar está dentro do objeto pessoa. Quando chamamos pessoa.apresentar(),
// o this se refere ao próprio objeto pessoa, permitindo acessar this.nome e retornar "Maria".

let outraPessoa = {
	nome: 'João',
	apresenta: pessoa.apresenta
};

outraPessoa.apresenta();


// Não funciona com arrow functions, devolve undefined

// Resumo prático
// Dentro de métodos em objetos, use funções tradicionais para garantir que this funcione corretamente.

// O this aponta para o objeto que chamou o método.

// Evite Arrow Functions quando precisar acessar propriedades do próprio objeto via this.
