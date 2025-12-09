// O uso do switch case
// // entre 9 e 10: excelente
// entre 8 e 7: ótimo
// entre 6 e 5: bom
// entre 4 e 0: péssimo

const notaDoAluno = 10;

switch (notaDoAluno) {
  case 10:
  case 9:
    console.log("Excelente");
    break;
  case 8:
  case 7:
    console.log("Ótimo");
    break;
  case 6:
  case 5:
    console.log("Bom");
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Péssimo");
    break;
  default:
    console.log("Digite um valor válido");
    break;
}
