// USANDO O FILTER()

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
        nome: 'pondera',
        especie: 'cão',
        idade: 10,
        peso: 23.4
    },
    {
        nome: 'luke',
        especie: 'gato',
        idade: 6,
        peso: 6.7
    },
    {
        nome: 'nemo',
        especie: 'peixe',
        idade: 1,
        peso: 0.2
    },
    {
        nome: 'Lilika',
        especie: 'cão',
        idade: 13,
        peso: 25.3
    },
    {
        nome: 'bituca',
        especie: 'cão',
        idade: 11,
        peso: 11.2
    },
];

//Função dentro da execução
/*
const newPets = pets.filter((pet) => {
    return pet.idade < 5;
})
*/
// Chamando a função externa
const MenorQ5 = (numero) => {
    return numero < 7;
}

const newPets = pets.filter(({ idade }) => MenorQ5(idade));

console.log(pets);
console.log(newPets);
// FIM EXEMPLO FILTER()  //

// USANDO O MAP()  //
//Chama o callback para cada elemento e devolde um 
// novo array com a mesma quantidade de itens
// var newArray = arr.map(callback,[ this Arg])

const petNomes = pets.map((pet) => {
    if (pet.nome == "bituca"){
        return pet.nome = "bolinha";
    }
    else {
        return pet.nome;
    }
    

})
console.log(petNomes);

// USANDO O REDUCE()    //
// Executa uma função para cada elemento 
// retornando um único valor de retorno
// Retorando o total do objeto pesos do array
const TotalPeso = pets.reduce((total, pet) => {
    return total + pet.peso;
}, 0);
console.log("Total: "+ TotalPeso);

// Retorando o total do objeto idade do array
const TotalIdade = pets.reduce((total, pet) => {
    return total + pet.idade;
}, 0);
console.log("Total: "+ TotalIdade);

// Unificando as duas funções acima em um único REDUCE
// const TotalPesoIdade  = pets.reduce((total, pet) => {
//     return {
//         SomaIdade: total.SomaIdade + pet.idade,
//         SomaPeso: total.SomaPeso + pet.peso
//     }
// }, {SomaIdade: 0, SomaPeso: 0})
// console.log(TotalPesoIdade);

// Condicionando a espécie cão
const TotalPesoIdadeDogs  = pets.reduce((total, pet) => {
    if (pet.especie === "cão"){
        return {
            SomaIdade: total.SomaIdade + pet.idade,
            SomaPeso: total.SomaPeso + pet.peso,
            TipoEspecie: pet.especie
        };
    }
    else {
        return {
            SomaIdade: total.SomaIdade,
            SomaPeso: total.SomaPeso
        };
    }


}, {SomaIdade: 0, SomaPeso: 0, TipoEspecie: "" })
console.log(TotalPesoIdadeDogs);