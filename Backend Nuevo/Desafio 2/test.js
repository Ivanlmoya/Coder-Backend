const ProductManager = require('./desafiosArchivos')

async function main(){

    const product = new ProductManager('./productos.txt')

    const productoEjemplo = [{
        title: "titulo1",
        price: 10,
        thumbnail: "link1",
        id:1
    }]

    const productoEjemplo2 = [{
        title: "titulo2",
        price: 20,
        thumbnail: "link2",
        id:3
    }]

    const productoEjemplo3 = [{
        title: "titulo2",
        price: 20,
        thumbnail: "link2",
        id:6
    }]
    console.log("\n");
    let save = await product.addProduct(productoEjemplo)
    let save2 = await product.addProduct(productoEjemplo2)
    let save3 = await product.addProduct(productoEjemplo3)
    console.log("\n");
    console.log('Muestro todos los productos');
    let allProducts = await product.getProducts()
    console.log(allProducts);
    console.log("\n");
    const idToSearch = 1;
    let productById = await product.getProductById(idToSearch)
    console.log(productById);
    console.log("\n");
    const idToEliminate = 2;
    let productByIdEliminate = await product.deleteById(idToEliminate)
    console.log(productByIdEliminate);
    console.log("\n");
    let productActualize = await product.updateProduct(productoEjemplo2 , 1)
    console.log(productActualize);
    console.log("\n");
    let eliminateAllProducts = await product.deleteAll()
    console.log(eliminateAllProducts);
    console.log("\n");
}

main();