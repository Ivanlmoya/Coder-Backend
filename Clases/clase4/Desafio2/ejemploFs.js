const fs = require('fs');

/* const data = fs.readFileSync('./test.txt','utf8');
console.log(data);

fs.writeFileSync('./testWrite.txt','Esto es una prueba de escritura')

fs.appendFileSync('./testWrite.txt' , '\nesto es una prueba de texto agregada') */

/* fs.unlinkSync('./testWrite.txt') */

/* try{
    const data = fs.readFileSync('./asdasdasdasd.txt' , 'utf8')
}catch(error){
    console.log('ingresa aca');
    console.log(error);
} */
try{
let now = new Date()
const data = fs.writeFileSync('./fyh.txt',`${now}`)
}catch(error){
    throw new Error('error de escritura')
}
try{
const read = fs.readFileSync('./fyh.txt','utf8')
console.log(read);
}catch(error){
  throw new Error('error de lectura')
}