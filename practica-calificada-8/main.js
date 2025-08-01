let modal1=document.querySelector("#modalganador");
let btncerrar=document.querySelector("#cerrarmodal");

btncerrar.addEventListener("click", function(){
    modal1.classList.remove("flex")
    modal1.classList.add("hidden")
})