// 1. Verificação de idade para compra de bebida
// Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". Caso contrário, mostre "Venda proibida para menores de 18 anos".
const idade = 15;

if (idade >= 18) {
  console.log("Pode comprar bebida alcoólica");
} else {
  console.log("Venda proibida para menores de 18 anos");
}

// 2. Saudação de acordo com a hora
// Crie uma variável horaAtual. Se estiver entre 6 e 12, mostre "Bom dia"; entre 12 e 18, "Boa tarde"; caso contrário, "Boa noite".
const horaAtual = 22;

if (horaAtual >= 6 && horaAtual <= 12) {
  console.log("Bom dia");
} else if (horaAtual >= 12 && horaAtual <= 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

// 3. Verificação de número positivo ou negativo
// Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.
const numero = 0;

if (numero > 0) {
  console.log(`O número ${numero} é positivo`);
} else if (numero < 0) {
  console.log(`O número ${numero} é negativo`);
} else {
  console.log("O número é zero");
}

// 4. Conversão de nota em conceito
// Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).

// 5. Número par ou ímpar com ternário
// Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.

// 6. Menu com switch-case
// Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".

// 7. Validação de campo obrigatório
// Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". Caso contrário, mostre "E-mail válido".

// 8. Validação de senha segura
// Crie uma variável senha. Se tiver menos de 6 caracteres, mostre "Senha muito curta". Se tiver 6 ou mais, mostre "Senha válida".

// 9. Compra com saldo
// Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".

// 10. Validação de formulário completo
// Crie três variáveis: nome, email e idade. Mostre "Formulário enviado com sucesso" apenas se todos os campos estiverem preenchidos e a idade for maior que 0.
