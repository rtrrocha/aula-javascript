function clicou()
{
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));

    alert("obrigado por clicar");
}
function redirecionar()
{
    window.open("https://github.com/rtrrocha/");
    //window.location.href = "https://github.com/rtrrocha/";
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("trocar texto");
}
function load(){
    alert("Página carregada!")
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    n1 = Number(n1);
    n2 = Number(n2);
    return n1+n2;
}

function validaidade(idade){
    var validar;
    if (idade>=18){
        validar = true;
    }
    else{
        validar = false;
    }
}
var n1 = prompt("Digite uma numero:");
var n2 = prompt("Digite outro número:");

alert (soma(n1,n2));
*/

/*
var d = new Date();
alert(d.getDate());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth()+1);
*/
/*
var count =0;
for (count=0; count <=5; count++)
{
    alert(count);
    console.log(count);
}
*/
/*
var count = 0;
while (count <= 5)
{
 console.log(count);
 alert(count);
 ++count;
}
*/

/*
var idade = prompt("Qual sua idade:");
if (idade >= 18)
{
    alert("Maior de idade");
}
else 
{
    alert("Menor de idade");
}
*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta  = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maça", "pera", "banana"];
//lista.pop();
//lista.push("uva");
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));

//var nome = "Ricardo Rocha";
//var idade = 38;
//var idade2 = 10;
//var n1 = 5;
//var n2 = 3;
//var frase  = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade);
//alert(idade +" "+ idade2);

//console.log (nome);
//console.log (idade);
//console.log (idade2);
//console.log (n1 * n2);
//console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));