// contar quantos números pares e ímpares nós temos entre 0 e 100;
let numerosPares = 0;
let numerosImpares = 0;

// laço repetição
for(let cont = 0; cont <= 100; cont++){
	if(cont % 2 === 0){
		numerosPares++;
	} else {
		numerosImpares++;
	}
}

console.log(`Total de números pares: ${numerosPares}`);
console.log(`Total de números ímpares: ${numerosImpares}`);
