import { URL_PRODUCTOS } from "./config.js"

// async / await
async function obtenerDatos(url) {
    const respuesta = await fetch(url) //<- pedimos un recurso via HTTP -> Response
    const datos = await respuesta.json() //<----- transforma a un objeto javascript
    return datos //<-- arreglo
}

const datos = await obtenerDatos(URL_PRODUCTOS)
// console.log(datos)
export default datos