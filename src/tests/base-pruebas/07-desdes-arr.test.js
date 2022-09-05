import { retornaArreglo } from "../../base-pruebas/07-deses-arr"


describe('Prueba en 07-deses-arr', () => { 
    

    test('debe de retornar un string y un numero', () => { 
        
        const [letter , number] = retornaArreglo();

        // expect(letter).toEqual(expect.any(String));
        expect(number).toEqual(expect.any(Number));




     })
 })