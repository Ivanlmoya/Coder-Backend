class ProductManager{

    constructor(){
        this.products = [];
    }

    getProducts = () => {
    return this.products
    }

    addProduct = (product) => {
        const allProducts =  this.getProducts();
        const productById = allProducts.find(p => p.code === product.code);
        if(productById){
            console.log("Producto con id repetido");
            return []
        }

        if (this.products.length === 0) {
            product.code = 1;
        } else {
            product.code = this.products[this.products.length - 1].code + 1;
        }
        
        
        this.products.push(product)
    }

    getProductsById = (id) => {

        const products =  this.getProducts();
        const productById = products.find(p => p.code === id);

        if (!productById) {
            console.log("Producto no encontrado");
            return []
        }
        return productById
    
    }

}

class Product {
    constructor(title, description, price, thumbnail, code ,stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}


const nuevoProducto = new ProductManager();

console.log(`Iniciando Programa`)
console.log(nuevoProducto.getProducts())
console.log(`agregando producto prueba (Este es un producto prueba), precio: 200, Sin imagen ,25`)
nuevoProducto.addProduct(new Product('producto prueba', 'Este es un producto prueba', 100, 'Sin imagen','',10));
nuevoProducto.addProduct(new Product('producto prueba2', 'Este es un producto prueba 2', 200, 'Sin imagen 2','',20))
nuevoProducto.addProduct(new Product('producto prueba3', 'Este es un producto prueba 3', 300, 'Sin imagen 3','',30))
console.log('mostrando todos los productos')
console.log(nuevoProducto.getProducts())
nuevoProducto.addProduct(new Product('producto prueba3', 'Este es un producto prueba 3', 300, 'Sin imagen 3',1,30))
console.log(nuevoProducto.getProducts())
console.log(nuevoProducto.getProductsById(7))