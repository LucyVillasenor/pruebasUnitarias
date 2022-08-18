//Paso3: Importar la funcionalidad a testear(objeto)

//definir de donde vamos a traer la funcion
const ejercicio1 = require('./ejercicio1');

//comenzamos el testing
//se crea una funcion para revisar la funcion

test('Calcular la hipotenusa de 5,5',()=>{
    expect(ejercicio1.hipotenusa(6,5)).toBe("7.81");
})


test('Calcular la hipotenusa de 2,3',()=>{
    expect(ejercicio1.hipotenusa(2,3)).toBe("3.61");
})

//escenario donde lo que ingresa  sea undefined
test('Indefinido',()=>{
    expect(ejercicio1.hipotenusa("")).toBe("NaN");
})

//Escenario donde no ingresa nada
test('Elemento Vacio',()=>{
    expect(ejercicio1.hipotenusa("")).toBe("NaN");
})
