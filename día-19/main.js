/*let participante = {
  nombre: "Juanito",
  edad: 27,
  carrera: "medicina",
  ganador: true
};

let mensaje = `${participante.ganador ? "¡Ganaste un millón de dólares!" : "Siga participando"}`;

console.log(mensaje);*/ 

let estudiantesFunval = [
  { nombre: "Yamila", pais: "Argentina" },
  { nombre: "Gabriel" },
  { nombre: "Benjamin", pais: "Argentina", edad: 32, mision: true },
  { nombre: "Jeff", pais: "Peru" },
];
let funval=document.querySelector("#estudiantes")
function mostrarEstudiante({ nombre = "no respondió", pais = "no respondió", edad = "no respondió", mision = "no respondió" }) {
  funval.innerHTML += `
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${nombre}
      </td>
      <td class="px-6 py-4">${pais}</td>
      <td class="px-6 py-4">${edad}</td>
      <td class="px-6 py-4">${mision}</td>
      </tr>
  `;
}

for (let i = 0; i < estudiantesFunval.length; i++) {
  mostrarEstudiante(estudiantesFunval[i]);
}
