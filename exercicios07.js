//1. Contador de 1 a 10
//Use um for para mostrar no console os números de 1 até 10, um por linha.
for (let cont = 1; cont <= 10; cont++){
	console.log(cont);
} 

//2. Soma de 1 a 100
//Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.
let num = 0;

for (let contador = 0; contador <= 100; contador++){
	num += contador; //pega o número e soma o número do contador
}

console.log(`Soma: ${num}`);

//3. Tabuada personalizada
//Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.
let tabu = 2;
for (let i = 1; i <= 10; i++) {
	console.log(`tabu x ${i} = ${tabu*i}`);
}

//4. Contagem regressiva
//Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".
let contagem = 10;

while(contagem >= 0){
	console.log(contagem)
	contagem--;		
}
console.log('Contagem finalizada');

//5. Receber números até digitar 0
//Use do...while para simular a entrada de números. O programa deve continuar até que o usuário 
//digite 0. Ao final, mostre quantos números foram digitados.
let entNum = 5;

do{
	console.log(entNum);
	entNum--;
} while (entNum >= 0); 

//6. Jogo do número secreto
//Defina uma variável numeroSecreto com o valor 7. O usuário tem 3 tentativas para acertar 
//(simule essas tentativas com variáveis). Mostre mensagens de "Acertou!" ou "Tente novamente".

//7. Idade ao longo dos anos
//Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano 
//até o ano atual.

//8. Listando números pares
//Mostre todos os números pares entre 1 e 50 usando for.

//9. Contar múltiplos de 3 entre 1 e 100
//Mostre no console quantos números entre 1 e 100 são divisíveis por 3.

//10. Menu com repetição
//Crie um menu simples que exibe opções como "1 - Ver saldo", "2 - Fazer depósito", "3 - Sair". 
//Use do...while para repetir o menu até o usuário escolher sair.

