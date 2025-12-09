const nome = ""; // Essa const vazia tem o valor de false

if (nome) {
  console.log(`Olá, ${nome}.`);
} else {
  console.log("Ainda não sei seu nome.");
}

// Null tbm é considerado valor falso
const idade = null;

if (idade != null && idade >= 18) {
  console.log("Maior de idade");
} else if (idade != null && idade >= 0 && idade < 18) {
  console.log("Menor de idade");
} else {
  console.log("Digite um valor válido");
}

// Dá p/ simplificar o cód acima fazendo uma validação geral com relação ao null e o resto mantem.
const idade2 = 12;

if (idade2 != null) {
  if (idade2 >= 18) {
    console.log("Maior de idade");
  } else if (idade2 < 18) {
    console.log("Menor de idade");
  }
} else {
  console.log("Digite um valor válido");
}

// Valores falsy:
// false;
// 0;
// "";
// null;
// undefined;
// NaN

// Todos os outros são truthy
// Atenão ao zero, pq ele é falsy e precisa colocar dentro de uma condição específica para ele ser considerado truthy. EX:
const quantidade = 0;
if (quantidade !== undefined && quantidade !== null) {
  console.log("Quantidade informada corretamente!"); // Resultado: Quantidade informada corretamente!
} else {
  console.log("Quantidade inválida!");
}
