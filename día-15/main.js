let array=["kevin","pablo","johan","geraldine","gabriel"]
console.log(array[3])
array[0]="andrew"
console.log(array[0])
array.push("Yamila")
console.log(array);


let notas=[35,100,45,78,80]

let promedio1 =function(notas){
    let suma=0
    for(let i=0; i<notas.length;i++){
     suma+= notas[i]
    }
    return suma/notas.length
    
}
console.log(promedio1(notas))


let matrizCuadrada=[
    [10,20,30],
    [23,56,34],
    [24,40,68],
]
let sumaDiagonal= function(matrizCuadrada){
    let resultado=0
    for(let i=0;i<matrizCuadrada.length;i++){
        resultado+= matrizCuadrada[i][i];
    }
    return resultado;
};
console.log(sumaDiagonal(matrizCuadrada));



let listaEstudiantes = [
  {
    nombre: "kevin",
    edad: 28,
    nacionalidad: "Bolivia",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [11, 23, 45, 67],
  },
  {
    nombre: "Pablo",
    edad: 33,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 12322876454n,
    notas: [99, 80, 100, 10],
  },
  {
    nombre: "Yamila",
    edad: 22,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 112894789123479812n,
    notas: [77, 99, 51, 80],
  },
  {
    nombre: "Sebastian",
    edad: 25,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [0, 10, 0, 100],
  },
  {
    nombre: "jeff",
    edad: 34,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [100, 90, 99, 88],
  },
];
/* objetivo mostrar a los estudiantes cuyo promedio sea mayor a 65pts */

for (let index = 0; index < listaEstudiantes.length; index++) {
  let promedioEstudiante = promedio1(listaEstudiantes[index].notas);
  if (promedioEstudiante >= 65) {
    console.log(
      listaEstudiantes[index].nombre +
        " este estudiante tiene un promedio de " +
        promedioEstudiante
    );
  }
}

/* mostrar a todos los estudiantes q sean de Argentina */

for (let index = 0; index < listaEstudiantes.length; index++) {
    if(listaEstudiantes[index].nacionalidad=="Argentina"){
        console.log(
            listaEstudiantes[index].nombre +
        ":"+
         listaEstudiantes[index].nacionalidad
        );
    }
    
}
