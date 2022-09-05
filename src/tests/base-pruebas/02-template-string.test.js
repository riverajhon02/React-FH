import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Pruebas en 02 Template String', () => {  

    test('getSaludo debe retornar Hola Fernando ', () => { 

        const name = "Fernando";
        const messaje = getSaludo(name);

        expect(messaje).toBe(`Hola ${name}!!!!`);



     })





})