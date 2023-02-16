const {promises:fs } = require('fs')

class Contenedor {

    constructor(ruta){
        this.ruta = ruta;
    }

    async save (obj){

    const products = await this.getAll();

    let lastID = products.length;
    
    lastID >0 ? lastID = lastID :lastID = 0

    obj.forEach(e => { e.id =  lastID +1 ;})

    products.push(...obj);
    console.log(products);

    try{
        fs.writeFile(this.ruta,JSON.stringify(products , null , 2) )
        console.log("se agrego el item correctamente");
    }catch(error){
        console.log('hubo un error en getALL')
        return [];
    }


    }

    async getById (id){
        const products = await this.getAll();
        const productById = products.find(p => p.id === id);
        console.log(`Muestro el producto id ${id}`);
        return productById;
    }

    async getAll (){
        try{
            const products = await fs.readFile(this.ruta , 'utf-8')
            return JSON.parse(products);
            
        }catch(error){
            console.log('hubo un error en getALL')
            return [];
        }
    }

    async deleteById (id){
        try{
        const products = await this.getAll();
        const productById = products.filter(p => p.id !== id);
        fs.writeFile('productos.txt',JSON.stringify(productById , null , 2))
        console.log(`Se elimino el id ${id} Correctamente`)
        return productById;
        }catch(error){
        console.log('hubo un error en deleteById')
        return [];
        }
    }

    async deleteAll (){
        try{
        const products = await this.getAll();
        products.splice(0, products.length);
        fs.writeFile('productos.txt',JSON.stringify(products , null , 2))
        console.log('Se eliminaron los datos Correctamente')
        return products;
        }catch(error){
        console.log('hubo un error en deleteById')
        return [];
        }
    }
}

module.exports = Contenedor;