// Um Set é uma estrutura de dados que guarda valores únicos. Pense nele como uma coleção onde nenhum 
// valor pode se repetir, diferente dos arrays onde você pode ter elementos iguais.
let numeros = new Set();
numeros.add(1);
numeros.add(2);
numeros.add(2);

console.log(numeros);

// Quando usar um Set?
// Para remover duplicatas de um array.
// Para verificar rapidamente se um valor já existe no conjunto.
let arrayComDuplicatas = [1, 2, 2, 5, 6, 6, 8, 1, 1];
let arraySemDuplicatas = [...new Set(arrayComDuplicatas)];

console.log(arrayComDuplicatas);
console.log(arraySemDuplicatas);


// Um Map é uma estrutura que permite armazenar pares de chave e valor, semelhante a um objeto, mas com algumas vantagens importantes:
// Pode usar qualquer tipo de dado como chave (inclusive objetos).
// Mantém a ordem em que os itens foram inseridos.

let mapa = new Map();

mapa.set('nome', 'Grampola');
mapa.set('idade', 9);

console.log(mapa.get('nome'));
console.log(mapa.get('idade'));


// Quando usar um Map?
// Para armazenar informações associadas a uma chave específica.
// Quando precisar manter a ordem de inserção.
// Para usar chaves que não sejam strings.

let chaveFuncao = function() {};
let chaveObjeto = function() {};

let mapaVariado = new Map();
mapaVariado.set(chaveFuncao, 'Valor para função');
mapaVariado.set(chaveObjeto, 'Valor para objeto');

console.log(mapaVariado.get(chaveFuncao));
console.log(mapaVariado.get(chaveObjeto));

// Diferença entre Set, Map e Array
// Array: Guarda valores em ordem e permite duplicatas.
// Set: Guarda valores únicos, sem duplicatas.
// Map: Guarda pares de chave e valor com chaves únicas e ordenadas.
