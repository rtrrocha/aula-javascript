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
//const Arr = feira.slice(-3); //passa os valores a partir da última posição
//console.log(Arr);

//feira.splice(2); //remove os itens da origem a partir do índice
//feira.splice(0, 0, "first"); //adiciona ou substitui a partir dos parametros passados

/*
let valor1 = 0;
const valor = Array(-1, -2, -3, 0, 1, 2, 3);
let cont;
console.log(valor);
for (cont=0; cont<7; cont++)
{
  //valor[cont] = prompt();// parseFloat(gets());
  console.log(valor[cont]);

  if (valor[cont] >= 0)
  {
    valor1 = valor1 + 1;
    console.log(valor1);
  }
}
valorpositivo = String(valor1);
console.log(valor1);
console.log("valores positivos são: "+ valorpositivo);
*/

// forEach no array (iteração de cada item dentro de um array)
/*
const valor = Array(-1, -2, -3, 0, 1, 2, 3);
valor.forEach((value, index) => console.log(index, value));
valor.forEach((value, index, arr) => console.log(index, value, arr));
*/
// Map no array (Retorna um novo array, de mesmo tamanho, 
// iterando cada item de um array)

console.log(feira.map((feira, index) =>  index +' - '+ feira));

//Flat (Retorna um novo array com todos os elementos de um
// sub-array concatenados de forma recursiva de acordo com a 
// profundidade especificada(depth))
const idades = [18, 23, 27,[19,22,26],[21,28,31]]; //3 arrays em um
console.log(idades);

console.log(idades.flat(2)); //passando um depth de parâmetro

//flatMap (Retorna um novo array assim como a função map e executa
//um flat de profundidade 1)
//const idades = [1, 2, 3, 4];
console.log(idades.flatMap(value => [value * 2]));
//console.log(narr.flatMap(value => [[value * 2]]));

//keys (Retorna uma Array Iterator que contém as chaves 
//para cada elemento do array)
/*
const narrIterator = narr.keys();
console.log(narrIterator.next());
console.log(narrIterator.next());
console.log(narrIterator.next());
console.log(narrIterator.next());
console.log(narrIterator.next());
*/
//values (Retorna um Array Iterator que contém os
// valores para cada elemento do array)
/*
const narrIterator = idades.values();
console.log(narrIterator.next());
console.log(narrIterator.next());
console.log(narrIterator.next());
console.log(narrIterator.next());
console.log(narrIterator.next());
*/
//entries (Retorna um Array Iterator que contém os 
//pares chave/valor de cada elemento do array)
const narrIterator = feira.entries();
console.log(narrIterator.next());
console.log(narrIterator.next());
console.log(narrIterator.next());
console.log(narrIterator.next());
console.log(narrIterator.next());
