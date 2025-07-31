/*let contenedor = document.querySelector("#usuario")
fetch("https://jsonplaceholder.typicode.com/users").then((respuesta)=>
    respuesta.json())
.then((data)=>{
    console.log(data);
    data.forEach(usuario => {
        contenedor.innerHTML += `
        
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${usuario.name}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Correo: ${usuario.email}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Teléfono: ${usuario.phone}</p>
     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Compañía: ${usuario.company.name}</p>
     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Dirección: ${usuario.address.city}, ${usuario.address.street},
     ${usuario.address.suite}</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        contacto
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
`

    });
})*/

/*async function fetchData(){
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    let data =await respuesta.json();
    data.forEach(usuario=>
    {
        contenedor.innerHTML += `
        
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${usuario.name}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Correo: ${usuario.email}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Teléfono: ${usuario.phone}</p>
     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Compañía: ${usuario.company.name}</p>
     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Dirección: ${usuario.address.city}, ${usuario.address.street},
     ${usuario.address.suite}</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        contacto
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
`
    }
    )
}*/


let contenedor = document.querySelector("#perritos");
for (let i = 0; i < 8; i++) {
    fetch("https://dog.ceo/api/breeds/image/random")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    contenedor.innerHTML += `
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
        <img src="${data.message}" alt="Perrito adorable" class="rounded-lg"/>
      </div>
    `;
  });

    
}
