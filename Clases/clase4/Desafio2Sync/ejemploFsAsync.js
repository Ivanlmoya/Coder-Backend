const fs = require('fs');

/* fs.readFile('./test.txt','utf8' ,(error, contenido) =>{
    if(error){
        throw new Error('Error de lectura')
    }
    console.log('lectura exitosa');
    console.log(contenido);
})

fs.writeFile('./testWriteAsunc.txt','texto de escritura' ,(error) =>{
    if(error){
        throw new Error('Error de escritura')
    }
    console.log('Escritura exitosa');
}) */

/* fs.mkdir('./carpetaNueva', error =>{
    if(error){
        throw new Error('Error de creacion de directorio')
    }
    console.log('Creacion de directorio exitosa');
}) */

fs.readdir('./', (error , nombres) =>{
    if(error){
        throw new Error('Error de lectura de directorio')
    }
    console.log('Lectura de directorio exitosa');
    console.log(nombres);
})