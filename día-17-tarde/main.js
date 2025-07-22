let alumnos = [
  {nombre:"Yamila", edad:22, nacionalidad:"Argentina"},
  {nombre:"Gabriel", edad:21, nacionalidad:"Argentina"},
  {nombre:"Pablo", edad:33, nacionalidad:"Argentina"},
  {nombre:"Douglas", edad:21, nacionalidad:"El Salvador"},
  {nombre:"Geraldine", edad:26, nacionalidad:"Perú"}
];
let botonModal=document.querySelector("#cerrarModal")
let boton=document.querySelector("#btn")
let nuevos = document.querySelector("#modal")
let tablaEstudiantes = document.querySelector("#estudiantes");

for (let i = 0; i < alumnos.length; i++) {
  tablaEstudiantes.innerHTML += `
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${alumnos[i].nombre}
      </td>
      <td class="px-6 py-4">${alumnos[i].edad}</td>
      <td class="px-6 py-4">${alumnos[i].nacionalidad}</td>
      </tr>
  `;
}

boton.addEventListener("click",function(e){
    modal.classList.remove("hidden")
})

botonModal.addEventListener("click",()=>{
    modal.classList.add("hidden")
})
let form=document.querySelector("#formulario")
form.addEventListener("submit",function(e){
    e.preventDefault();
    let nombres=document.querySelector("#nombre")
    let edades=document.querySelector("#edad")
    let nacionalidades=document.querySelector("#nacionalidad")
    let obj={
        nombre: nombres.value,
        edad:edades.value,
        nacionalidad:nacionalidades.value
    }
    alumnos.push (obj)
  tablaEstudiantes.innerHTML += `
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${obj.nombre}
      </td>
      <td class="px-6 py-4">${obj.edad}</td>
      <td class="px-6 py-4">${obj.nacionalidad}</td>
      </tr>
  `;
 form.reset()
modal.classList.add("hidden")
})