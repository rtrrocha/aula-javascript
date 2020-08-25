const arr0 = Array.of(5, 6, "JKL", "MNO");
console.log(arr0);

const arr = Array(3);
// array vazio
console.log(arr);

const arr2 = Array(3, 4);
// [3,4]
console.log(arr2);

const divs = document.querySelectorAll('button');
console.log(divs);

const arrF = Array.from(divs);

const frutas = Array("Melao","Melancia","Banana");
console.log(frutas);

frutas.push("Laranja","Pera");//insere no final do array
console.log(frutas);

const arrlength = frutas.length; // qtd itens do array
console.log(arrlength);

frutas.pop(); //remove o último item da lista
console.log(frutas);

frutas.unshift("Pera"); // insere o item no inicio da lista
console.log(frutas);

frutas.shift(); //remove no inicio da lista
console.log(frutas);

const salgados = Array("Pastel","Kibe","Coxinha");
console.log(salgados);

const feira = frutas.concat(salgados); //juntando arrays
console.log(feira);

feira.slice(3, 6); //passa os valores de acordo como parametro do índice
feira.slice(3); //passa os valores a partir dessa posição
//const Arr = feira.slice(-1); //passa os valores a partir da última posição
const Arr = feira.slice(-3); //passa os valores a partir da última posição
console.log(Arr);

feira.splice(2); //remove os itens da origem a partir do índice
feira.splice(0, 0, "first"); //adiciona ou substitui a partir dos parametros passados
