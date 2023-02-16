const productos = [ 
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }]


function getNombre(productos){

    const nombreDeproductos = productos.map(productos =>productos.nombre)
    return nombreDeproductos.join(',')

}

function getTotal(productos){
    
    const totalDeproductos = productos.map(productos => productos.precio).reduce((a,b)=>a+b,0)
    return totalDeproductos

}

function getPromedio(productos){
    
    return  getTotal(productos)/ productos.length

}


function getProductMinPrice(productos){
    if(productos.length ===0){
        throw new Error('no se puede calcular el minimo de un arreglo vacio')
    }

    let min = productos[0].precio;
    let prod = productos[0];

    for(const producto of productos){
        if (producto.precio < min){
            min = producto.precio;
            prod = producto;
        }
    }
    return prod;
}

function getProductMaxPrice(productos){
    if(productos.length ===0){
        throw new Error('no se puede calcular el maximo de un arreglo vacio')
    }
    let max = productos[0].precio;
    let prod = productos[0];
    for(const producto of productos){
        if (producto.precio > max){
            max = producto.precio;
            prod = producto;
        }
    }
    return prod;
}


const info = {
    productoNombre:getNombre(productos),
    productoTotal:getTotal(productos),
    promedio:getPromedio(productos),
    productoPrecioMinimo: getProductMinPrice(productos),
    productoPrecioMaximo:getProductMaxPrice(productos)
}
console.log(info);