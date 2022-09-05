import { getImagen } from "../../base-pruebas/11-async-await"

describe('pureubas en 11-async-await', () => { 
    

    test('getImagen debe retornar url de la imagen', async() => { 
        

        const url= await getImagen();
        expect(typeof url).toBe('string');

     })
 })