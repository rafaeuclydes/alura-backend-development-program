// Arrays
const frutas = ['Maça', 'Uva', 'Melão', 'Banana', 'Morango', 'Abacaxi'];

console.log(frutas);

// Index
console.log(`A primeira fruta é: ${frutas[0]}`);

console.log(`A última fruta é: ${frutas[frutas.length - 1]}`);

// Adiconar um item ao array
console.log(`Array antes do push: ${frutas}`);
frutas.push('Kiwi');
console.log(`Array depois do push: ${frutas}`);

console.log(`Última fruta do array modificado: ${frutas[frutas.length - 1]}`);

// Excluindo um elemento usando o splice
frutas.splice(1, 2);
console.log(`Array após a exclusão: ${frutas}`);

// Percorrendo arrays com for
for (let i = 0; i < frutas.length; i++) {
	console.log(`Index das frutas: ${i}`);
	console.log(frutas[i]);
}

// Percorrendo arraus com forEach
console.log('Percorrendo arrays com forEach')
frutas.forEach((valor, indice) => {
	console.log(`Indice: ${indice} ${valor}`)
});

//  forEach é um método de Array que, internamente, percorre todos os elemento do array, e a cada elemento, passa o valor atual e o índice para a função de callback definida, valor + índice

// Percorrendo com for...of
console.log('Percorrendo arrays com for...of')
for (const fruta of frutas) {
	console.log(`Fruta do dia: ${fruta}`);
}
