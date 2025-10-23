//4. Conversão de nota em conceito
//Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-9), 
//C (6-7.9), D (4-5.9), E (0-3.9).
const notas = 3;

if (notas >= 9 && notas <= 10){
	console.log("A(9-10)");
} else if (notas >= 8 && notas <= 9){
	console.log("B(8-9)");
} else if (notas >= 6 && notas <= 7.9) {
	console.log("C(6-7.9)")
} else if (notas >= 4 && notas <= 5.9) {
	console.log("D(4-5.9)")
} else {
	console.log("E(0-3.9)")
}


//5. Número par ou ímpar com ternário
//Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.
const  num = 30;

num % 2 == 0 ? console.log("O número é par") : console.log("O número é ímpar");

//6. Menu com switch-case
//Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar",
//2 - "Listar", 3 - "Sair".
const valores = 3;

switch (valores){
	case 1:
		console.log("1 - Cadastrar");
		break;
	case 2:
		console.log("2 - Listar");
		break;
	case 3: 
		console.log("3 - Sair");
		break;
	default:
		console.log("Digite um valor válido");
		break;
}

//7. Validação de campo obrigatório
//Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail".
//Caso contrário, mostre "E-mail válido".
const email = "teste";

if (email === "") {
	console.log("Preencha o campo de e-mail");
} else {
	console.log("E-mail inválido");
} 

//8. Validação de senha segura
//Crie uma variável senha. Se tiver menos de 6 caracteres, mostre "Senha muito curta". 
//Se tiver 6 ou mais, mostre "Senha válida".
let senha = "1"

if (senha.length < 6) {
	console.log("Senha muito curta");
} else {
	console.log("Senha válida")
}

//9. Compra com saldo
//Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra 
//aprovada". Caso contrário, "Saldo insuficiente".
const saldoDisponivel = true
const valorCompra = true

if (saldoDisponivel == valorCompra) {
	console.log("Compra aprovada")
} else {
	console.log("Saldo insuficiente")
}

//10. Validação de formulário completo
//Crie três variáveis: nome, email e idade. Mostre "Formulário enviado com sucesso" apenas se todos os
//campos estiverem preenchidos e a idade for maior que 0.
let nome = "";
let email2 = "grampola@gmail.com";
let idade = 18;

if (nome != "" && email2.includes("@") && idade > 0) {
	console.log("Formulário enviado com sucesso");
} else {
	console.log("Faltam dados")
}
