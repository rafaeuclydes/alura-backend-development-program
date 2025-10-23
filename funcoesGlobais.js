// No JavaScript existem funções globais printas como o setTimeout, setInterval e clearInterval.

// setTimeout
function saudacao () {
	console.log("Olá, como vai?");
}

setTimeout (saudacao, 500);

// setInterval e clearInterval
let contador = 11;

let id = setInterval (() => {
	contador--
	console.log(`Tempo percorrido (seg):' ${contador}`) 
	if(contador <= 0){
		clearInterval(id);
	}
}, 1000);
