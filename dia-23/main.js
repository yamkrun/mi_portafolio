console.log("hola mundo");

//asincronía

let leerLibro = ()=>{
    console.log("palabra1");
    console.log("palabra2");
    console.log("palabra.n");
}
leerLibro();

let mañanaSabado = ()=>{
setTimeout(() => {
    console.log("música");
},3000);
console.log("limpiar");}

mañanaSabado();

let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];
//CREANDO UNA PROMESA
const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("el servidor esta caido");
    }
  }, 5);
});
/* 
    deberan consumir esta promesa para obtener el listado de los estudiantes una vez tengan el listado de estudiantes
    deberan mostrar con inerHTML EN SU WEB la lista de todos los estudiantes aprobados se considera aprobado cuando
    el promedio del estudiante es de 51pts pueden mostrarlo usando cards listas tablas etc 
*/
let estudiantesCard = document.querySelector("#estudiantes");

listaEstudiantes
  .then((estudiantes) => {
    estudiantes.forEach(estudiante => {
      let suma = 0;
      estudiante.notas.forEach(n=> suma += n);
      let promedio = suma / estudiante.notas.length;

      if (promedio >= 51) {
        estudiantesCard.innerHTML += `
          <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Edad: ${estudiante.edad}</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">Promedio: ${promedio.toFixed(2)}</p>
          </div>
        `;
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });


