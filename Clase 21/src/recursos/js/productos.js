// async / await
export async function obtenerDatos(url) {
    const respuesta = await fetch(url) //<- pedimos un recurso via HTTP -> Response
    const datos = await respuesta.json() //<----- transforma a un objeto javascript
    return datos //<-- arreglo
}