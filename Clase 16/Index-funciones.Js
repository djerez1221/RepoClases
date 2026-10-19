//Operaciones con Arreglos
/*
const numeros = [5,20,3,1,21]
const numeromasuno = []
numeros.forEach((numero,  )=>{
    numeromasuno.push(numero +1)

})
console.log(numeromasuno)
*/

//map -> .map()

const numeros = [5,20,3,1,21]

const numeromasuno = numeros.map((numero)=>{
    return numero + 1
})
console.log(numeromasuno)

// filter
