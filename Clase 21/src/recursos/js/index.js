// import productos from "./productos.js" // -> no nombrada
import { obtenerDatos } from './productos.js'
import {filtrarPorTalle,renderizarCatalogo} from './funciones.js'
//import productosMascotas from './productos.js'
import { URL_PRODUCTOS } from './config.js'


console.log("cargado")

//persistencia

// localStorage.setItem ("numero",1)
// const numero = localStorage.getItem("numero")
// localStorage.getItem (numero)


const numeros = [1,2,3,4]
// const conviertoACadena = JSON.stringify(numeros)
const conviertoACadena = "[1,2,3,4]"
localStorage.setItem ("numeros", conviertoACadena)
const miNumeros = localStorage.getItem("numeros")
console.log(typeof miNumeros)





const productosMascotas = await obtenerDatos(URL_PRODUCTOS)


//Callback
//obtenerDatos(URL_PRODUCTOS).then(()=>{
    // va todo lo que dependa de la rsolucion Fetch
//})



// productos.productosMascotas
const productosEnCarro = []

// Utilizar un objeto disponible para acceder a HTML
// Referenciamos un elemento del html
const contenedorProductos = document.getElementById("contenedor-productos")
const botonEvento = document.getElementById('boton-evento')
const dialogo = document.getElementById('dialogo')
const productosSeleccionados = document.getElementById('productos-seleccionados')

// Asignar datos a productosMascotas
// const productosMascotas = productos

// Filtramos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'M')

// Renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)



// Eventos
botonEvento.addEventListener('click', (evento)=>{
    // console.log(evento)
    // dialogo.show()
    dialogo.showModal()
})

// Aplicar escuchadores a los botones de los productos
const botonesProducto = contenedorProductos.querySelectorAll('.boton-agregar-producto')
// console.log(botonesProducto)

botonesProducto.forEach((boton)=>{
    // Cuerpo del callback forEach
    boton.addEventListener('click', (evento)=>{
        // Cuerpo del callback (handler) del escuchador
        const idProducto = parseInt(boton.dataset.id)
        // console.log(idProducto)
        productosEnCarro.push(idProducto)
        console.log(productosEnCarro)
        productosSeleccionados.textContent = productosEnCarro.length
    })

})