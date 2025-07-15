let saludo ="hola mundo"
console.log(saludo)
/*escribo un comentario jajaja */
/*escribo
un 
comentario en 
varias lineas */
let string="yamila"
let numero= 22
let femenino= true
let hambre=null 
let numeroGrande =123456789n
let simbolo=Symbol("yami")
let estado;
console.log(string)
console.log(numero)
console.log(femenino)
console.log(hambre)
console.log(numeroGrande)
console.log(simbolo)
console.log(estado)

console.log(typeof(string))
console.log(typeof(numero))
console.log(typeof(femenino))
console.log(typeof(hambre))
console.log(typeof(numeroGrande))
console.log(typeof(simbolo))
console.log(typeof(estado))
 
string="Camilo"
numero= 23
femenino=false
numeroGrande =1234512345n
simbolo=Symbol("camilo")


string=22
numero= true
femenino=null
hambre=456789n 
numeroGrande;
simbolo="yamila"
estado=Symbol("yami")

const string1="yamila"
const numero1= 22
const femenino1=true
const hambre1=null 
const numeroGrande1 =123456789n
const simbolo1=Symbol("yami")
/*const estado1;*/
  
/*string1="yami"
numero1= 2
femenino1=false
hambre1=null 
numeroGrande1 =13323456789n
simbolo1=Symbol("yam")*/ 

/*OPERADORES LOGICOS  */

// 1. Crea una variable para cada operación aritmética

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas
    let a = 2;
    let b = 4;
    let c=2

    let suma = a + b;
    let resta = b - a;
    let multiplicacion = a * b;
    let division = b / a;
    let potencia = b ** a;
    let modulo = b % a;

    suma += 1;
    resta -= 1;
    multiplicacion *= 2;
    division /= 2;
    potencia **= 2;

    let comparacion;
    comparacion = a == c;

    console.log(comparacion); 

    comparacion = a != b;

    console.log(comparacion); 
    comparacion = a < b;

    console.log(comparacion);
    
    comparacion = a <= b;

    console.log(comparacion); 

    comparacion = a === c;

    console.log(comparacion); 

    comparacion = a == b;

    console.log(comparacion); 
    
    comparacion = a === b;

    console.log(comparacion); 
     
   comparacion = a !== c;

    console.log(comparacion);  
  
    comparacion = a > b;

    console.log(comparacion);
     
    comparacion = a >= b;

    console.log(comparacion);

    comparacion= a===c && a<b
    console.log(comparacion)

    comparacion= a<=c || a==b
    console.log(comparacion)

    comparacion= a==c && c<b || a<b
    console.log(comparacion)
 
    comparacion=  a!==c && a==c && c<b || a<b
    console.log(comparacion)

    /* operador ternario*/
    let edad2=20;
    let mensaje = edad2<18? "sos menor":"sos mayor"
    console.log(mensaje)

    /*10*/

    comparacion= a+c !== b || b<c 
    console.log(comparacion)

    /*ejercicio */
    let usuario = "admin";
    let password = 123456;

    usuario === "admin" && password === 123456
    ? console.log("datos correctos")
    : usuario!=="admin" && password ===123456
    ? console.log("usuario incorrecto")
    : usuario==="admin" &&  password!==123456
    ? console.log("contraseña incorrecta")
    : console.log("datos incorrectos");

