const Contenedor = require('./desafioArchivoss')

async function main(){

    const product = new Contenedor('./productos.txt')

    const productoEjemplo = [{
        title: "titulo2",
        price: 20,
        thumbnail: "link2",
        id:2
    }]

    let save = await product.save(productoEjemplo)
    console.log("\n");
    console.log('Muestro todos los productos');
    let allProducts = await product.getAll()
    console.log(allProducts);
    console.log("\n");
    const idToSearch = 1;
    let productById = await product.getById(idToSearch)
    console.log(productById);
    console.log("\n");
    const idToEliminate = 2;
    let productByIdEliminate = await product.deleteById(idToEliminate)
    console.log(productByIdEliminate);
    console.log("\n");
    let eliminateAllProducts = await product.deleteAll()
    console.log(eliminateAllProducts);
    console.log("\n");
}

main();