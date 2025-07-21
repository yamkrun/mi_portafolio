const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ]; 
//1 mostrar en consola usando for each
productos.forEach((element) => {
    console.log(element.nombre+": "+element.precio)
});
//2 crear un array de nombres de productos con map y usar includes para ver si estan disponibles 
let productosDisponibles= productos.map(productos=>productos.nombre)
console.log(productosDisponibles);

console.log(productosDisponibles.includes("Laptop"))
console.log(productosDisponibles.includes("microfono"))
//3 crear otro array pero con 10% de descuento
let productosDescuento = productos.map (function(productos){
    return {
        nombre: productos.nombre,
        precioDescuento: productos.precio* 0.9}
})
console.log(productosDescuento);
//4 mostrar los productos que salgan menos de 100
let precioBajo = productos.filter(productos=>productos.precio<=100)
console.log(precioBajo);
//5 mostrar los dos promeros productos
let productosCorto = productos.slice(0,2)
console.log(productosCorto);
//6 ordenarlos de menor a mayor precio
let menorAMayor= productos.sort((a,b)=>a.precio-b.precio)
console.log(menorAMayor);
//7 invertir el orden de los preductos
let productosReverso= productos.reverse();
console.log(productosReverso);
//nota: los metodos reverse y sort no crean un nuevo array ellos modifican el original