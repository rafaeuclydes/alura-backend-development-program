// Trabalhando com datas
const data = new Date();

console.log(data);

// Estraindo informações da data
console.log('Ano:' + data.getFullYear());
console.log('Mês: ' + data.getMonth());
console.log('Dia: ' + data.getDate());

console.log('Hora: ' + data.getHours());
console.log('Hora: ' + data.getMinutes());

// Criando datas específicas
const nascimento = new Date (1989, 11, 1);
console.log(nascimento);


// Trabalhando com o formato ISO 8601
const nascim = new Date ('1989-11-01T12:00:00.000Z')
console.log(nascim);

// Formatando datas para diferentes localidades
const nascimento2 = new Date ('1989-11-01T12:00:00.000Z');
console.log('Data em formato Brasil: ', nascimento2.toLocaleDateString('pt-BR'));
console.log('Data em formato EUA: ', nascimento2.toLocaleString('en-US'));
