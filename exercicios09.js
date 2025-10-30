// 1. Lista de nomes
// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.
const nomes = ["Hanna", "Grampola", "Pumba", "Amora", "Paçoca"];

for (i = 0; i < nomes.length; i++){
	console.log(nomes[i]);
};

// 2. Adicionar e remover itens
// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.
const frutas = ["Maça", "Banana", "Amora", "Pera", "Abacaxi"];
console.log(frutas);
frutas.push("Caqui");
console.log(`Com fruta adicionada: ${frutas}`);
frutas.shift();
console.log(`Usando o shift para remover a primeira fruta: ${frutas}`);

// 3. Contar itens do array
// Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.
const cidades = ["Curitiba", "Fortaleza", "Belem", "São Paulo", "Cuiaba"];

console.log(cidades.length);


// 4. Somar todos os números
// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = 0;

for (i = 0; i < num.length; i++){
	soma += num[i];  
}

console.log(`Soma doa números: ${soma}`);

// 5. Média de notas
// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.
const notas = [4, 9, 8, 3];

let somatoria = 0;
for (i = 0; i < notas.length; i++) {
	let media = somatoria += notas[i]/notas.length;
};

if (somatoria[i] >= 7) {
	console.log('Média do aluno foi igual ou acima de 7: Aprovado');
} else {
	console.log(`Média do aluno foi abaixo de 7: Reprovado`);
};


// 6. Mensagens personalizadas com forEach
// Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.
const usuarios = [ "Grampola", "Amora", "Pumba", "Paçoca"];

usuarios.forEach((value, index) => {
	console.log(`Olá, ${value}! Seja bem vindo!`);
})

// 7. Descontos com map
// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.
const precos = [10, 50, 65, 88, 90];

const desconto = precos.map((precos) => precos * 0.90);

console.log(`Preços com 10% de desconto: ${desconto}`);

// 8. Filtrar valores altos
// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.
const idades = [5, 60, 18, 16, 14, 36, 25, 10, 21, 30];

const maiorIdade = idades.filter ((idades) => idades >= 18) 
	console.log(`Idades maiores de 18 = ${maiorIdade}`);

// 9. Simulando carrinho de compras
// Crie um array de preços e calcule o valor total da compra. Depois, aplique um cupom de 20% de desconto e mostre o valor final.
const compras = [100, 50, 56, 13.9, 2];

let total = 0;
for (i = 0; i < compras.length; i++){
	total += compras[i];
}
const desc = total * 0.80;
console.log(`Valor total da compra: ${total}`);
console.log(`Valor com 20% de desconto: ${desc}`);

// 10. Lista de tarefas
// Crie um array com 5 tarefas (strings). Use filter para mostrar apenas as tarefas que ainda não foram marcadas como concluídas (use uma convenção como "[x]" para concluídas).
const tarefas = ["[x] Comprar desodorante\n", "[] Ir ao mercado\n", "[x] Dar comiga p/ Grampola"];

const naoFinalizadas = tarefas.filter((tarefa) => {
	return tarefa.startsWith("[]");
});

console.log(`Tarefas do dia:\n ${tarefas}`);
console.log(`Tarefas não finalizadas: ${naoFinalizadas}`);
