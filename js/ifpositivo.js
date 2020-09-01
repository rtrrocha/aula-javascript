// let valor1 = 7;
// let valor2 = -5;
// let valor3 = 6 ;
// let valor4 = -3.4;
// let valor5 = 4.6;
// let valor6 = 12;

// let valorpositivo = 0;

//   if (valor1 >=0)
//   {
//     valorpositivo++;
//     console.log(valorpositivo);
//     console.log(valor1);
//   }
//   if (valor2 >=0)
//   {
//     valorpositivo++;
//     console.log(valorpositivo);
//     console.log(valor2);
//   }
//   if (valor3 >=0)
//   {
//     valorpositivo++;
//     console.log(valorpositivo);
//     console.log(valor3);
//   }
//   if (valor4 >=0)
//   {
//     valorpositivo++;
//     console.log(valorpositivo);
//     console.log(valor4);
//   }
//   if (valor5 >=0)
//   {
//     valorpositivo++;
//     console.log(valorpositivo);
//     console.log(valor5);
//   }
//   if (valor6 >=0)
//   {
//     valorpositivo++;
//     console.log(valorpositivo);
//     console.log(valor6);
//   }

// console.log(valorpositivo + " valores positivos");
// Valores pares
let valor = 13;
let valorpar = 0;

for (cont=1; cont <= valor; cont++){
    valorpar = cont%2;
    if (valorpar == 0){
        console.log(cont);
    }
}

// let valor1 = -5;
// let valor2 = 0;
// let valor3 = -3;
// let valor4 = -4;
// let valor5 = 12;
// let valor6 = 12;

// console.log(numeros);
// var qtdp = 0;
// const positivo = numeros.reduce((total, num) => {
       
//         if (num > 0) qtdp++;
//         return qtdp;
// }, 0);
// var totaln = 0;
// const negativo = numeros.reduce((total, num) => {
//     // console.log(num);
//     if (num < 0) 
//          totaln++;
//     return totaln;
    
// }, 0)
// var totali = 0;
// const impar = numeros.reduce((total, num) => {
//     if (num%2 != 0) 
//          totali++;
//     return totali;
    
// }, 0)
// var totalpa = 0;
// const par = numeros.reduce((total, num) => {
//     if (num%2 == 0) 
//          totalpa++;
//     return totalpa;
    
// }, 0)
// console.log( par +" valor(es) par(es) "+ impar +" valor(es) impar(es) " +  positivo +" valor(es) positivo(s) "+ negativo +" valor(es) negativo(s)");
// console.log(impar);
// console.log(par);
// let valorpositivo = 0;
//

// Desafio números pares
//   if (valor1 > 0)
//   {
//     valorpositivo++;
//     // console.log(valorpositivo);
//     // console.log(valor1);
//   }
//   if (valor2 >=0)
//   {
//     valorpositivo++;
//     console.log(valorpositivo);
//     console.log(valor2);
//   }
//   if (valor3 >=0)
//   {
//     valorpositivo++;
//     console.log(valorpositivo);
//     console.log(valor3);
//   }
//   if (valor4 >=0)
//   {
//     valorpositivo++;
//     console.log(valorpositivo);
//     console.log(valor4);
//   }
//   if (valor5 >=0)
//   {
//     valorpositivo++;
//     console.log(valorpositivo);
//     console.log(valor5);
//   }
//   if (valor6 >=0)
//   {
//     valorpositivo++;
//     console.log(valorpositivo);
//     console.log(valor6);
//   }

// console.log(valorpositivo + " valores positivos");

// // Desafio Analise de números
// const numeros = [valor1,valor2,valor3,valor4,valor5];
// var totalpa = 0;
// const par = numeros.reduce((total, num) => {
//     if (num%2 == 0) 
//          totalpa++;
//     return totalpa;
    
// }, 0)
// console.log( par +" valor(es) par(es)");

// var totali = 0;
// const impar = numeros.reduce((total, num) => {
//     if (num%2 != 0) 
//          totali++;
//     return totali;
    
// }, 0)
// console.log( impar +" valor(es) impar(es)");

// var qtdp = 0;
// const positivo = numeros.reduce((total, num) => {
       
//         if (num > 0) qtdp++;
//         return qtdp;
// }, 0);
// console.log( positivo +" valor(es) positivo(s)");

// var totaln = 0;
// const negativo = numeros.reduce((total, num) => {

//     if (num < 0) 
//          totaln++;
//     return totaln;
    
// }, 0)
// console.log(negativo +" valor(es) negativo(s)");

// Desafio contagem de cédulas

// let numero = 503;

// let valor1 = 89;
// let valor2 = parseFloat(gets());
// let valor3 = parseFloat(gets());
// let valor4 = parseFloat(gets());
// let valor5 = parseFloat(gets());

// let n100 = 0;
// let n50 = 0;
// let n20 = 0;
// let n10 = 0;
// let n5 = 0;
// let n2 = 0;
// let n1 = 0;
// // console.log(numero);

// if ((valor1 > 0) && (valor1 < 1000000)){
//     n100 = Math.trunc(valor1/100);
//     console.log(n100 +" nota(s) de R$ 100,00");
//     valor1 = valor1 - (n100*100);
    
//     n50 = Math.trunc(valor1/50);
//     console.log(n50 +" nota(s) de R$ 50,00");
//     valor1 = valor1 - (n50*50);
    
//     n20 = Math.trunc(valor1/20);
//     console.log(n20+" nota(s) de R$ 20,00");
//     valor1 = valor1 - (n20*20);

//     n10 = Math.trunc(valor1/10);
//     console.log(n10 +" nota(s) de R$ 10,00");
//     valor1 = valor1 - (n10*10);

//     n5 = Math.trunc(valor1/5);
//     console.log(n5  +" nota(s) de R$ 5,00");
//     valor1 = valor1 - (n5*5);

//     n2 = Math.trunc(valor1/2);
//     console.log(n2 +" nota(s) de R$ 2,00");
//     valor1 = valor1 - (n2*2);
    
//     n1 = Math.trunc(valor1/1);
//     console.log(n1 +" nota(s) de R$ 1,00");
//     valor1 = valor1 - (n1*1);
// }
// else{
//     console.log("Presentation Error");
// }
    

// console.log(numero + " restante");

// Desafio Km / l
const x = 2254;
let  y = 124.4;
let kml;
y = y.toFixed(1);
kml = (x/y);
kml = kml.toFixed(3);

console.log(kml +" km/l");
