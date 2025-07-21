
let estudiantes = [
  {
    nombre: "kevin",
    pais: "Bolivia",
  },
  {
    nombre: "Pablo",
    pais: "Argentina",
  },
  {
    nombre: "Geraldine",
    pais: "Peru",
  },
  {
    nombre: "Gabriel",
    pais: "Argentina",
  },
  {
    nombre: "Mario",
    pais: "Argentina",
  },
];

let contenedor = document.querySelector("#contenedor-estudiantes");
for (let i = 0; i < estudiantes.length; i++) {
  if(estudiantes[i].pais=="Argentina"){  
  contenedor.innerHTML += `
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantes[i].nombre}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Pais de origen: ${estudiantes[i].pais}</p>
            </a>
            `};
}

/* trabajo MOSTRAR UNICAMENTE  A LOS ESTUDIANTES DE ARGENTINA DE FORMA DINAMICA */


const productos = [
  { id: 1, nombre: "Helado de vainilla", precio: 10, stock: 3 },
  { id: 2, nombre: "Helado de chocolate", precio: 12, stock: 0 },
  { id: 3, nombre: "Helado de fresa", precio: 11, stock: 2 },
  { id: 4, nombre: "Helado de limón", precio: 9, stock: 1 },
];
/*  Mostrar todos los productos en una lista.
Cada producto debe mostrar:
Nombre
Precio
Stock disponible
Botón "Comprar"*/

let contenedor2 = document.querySelector("#heladeria");
for (let i = 0; i < productos.length; i++){
    contenedor2.innerHTML +=`<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${productos[i].nombre}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Precio: ${productos[i].precio}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Stock disponible: ${productos[i].stock}</p>
                <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 me-5 mb-2 dark:focus:ring-yellow-900">Comprar</button>
            </a>`
}
