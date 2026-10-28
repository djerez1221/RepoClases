function renderizarCatalogo(contenedor, productos) {

    let productosHTML = ''
    productos.forEach((producto) => { // El parametro producto es el elemento actual
        productosHTML += `
    <article>
        <h3>${producto.nombre}</h3>
        <picture>
            <img src="${producto.imagen}" alt="${producto.nombre}">
        </picture>
        <p>
            ${producto.descripcion}
        </p>
        <ul>
            <li>
                Talles: ${producto.talles.join(", ")}
            </li>
            <li>
                Precio $${producto.precio.toFixed(2)}
            </li>
        </ul>
        <button class="boton-agregar-producto" data-ID="${producto.id}">Agregar al carrito</button>
    </article>
    `
    })
    contenedor.innerHTML = productosHTML

}

function filtrarPorTalle(productos, talle) {

    return productos.filter((producto) => {
        return producto.talles.includes(talle.toUpperCase())
    })

}

export { renderizarCatalogo, filtrarPorTalle }

