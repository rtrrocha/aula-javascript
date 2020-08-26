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
jidades = idades.flat();
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

//find (Retorna o primeiro item de um array 
//que satisfaz a condição)
const maiorque21 = idades.find(value => value > 21);
console.log(maiorque21);

//findIndex (Retorna o índice do primeiro item de 
//um array que satisfaça a condição)
const Imaiorque21 = idades.findIndex(value => value > 21);
console.log(Imaiorque21);

//filter (Retorna um novo array com todos os elementos
//que satisfazem a condição)
console.log(jidades);
const Fmaiorque21 = jidades.filter(value => value > 21);
console.log(Fmaiorque21);

//indexOf (Retorna o primeiro índice em que um elemento
// pode ser encontrado no aray)
const Inmaiorque21 = jidades.indexOf(21);
console.log(Inmaiorque21);

//lastIndexOf (Retorna o último índice em que um 
// elemento pode ser encontrado no array)
const LInmaiorque21 = jidades.lastIndexOf(21);
console.log(LInmaiorque21);

//includes (Retorna um booleano verificando se determinado
// elemento existe no array)
const Existe21 = jidades.includes(21);
console.log(Existe21);

//some (Retorna um booleano verificando se pelo menos
// um item de um array satisfaz a condição)
const idadespar = jidades.some(value => value % 2 === 0);
console.log(idadespar);
const menorde18 = jidades.some(value => value < 18);
console.log(menorde18);
const estudantes = [{nome:"Ricardo", nota: 8},{nome:"Karla", nota: 10},{nome:"Pondera", nota: 5}];
console.log(estudantes);
const temaprovado = estudantes.some(estudantes => estudantes.nota > 7);
console.log(temaprovado);
const quem = estudantes.find(estudantes => estudantes.nota > 9);
console.log(quem);

//every (Retorna um booleano verificando se todos os itens
//de um array satisfazem a condição)
const todosaprovados = estudantes.every(estudantes => estudantes.nota > 7);
console.log(todosaprovados);

//sort (Ordena os elementos de uma array de acordo 
//com a condição)
const ordenaidades = jidades.sort();
console.log(ordenaidades);
const ordenanotas = estudantes.sort((current, next) => current.nota - next.nota);
console.log(ordenanotas);

//reverse (Inverte os elementos de um array)
const inverte = jidades.reverse();
console.log(inverte);

//join (Junta todos os elementos de um array, separados
//por um delimitador e retorna uma string)
const juntarelementos = jidades.join('|');
console.log(juntarelementos);

//reduce (Retorna um novo tipo de dado iterando cada
// posição de um array)
const somadoarray = jidades.reduce((total, value) => total += value, 0);
console.log(somadoarray);
const media = estudantes.reduce((totalnotas, estudantes) => totalnotas += estudantes.nota, 0) / estudantes.length;
console.log(media);


const alunos = [
    { nome: "Cris", nota: 10 },
    { nome: "Alexandre", nota: 7 },
    { nome: "Pablo", nota: 4 }
  ];
  
  function alunoAprovado(aluno) {
    return aluno.nota >= 7;
  }
  
  console.log(alunos.filter(alunoAprovado));
  console.log(alunos.some(alunoAprovado));
  console.log(alunos.every(alunoAprovado));

  const colaboradores = [
    { nome: "Cris", horasTrabalhadas: 220 },
    { nome: "Rebeca", horasTrabalhadas: 210 }
  ];
  
  function adicionaSalario(colaborador) {
    const salario = colaborador.horasTrabalhadas * 50;
    colaborador.salario = salario;
  
    return {
      salario: salario
    };
  }
  
  const colaboradoresComSalario = colaboradores.map(adicionaSalario);
  
  console.log(colaboradoresComSalario);
  const familiaPai = ["Avó Zeca", "Avô Aroldo"];
const familiaMae = ["Avô Carlos", "Primo João Paulo"];

const familiaFilho = familiaPai.concat(familiaMae);

console.log(familiaPai);
console.log(familiaMae);
console.log(familiaFilho);

const pessoas = ["Cris", "Alexandre", "Pablo", "Cris"];

console.log(pessoas.indexOf("Cris"));
console.log(pessoas.findIndex(nome => nome === "Cris"));
console.log(pessoas.lastIndexOf("Cris"));
console.log(pessoas.find(nome => nome === "Cris"));