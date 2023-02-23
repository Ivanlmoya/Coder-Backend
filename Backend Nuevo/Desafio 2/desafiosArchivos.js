const {promises:fs } = require('fs')

class ProductManager {

    constructor(path){
        this.path = path;
    }

    async addProduct (obj){

    const products = await this.getProducts();

    let lastID = products.length;
    
    lastID >0 ? lastID = lastID :lastID = 0

    obj.forEach(e => { e.id =  lastID +1 ;})

    products.push(...obj);
    console.log(products);

    try{
        fs.writeFile(this.path,JSON.stringify(products , null , 2) )
        console.log("se agrego el item correctamente");
    }catch(error){
        console.log('hubo un error en getProducts')
        return [];
    }


    }

    async getProductById (id){
        const products = await this.getProducts();
        const productById = products.find(p => p.id === id);
        console.log(`Muestro el producto id ${id}`);
        return productById;
    }

    async getProducts (){
        try{
            const products = await fs.readFile(this.path , 'utf-8')
            return JSON.parse(products);
            
        }catch(error){
            console.log('hubo un error en getProducts')
            return [];
        }
    }

    async deleteById (id){
        try{
        const products = await this.getProducts();
        const productById = products.filter(p => p.id !== id);
        fs.writeFile('productos.txt',JSON.stringify(productById , null , 2))
        console.log(`Se elimino el id ${id} Correctamente`)
        return productById;
        }catch(error){
        console.log('hubo un error en deleteById')
        return [];
        }
    }

    async updateProduct(prod, id) {
        const products = await this.getProducts();
        let productById = products.filter(p => p.id !== id);
        const oldProduct = products.find(p => p.id === id);
        console.log(`Muestro el producto anterior ${JSON.stringify(oldProduct)} `);
        productById.push(prod);
        productById.sort((a, b) => (a.id > b.id ? 1 : -1))
        try{
        fs.writeFile(this.path,JSON.stringify(productById , null , 2) )
        console.log(`Muestro el producto actualizado ${JSON.stringify(prod)}`);
        return productById;
        }catch(error){
            console.log('hubo un error en actualizar')
            return [];
        }
        
    }


    async deleteAll (){
        try{
        const products = await this.getProducts();
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

module.exports = ProductManager;