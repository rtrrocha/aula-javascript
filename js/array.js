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
