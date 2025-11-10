// Usando REST e spread com arrays
const frutas = ['Maçã', 'Banana', 'Goiaba'];

const maisFrutas = ['Manga', 'Melão', 'Uva'];

const clone = [...frutas]

frutas.push('Morango');

console.log(frutas);
console.log(maisFrutas);
console.log(clone);

// Unindo arrays com o operador spread
const todasAsFrutas = [...frutas, ...maisFrutas];
console.log(todasAsFrutas);

// Extraindo elementos de arrays com o rest operator
const [primeira, segunda, ...restante] = todasAsFrutas;

console.log(primeira);
console.log(segunda);
console.log(restante);
