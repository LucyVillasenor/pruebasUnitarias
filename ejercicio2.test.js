//3.- Importar
const ejercicio2 = require('./ejercicio2')

//Escenario favorable
test('Numero Reverso',()=>{
    expect(ejercicio2.reverso(2827354)).toBe("4,5,3,7,2,8,2");
})

//escenario donde lo que ingresa  sea undefined
test('Indefinido',()=>{
    expect(ejercicio2.reverso("")).toBe("");
})

//Escenario donde no ingresa nada
test('Elemento Vacio',()=>{
    expect(ejercicio2.reverso("")).toBe("");
})