/**
 * 
 Escriba un programa que, dadas las longitudes de los catetos de un 
triángulo rectángulo, calcule la longitud de su hipotenusa.

 */

const hipotenusa = (a,b) => {
    return h = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)).toFixed(2);
    //console.log("La hipotenusa de tu triangulo es: "+ h);
    
}

//hipotenusa(4,3);


//Paso1:
//crear una const de tipo objeto,
//donde se almacenan las funciones que quiero testear
const operacion = {
    hipotenusa 
}

//Paso 2: Exportar el objecto con la funcion almacenada
module.exports = operacion;