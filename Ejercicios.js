// Ejercicio1
console.log("hello word");

// Ejercicio 2
console.log(2 + 3);

//Ejercicio 3
var n = 7;     //Escribimos el numero que deseamos saber si es primo o no
var i = 2;
while (n % i !== 0 && i < n / 2 ) {
    i++;
}
if (n % i !== 0) {
    console.log("El numero es primo");
} else {
    console.log("El numero no es primo");
}

// Ejercicio 4
const calificacion = 7;

if(calificacion <= 3 && calificacion >=0 ){
    console.log('Muy deficiente');
}if(calificacion <= 5 && calificacion >=3.1 ){
    console.log('Insuficiente');
}if(calificacion <= 6 && calificacion >=5.1 ){
    console.log('Suficiente');
}if(calificacion <= 7 && calificacion >=6.1 ){
    console.log('Bien');
}if(calificacion <= 9 && calificacion >=7.1 ){
    console.log('Notable');
}if(calificacion <= 10 && calificacion >=9.1 ){
    console.log('Sobresaliente');
}if(calificacion >= 10.1 ){
    console.log('calificacion no valida ingresa un numero del 1 al 10');
}

