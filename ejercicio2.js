/*
 Escriba un programa que lea un número de cuatro dígitos y muestre en 
pantalla el número escrito en reverso. Por ejemplo, si el número leído es 
5432, la salida debería ser 2345 */

const reverso = (num1)=>{
    let numR = num1.toString().split('').reverse().join();
    return numR;
}

//reverso(5432);

//1.- Almacenamiento de funciones
const funcionReverso = {
    reverso,
}

//2.- Exportar
module.exports = funcionReverso;
