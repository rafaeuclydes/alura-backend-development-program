// Assincronia
console.log("Inicio");

setTimeout(()=>{
	console.log("Tarefa assímcrona finalizada");
},10000);

console.log("Final");

// Promise
function fecthData (){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("Dados obtido");
},100);

fetchData()
	.then(data => console.log(data))
	.catch(error => console.log(error));
})
}

// Usando o Async/Await
async function getData (){
	try {
		const data = await fetchData();
		console.log (data);
	} catch (error){
	console.error(error)
	}

}
getData();

// Cópia do site
// Usando Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dados obtidos');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Usando Async/Await
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
