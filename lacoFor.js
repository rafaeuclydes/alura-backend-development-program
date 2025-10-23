// Laço for para números
for(contador = 0; contador <= 10; contador++) {
	console.log(`Os números do laço for são: ${contador}`)
}

// Laço for com condicional
// Número par?
let num = 20
for(numero=0; numero <= num; numero++){
	if(numero % 2 == 0){
		console.log(numero)}
}

// Número ímpar
let nume = 50
for(indice=0; indice <= nume; indice++){
	if(indice % 2 != 0) {
		console.log(`Números ímpares: ${indice}`)
	}
}


// Laço for para strings
const animal = "Grampola";

for(i = 0; i < animal.length; i++) {
	console.log(animal[i]);
}
