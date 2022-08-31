const { promises: fs } = require('fs')

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = ruta;
    }

    async save(elem) {
        let productLength = await this.getAll()
        if (productLength.length > 0) {
            try {
                let products = await this.getAll()
                let newLastItem = products[products.length - 1].id + 1;
                elem.id = newLastItem;
                elem.timestamp = Date.now()
                products.push(elem)
                await fs.writeFile(this.ruta, JSON.stringify(products))
                return elem.id;
            } catch (error) {
                throw new Error('Error al guardar')
            }

        } else {
            elem.id = 1;
            elem.timestamp = Date.now();
            let newProduct = [];
            newProduct.push(elem)
            try {
                await fs.writeFile(this.ruta, JSON.stringify(newProduct))
                return elem.id

            } catch (error) {
                throw new Error('Error al guardar')
            }
        }
    }

    async getById(id) {
        const products = await this.getAll();
        let foundById = products.find(product => product.id == id);
        return foundById;
    }

    async getAll() {
        try {
            let products = await fs.readFile(this.ruta, 'utf-8');
            return JSON.parse(products);
        } catch (error) {
            return [];
        }
    }

    async deleteById(id) {
        let products = await this.getAll();
        let productToDelete = products.findIndex(product => product.id === id);
        products.splice(productToDelete, 1);
        await fs.writeFile(this.ruta, JSON.stringify(products));
    }

    async deleteAll() {
        await fs.unlink(this.ruta);
    }

    async actualizar(elem, id) {
        const elemt = await this.getAll();
        let productToUpdate = elemt.findIndex(p => p.id === id);
        elemt[productToUpdate] = elem
        await fs.writeFile(this.ruta, JSON.stringify(elemt))
    }
}

module.exports = ContenedorArchivo