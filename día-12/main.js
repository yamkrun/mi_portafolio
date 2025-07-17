/*console.log("hola mundo")

let permisoMama = false;
let permisoPapa = true;
edad = 28;
/*if (edad >= 18) {
  if (permisoMama || permisoPapa) {
    console.log("puedo salir a bailar");
  } else {
    console.log("me quedo en casa");
  }
} else {
  console.log("me quedo en casa");
}*/

/*if (edad >= 18 && (permisoMama || permisoPapa)) {
    console.log("puedo salir a bailar");
  } else {
    console.log("me quedo en casa");
  }

  /* ejercicio de fecha*/



/*let año = 2003;
let mes = 2;
let dia = 18;

let fechaNacimiento = new Date(año, mes - 1, dia);
let hoy = new Date();

let diferencia = hoy - fechaNacimiento; // milisegundos
let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

console.log("Días vividos:", dias);


//para imprimir numeros pares 

//let numero= prompt("ingrese un numero")
/*numero = parseInt(numero)

for(let i=0; i<numero; i++){
    if(i%2===0){
    console.log(i);}
}*/


//para multiplicar dos numeros sin usar * ni /

/*let numero1= prompt("ingrese un numero")
numero1 = parseInt(numero1)

let numero2=prompt("ingrese otro numero")
numero2 = parseInt(numero2)

let resultado =0

for(let i=1; i<=numero2; i++){
    resultado += numero1
}
console.log(resultado);*/

// para encontrar el factorial de un numero

/*let numero3= prompt("ingrese un numero")
let factorial=1

for(let i=1; i<=numero3; i++){
    factorial=i*factorial
}
console.log(factorial);*/

//para los numeros primos

/*let numero = parseInt(prompt("ingresa un numero"))
 
for (let i=2; i<=numero; i++){
  let numeroPrimo = true
  for(let j=2; j<i; j++){
    if(i%j===0){
        numeroPrimo= false
        break;
    }
  }
  if(numeroPrimo){
    console.log(i);
  }
}*/

/*for(i=1;i<=30;i++){
  if(i%3===0 && i%5===0){
    console.log("FizzBuzz");
  }else if(i%5===0){
    console.log("Buzz");
  }else if(i%3===0){
    console.log("Fizz");
  }else{console.log(i);} 
  
}*/

/*for(let tabla=1;tabla<=5;tabla++){
  for(let multiplicador=1;multiplicador<=5;multiplicador++){
    let resultado= tabla*multiplicador
    console.log(tabla+"x"+multiplicador+"="+resultado);
  }

}

for(let fila=1;fila<=5;fila++){
  console.log(1);
  for(let numeros=1;numeros<=5;numeros++){
    console.log(2);
  }
}



let booleano= true

function retornaResultado(booleano) {
  let respuesta;
  if (booleano) {
    respuesta = "tu palabra es palindrome";
  } else {
    respuesta = "tu palabra no es palindrome";
  }
  return respuesta;
}
console.log(retornaResultado(booleano))


let numeroCliente= alert("ingrese un numero")

function cantidadNumeros(numeroCliente) {
  let divisores;
  for(let i=1; i<=numeroCliente; i++){
    divisores = cantidadNumeros(numeroCliente)
  }
}
*/