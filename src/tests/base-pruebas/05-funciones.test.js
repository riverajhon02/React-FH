import { getUser,getUsuarioActivo} from "../../base-pruebas/05-funciones";


describe('Prueba en 05-Funciones', ()=>{
    test('get User debe retornar un Objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const  user  = getUser();

        expect(testUser).toEqual(user);

     })

     test('getUsuarioActivo debe retornar un Objeto', () => { 
        
        const name = 'Jhon';

        const testUser={
            uid: 'ABC567',
            username: name
        }

        const userE = getUsuarioActivo(name);

        expect(testUser).toEqual(userE)

      })
})