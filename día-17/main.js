/*let boton = document.querySelector("#btn");
let imagen = document.querySelector("#fiona");

boton.addEventListener("click", (event) => {
  if (event.target.classList.contains("bg-green-500")) {
    event.target.classList.remove("bg-green-500");
    event.target.classList.add("bg-black");
    event.target.textContent = "Noche";
    imagen.setAttribute("src", "https://i.pinimg.com/736x/54/f0/b0/54f0b0f23a9ce0ca1c4985448789a207.jpg");
  } else {
    event.target.classList.remove("bg-black");
    event.target.classList.add("bg-green-500");
    event.target.textContent = "Día";
     imagen.setAttribute("src", "https://i.pinimg.com/736x/f8/5c/7c/f85c7ca50cde24cd8f30a24b6dbee5c6.jpg");
  }
});*/

let form=document.querySelector("#formulario")
form.addEventListener("submit",function(e){
  e.preventDefault();
  let obj={}
  let nombre=document.querySelector("#nombre")
  let apellido=document.querySelector("#apellido")
  let  edad=document.querySelector("#edad")
  let  nacionalidad=document.querySelector("#nacionalidad")
  obj.nombre = nombre.value
   obj.apellido = apellido.value
    obj.edad = edad.value
     obj.nacionalidad = nacionalidad.value
     console.log(obj);
})
