// Método filter - cria um novo array com dados filtrados com base em uma condição específica
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numeros) => {
	return numeros % 2 === 0;
})

console.log(`Array original: ${numeros}`);

console.log(`Números pares: ${numerosPares}`);

const numerosImpares = numeros.filter((numeros) => numeros % 2 !== 0);

console.log(`Números ímpares: ${numerosImpares}`);

// Método map - transforma os dados em uma lista nova de acordo com as regras que estabelecemos
const numerosDobrados = numeros.map((numeros) => numeros * 2)
console.log(`Números dobrados: ${numerosDobrados}`);

const numerosExponenciais = numeros.map((numeros) => numeros ** 3);
console.log(`Números elevados ao cubo: ${numerosExponenciais}`);
