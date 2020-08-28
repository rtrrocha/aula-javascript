//Exemplo for removendo duplicados
/*
for (var i =0; i< Array.length; i++)
{
    if (Array.indexOf( array[i]) === i)
    {
        models.push(array[i]);
    }
}
*/
//Exemplo usando o filter

/*
var uniqueProducts = array.filter(function(elem, i, array)
{
    return array.indexOf(elem) === i;
});
*/
//Array.prototype.filter()
// Cria um novo array com todos os elementos que
// passaram no teste da função fornecida
// var newArray = arr.filter(callback[thisarg])
const pets = [
    {
        nome:    'pondera',
        especie: 'cão',
        idade:    10
    },
    {
        nome:    'luke',
        especie: 'gato',
        idade:    6
    },
    {
        nome:    'nemo',
        especie: 'peixe',
        idade:    1
    },
];
console.log(pets);