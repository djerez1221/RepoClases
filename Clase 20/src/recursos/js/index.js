// import productos from "./productos.js" // -> no nombrada
import productosMascotas from './productos.js'
import {filtrarPorTalle,renderizarCatalogo} from './funciones.js'

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