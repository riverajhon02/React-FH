import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";


describe('Test Archivo 09-Prmesas', () => { 

    test('getHeroeByIdAsync debe retornar un heroe', (done) => { 

        const id = 1;

        getHeroeByIdAsync(id)
            .then(hero =>{

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();

                

            });
    
        
     }) 
     
     
     test('getHeroeByIdAsync debe de obtener un error si el heroe no existe', (done) => { 
        
        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error=>{
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            })
      })

 })