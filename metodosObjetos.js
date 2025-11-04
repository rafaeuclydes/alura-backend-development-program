// Método for in
let pessoa = {
	nome: 'Rafael',
	idade: 36,
	pets: ['Grampola'],
	nacionalidade: 'Brasileira'
}

for (const key in pessoa) {
	console.log('Chave: ', key)
	console.log('Valor: ', pessoa[key])
};

// Utilizando os métodos Object.keys, Object.values e Object.entries
const chaves = Object.keys(pessoa);

const valor = Object.values(pessoa);

const entradas = Object.entries(pessoa);

console.log(`Chaves: ${chaves}`);
console.log(`Valores: ${valor}`);
console.log(`Entradas (chave/valor):`, entradas);
