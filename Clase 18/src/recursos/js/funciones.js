function renderizarCatalogo(contenedor,Productos) {

let productosHTML = ''
productosMascotas.forEach((producto)=>{ //El parametro Producto es el elemento actual//
    productosHTML += `
    <article>
    <h3>${producto.nombre}</h3>
        <picture>
            <img src=${producto.imagen}>
        </picture>
        <p>
            ${producto.descripcion}
        </p>
        <ul>
            <li>
                ${producto.talles}
            </li>
            <li>
                Precio $ ${producto.precio}
            </li>
        </ul>
        <button>Agregar al carrito</button>
    </article>
    `

})
contenedorProductos.innerHTML = productosHTML

}

function filtrarPorTalle(productos, talle){

const talleseelegido = productos.filter((producto)=>{
    return producto.talles.includes(talle.toUpperCase())
})

}


export {renderizarCatalogo, filtrarPorTalle}


