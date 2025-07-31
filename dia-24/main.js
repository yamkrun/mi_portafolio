let contenedor = document.querySelector("#pokemons-container");

async function traerpokemones(numeroInicialPokemones) {
  contenedor.innerHTML = "";
  for (let i = numeroInicialPokemones; i < numeroInicialPokemones + 10; i++) {
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let data = await respuesta.json();
    renderizarPokemon(data);
  }
}
traerpokemones(1);
function renderizarPokemon({
  sprites: {
    other: {
      ["official-artwork"]: { front_default },
    },
  },
  name,
  id,
  types,
}) {
  let tipos = "";
  types.forEach((tipo) => {
    tipos = tipos + " " + tipo.type.name;
  });

  contenedor.innerHTML += `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${front_default}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">#00${id}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">tipos ${tipos}</p>
        <a href="#" class="mas-info inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-id="${id}">
         Mas informacion
         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
       </svg>
        </a>

    </div>
</div>
`;
}

let next = document.querySelector("#siguiente");
let contador = 1;
next.addEventListener("click", function (e) {
  contador += 10;
  traerpokemones(contador);
});

let ant = document.querySelector("#anterior");

ant.addEventListener("click", function (e) {
  if (contador > 10) {
    contador -= 10;
    traerpokemones(contador);
  }
});

let menu = document.querySelector("#drpwn");
let opc = document.querySelector("#opciones");
menu.addEventListener("click", function (e) {
  opc.classList.toggle("hidden");
});

//let fuego = document.querySelector("#fire");
let tipos = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];

opc.addEventListener("click", async function (e) {
  opc.classList.add("hidden");
  contenedor.innerHTML = "";
  let busqueda = "";
  for (let k = 0; k < tipos.length; k++) {
    if (e.target.closest(`#${tipos[k]}`)) {
      busqueda = tipos[k];
    }
  }

  let respuesta = await fetch(`https://pokeapi.co/api/v2/type/${busqueda}`);
  let data = await respuesta.json();

  for (let j = 0; j <= 9; j++) {
    let respuestaPOk = await fetch(`${data.pokemon[j].pokemon.url}`);
    let datapok = await respuestaPOk.json();
    renderizarPokemon(datapok);
  }
});


const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const cerrarModal = document.getElementById("cerrarModal");

document.addEventListener("click", async (e) => {
  // Si clickean en el botón "Mas informacion"
  if (e.target.closest(".mas-info")) {
    e.preventDefault();
    const id = e.target.closest(".mas-info").dataset.id;
    
    // Fetch detalles del Pokémon
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    // Construir HTML para el modal
    modalContent.innerHTML = `
      <h2 class="text-2xl font-bold capitalize">${data.name}</h2>
      <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}" class="mx-auto w-48 h-48 object-contain" />
      <p><strong>Tipos:</strong> ${data.types.map(t => t.type.name).join(", ")}</p>
      <p><strong>Altura:</strong> ${data.height / 10} m</p>
      <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
      <p><strong>Habilidades:</strong> ${data.abilities.map(a => a.ability.name).join(", ")}</p>
      <p><strong>Movimientos:</strong> ${data.moves.slice(0, 10).map(m => m.move.name).join(", ")}${data.moves.length > 10 ? ", ..." : ""}</p>
      <div>
        <strong>Estadísticas:</strong>
        <ul class="list-disc list-inside">
          ${data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join("")}
        </ul>
      </div>
    `;

    modal.classList.remove("hidden");
  }
});

// Cerrar modal al hacer clic en botón cerrar
cerrarModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// También cerrar modal si clickeás fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
