console.log("hola mundo");

let opcion = parseInt(prompt(
  "CALCULADORA DE ÁREAS:\n" +
  "1. Calcular área de un cuadrado\n" +
  "2. Calcular área de un rectángulo\n" +
  "3. Calcular área de un triángulo\n"+
  "Seleciona una opción con un número del 1 al 3"
));


switch (opcion) {
    case 1:
        let cuadradoLado= parseFloat(prompt("Has elegido el cuadrado\n"+
            "ingresa cuanto mide su lado:"))  
            alert("Área del cuadrado es: "+(cuadradoLado*cuadradoLado));
        break;
    case 2:
        let baseR = parseFloat(prompt("Has elegido el rectángulo\n"+
            "ingresa cuanto mide su base:"))
        let alturaR = parseFloat(prompt("Genial!! ahora ingresa cuanto mide su altura:"))
            alert("El área del rectángulo es: " + (baseR*alturaR))
        break;    
    case 3:
        let baseT = parseFloat(prompt("Has elegido el triángulo\n"+
            "ingresa cuanto mide su base:"))
        let alturaT = parseFloat(prompt("Genial!! ahora ingresa cuanto mide su altura:"))
            alert("El área del triángulo es: " + ((baseT*alturaT)/2))              

    default:
        alert("⚠️ Ingresa un número válido")
        break;
}




