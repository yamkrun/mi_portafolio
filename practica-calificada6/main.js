let saldo=0
let historial="Historial\n"
function mostrarMensaje(texto){
 document.getElementById("mensaje").innerText=texto
}

function mostrarSaldo(){
    mostrarMensaje("Tu saldo es: " + saldo)
}
function depositar(){
    let deposito = parseFloat (prompt("Cuánto dinero deseas depositar en tu cuenta?"))
    if(deposito<0 || isNaN(deposito)){
        mostrarMensaje("Tu monto no es valido")
    }else{
    saldo+=deposito
    mostrarMensaje("Tu saldo actual es de:" + saldo)
    historial +="Depositó........."+deposito+"\n"}
}
function retirarDinero(){
    let retiro= parseFloat(prompt("cuanto dinero deseas retirar de tu cuenta?"))
    if(saldo<retiro || isNaN(retiro)){
     mostrarMensaje("Saldo insuficiente...")
    }else{
        saldo-=retiro
        mostrarMensaje("Tu saldo actual es de:" + saldo)
        historial +="Retiró........."+retiro+"\n"
    }
}

function imprimirHistorial(){
   document.getElementById("mensaje").innerHTML = historial.replace(/\n/g, "<br>");
}

