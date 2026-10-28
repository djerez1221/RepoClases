const productosMascotas = [
  {
    nombre: "Collar ajustable para perros",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg",
    descripcion: "Cómodo collar ajustable de nailon resistente para paseos seguros diarios.",
    talles: ["S", "L"],
    precio: 15.99,
    id:1  
  },
  {
    nombre: "Correa extensible automática",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg", // TODO: reemplazar por la imagen real
    descripcion: "Correa retráctil resistente con freno seguro y diseño ergonómico moderno.",
    talles: ["M", "L"],
    precio: 24.50,
    id:10  
  },
  {
    nombre: "Cama acolchada para mascotas",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg", // TODO: reemplazar por la imagen real
    descripcion: "Suave cama redonda y cálida ideal para descanso de perros.",
    talles: ["S", "M", "L"],
    precio: 35.00,
    id:11 
  },
  {
    nombre: "Arnés antitirones acolchado",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg", // TODO: reemplazar por la imagen real
    descripcion: "Arnés cómodo que evita tirones durante los paseos con mascotas.",
    talles: ["M", "L"],
    precio: 22.99,
    id:2  
  },
  {
    nombre: "Abrigo impermeable para lluvia",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg", // TODO: reemplazar por la imagen real
    descripcion: "Chaqueta impermeable con capucha para proteger perros en días lluviosos.",
    talles: ["S", "M"],
    precio: 18.75,
    id:3  
  },
  {
    nombre: "Suéter tejido de lana",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg", // TODO: reemplazar por la imagen real
    descripcion: "Cálido suéter tejido a mano perfecto para días de invierno.",
    talles: ["S", "M"],
    precio: 16.50,
    id:4  
  },
  {
    nombre: "Pañuelo bandana estilizado",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg", // TODO: reemplazar por la imagen real
    descripcion: "Bandana de algodón suave con estampados divertidos para mascotas felices.",
    talles: ["M", "L"],
    precio: 8.99,
    id:5  
  },
  {
    nombre: "Chaleco salvavidas canino",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg", // TODO: reemplazar por la imagen real
    descripcion: "Chaleco flotador ajustable con asa resistente para seguridad en piscina.",
    talles: ["M", "L"],
    precio: 29.99,
    id:6  
  },
  {
    nombre: "Disfraz melena de león",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg", // TODO: reemplazar por la imagen real
    descripcion: "Divertida peluca con orejas para transformar a tu perro fácilmente.",
    talles: ["M", "L"],
    precio: 14.25,
    id:7  
  },
  {
    nombre: "Botitas protectoras antideslizantes",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg", // TODO: reemplazar por la imagen real
    descripcion: "Zapatos protectores de goma antideslizante para cuidar las patas caninas.",
    talles: ["S", "M", "L"],
    precio: 19.99,
    id:8  
  }
];


const categorias =[
    'categorias'
]

export default productosMascotas
export {productosMascotas, categorias,}
//Referenciamos un elemento del DOM a partir de su ID

//console.log(contenedorProductos)
//contenedorProductos.textContent = '<h3>producto 1</h3>' solo texto 
//contenedorProductos.innerHTML = '<h3>producto 1</h3>'
// contenedorProductos.innerHTML = `
// <!-- <article>
//     <h3>Correa</h3>
//         <picture>
//             <img src="./recursos/imagenes/productos/perro_correa.jpg" alt="Perro mediano con correa">
//         </picture>
//         <p>
//             Correa azul 1 metro
//         </p>
//         <ul>
//             <li>
//                 Talle L M S
//             </li>
//             <li>
//                 Precio $50.000
//             </li>
//         </ul>
//         <button>Agregar al carrito</button>
// </article> -->
// `
