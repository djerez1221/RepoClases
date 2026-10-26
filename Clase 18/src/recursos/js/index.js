
import hola from "./Productos"
import productosMascotas, {contenedorProductos,categorias} from "./Productos"

import {filtrarPorTalle,renderizarCatalogo} from "./Funciones"



const contenedorProductos = document.getElementById("contenedor-productos")

const productofiltrados = filtrarPorTalle(productosMascotas, "S")


renderizarCatalogo(contenedorProductos,productofiltrados)

