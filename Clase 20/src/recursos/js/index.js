
// import productos from "./productos.js" // --> no nombrada 
import productos from "./productos.js"
import { filtrarPorTalle, renderizarCatalogo} from "./funciones.js"


const productosEnCarro = []

const contenedorProductos = document.getElementById("contenedor-productos")
const botonEvento = document.getElementById("boton-evento")
const dialog = document.getElementById("dialogo")
const ProductosSeleccionados = document.getElementById("Productos-Seleccionados")


////
const productosMascotas = productos


// renderizamos

renderizarCatalogo(contenedorProductos, productosFiltrados,)

//obtenemos datos
obtenerDatos("./recursos/datos/productos.json")

//filtramos
const productosFiltrados = filtrarPorTalle(productosMascotas, "S")

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
