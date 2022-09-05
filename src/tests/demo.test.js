

describe('Prueba <DemoComponet/> ' , ()=>{

   test('Esta prueba no debe de fallar' , ()=>{

      // 1. inicializacion
   
      const message = 'Hola Mundo';
   
      //2. Estimuo
   
      const message2 = message.trim();
   
      //3. Observamos comportamiento
     
      expect(message).toBe(message2);
   
   })

})

