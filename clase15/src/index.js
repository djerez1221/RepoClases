// Estructura de control bucle
for(let i=0;i <10;i++){
    console.log(i)
}


//arreglos
const numeros = [1,true,,3,4,5,6]


// TIPOS NO PRIMITIVOS Y COMPARACION

const NUMEROS1 =[1,2,3]
const NUMEROS2 =[1,2,3]

const NUMEROS3 = [1,2,[2,5],3,[1,[2]]]

console.log(NUMEROS3 [3],[1],[0])

for(let i=0;i < numeros.length ; i++ ){
    console.log(numeros[i])
}
// Objetos

const persona = {
    // Propiedad ----→ valor
    nombre: `Andres`,
    edad: 20,
    estudia: true,
    redes:[
        `instagram`,
        `tiktok`,
        `youtube`
    ],
    otros: {
        mascotas: 2
    }
}

console.log(persona.redes[0])
console.log(persona.otros.mascotas)
