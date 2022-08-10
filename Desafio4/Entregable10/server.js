const express = require('express')
const { Router } = express
const ProductosApi = require('./Api/productos')

// router de productos

const productosApi = new ProductosApi('./Api/productos.txt')

const productosRouter = new Router()

productosRouter.use(express.json())
productosRouter.use(express.urlencoded({ extended: true }))

//rutas usando productosRouter

productosRouter.get('/', async(req, res) => {
    const todosProductos = await  productosApi.listarAll()
    res.send(todosProductos);
});

productosRouter.get('/:pos', async(req, res) => {
    const { pos } = req.params;
    const producto = await productosApi.listar(parseInt(pos))
    producto ? res.send(producto) :res.send(`no se encontro el producto con id ${pos}`);
});

productosRouter.post('/', async(req, res) => {
    const  product  = req.body;
    const producto = await productosApi.guardar(product)
    const todosProductos = await  productosApi.listarAll()
    res.send(todosProductos);
});


productosRouter.put('/:pos', async(req, res) => {
    const {pos} = req.params;
    const  product  = req.body;
    const producto = await productosApi.actualizar(product,parseInt(pos))
    producto ? res.send(producto) :res.send(`no se encontro el producto con id ${pos}`);
});


productosRouter.delete('/:pos', async(req, res) => {
    const { pos } = req.params;
    const producto = await productosApi.borrar(parseInt(pos))
    producto ? res.send(producto) :res.send(`no se encontro el producto con id ${pos}`);
})

// servidor

const app = express()
app.use(express.static('public'))
app.use('/api/productos', productosRouter)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))