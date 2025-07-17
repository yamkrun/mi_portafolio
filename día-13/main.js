 /*alert("Bienvenido al restaurante Don Baratón");

let seguir = "sí";
let total=0

while (seguir.toLowerCase().startsWith("s")) {
 
  let opcion = prompt(
    "Menú del día:\n" +
    "1. Tacos ------- precio: 20 c/u\n" +
    "2. Pizza ------- precio: 25 c/u\n" +
    "3. Empanadas --- precio: 5 c/u\n" +
    "4. Ensalada ---- precio: 15 c/u\n" +
    "5. Sopa------ precio: 10 c/u\n\n" +
    "Seleccioná una opción (1, 2, 3, 4 o 5):"
  );
  let cantidad = parseInt(prompt("¿Cuántos platos querés?"));
  alert("Elegiste " + cantidad + " unidad(es) de la opción " + opcion);
  seguir = prompt("¿Querés hacer otro pedido? (sí / no)");
  let precio=0
  if (opcion==1){
    precio=20
  }else if(opcion==2){
    precio=25
  }else if (opcion==3){
    precio=5
  }else if(opcion==4){
    precio=15
  }else if (opcion==5){
    precio=10
  }
  let subtotal= precio*cantidad
  total= total+subtotal
}
let nombre= prompt("cual es tu nombre?")
alert("gracias por tu compra "+ nombre+ "\n"
    +" el total a pagar es: "+total)*/


 /*   crear variables de los platos y sus precios

    1 crear un alert que diga bienvenido al restaurante Don Baraton
    2 crear un promt que diga el menu y el precio, lo elijamos por opciones d numeros variable
    3 promt que diga cuantos platos queremos
    4 crear un promt que diga si deseamos otro pedido 
    yamila

    4 crear una funcion que guarde el pedido
    5 crear una funcion que calcule el total de pedido
    jefferson

    6 crear un promt para pedir el nombre del cliente y guardarlo en una vari
    7 crear una funcion que muestre la factura con el total y el nombre del cliente
      y algom mas.
      gabriel



      quien termine primero investiga como colocarlo en html



*/
 let numeros=parseInt(prompt("Calculadora:\n"+"1.suma\n"+"2.resta\n"+"3.multiplicación\n"+"4.división"))

 let numero1=parseFloat(prompt("numero1:"))
 let numero2=parseFloat(prompt("numero2:"))

let suma=(numero1,numero2)=>numero1+numero2
let resta=(numero1,numero2)=>numero1-numero2
let multiplicacion=(numero1,numero2)=>numero1*numero2
let división=(numero1,numero2)=>numero1/numero2
 
if(numeros==1){
    alert(suma(numero1,numero2))
}else if (numeros==2) {
    alert(resta(numero1,numero2))
}else if(numeros==3){
    alert(multiplicacion(numero1,numero2))
}else if(numeros==4){
    alert(división(numero1,numero2))
}else{
    alert("opcion invalida")
}


