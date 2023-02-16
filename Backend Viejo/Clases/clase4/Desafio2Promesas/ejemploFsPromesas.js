const fs = require('fs')

async function readFile(){
    try{
        const contenido = await fs.promises.readFile('./test.txt','utf8')
        console.log(contenido);
    } catch (error){
        console.log(error);
    }
}

readFile();