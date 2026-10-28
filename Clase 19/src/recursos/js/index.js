import productosMascotas from "./productos.js"
import { filtrarPorTalle, renderizarCatalogo} from "./funciones.js"

const contenedorProductos = document.getElementById("contenedor-productos")


const botonEvento = document.getElementById("boton-evento")


const ProductosSeleccionados = document.getElementById("Productos-Seleccionados")


const productosEnCarro = []


const productosFiltrados = filtrarPorTalle(productosMascotas, "S")

// renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)

botonEvento.addEventListener("click", (evento) => {
    //console.log(evento)
    //dialog.show()
    dialog.showModal()
})

//Aplicar escuchadores a los botones de cada producto
const botonesProductos = document.querySelectorAll(".boton-agregar-producto")
//console.log(botonesProductos)
botonesProductos.forEach((boton) => {
    //Cuerpo del callback forEach
    boton.addEventListener("click", (evento) => {
        //Cuerpo del callback del addEventListener
       const idProducto = parseInt (boton.dataset.id)
        console.log("id del producto: ", idProducto)
        productosEnCarro.push(idProducto)
        console.log("Productos en el carro: ", productosEnCarro)
        ProductosSeleccionados.textContent = productosEnCarro.length
    })
})
