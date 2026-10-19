//funciones

//declaracion
//function suma(a,b){
    //console.log (5 + 2)
//    return a + b
//}
// invocar / llamar / ejecutar

//let resultado = suma(10, 5)
//console.log(resultado)

// funciones flecha
//const suma =(a,b)=>{
//    return a + b
//}
//let resultado = suma(10,5)
//console.log(resultado)

//console.log(suma)

// callbacks

const a = (cb)=>{
   console.log('se ejecuto la funcion')
    cb()
}
const b = ()=>{
    console.log('se ejecuto el callback que es la funcion B')
}

a(b)