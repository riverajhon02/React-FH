import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"


describe('Evaluando 08-imp-exp ', () => { 
    
    test('getHeroeById debe retornar un heroe por su id', () => { 
        
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({id: 1,name: 'Batman',owner: 'DC'});

     });


     test('getHeroeById debe retornar undefine', () => { 
        
        const id = 100.;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();

     })

     //Tarea


     test('getHeroesByOwner debe retornar heroes DC', () => { 
        
       
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toEqual(3);

      })

      test('getHeroesByOwner debe retornar heroes Marvel', () => { 
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toEqual(2);

       })


 })