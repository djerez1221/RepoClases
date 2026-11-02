import {url_productos} from "./config.js"
//async / await
async function obtenerDatos(url){
   const repuesta = await fetch(url)
   const datos = await repuesta.json()
   return datos
}
const datos = await obtenerDatos(url_productos)
//console.log(datos)
export default datos