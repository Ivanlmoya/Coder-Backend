import express from 'express'

import { Server as HttpServer } from 'http'
import { Server as Socket } from 'socket.io'

import ContenedorSQL from './contenedores/ContenedorSQL.js' //A partir de ahora ya no interactuamos con el filesystem sino directo con el sql asi que usamos el contenedorSQL
// import ContenedorArchivo from './contenedores/ContenedorArchivo.js'
// import ContenedorMemoria from './contenedores/ContenedorMemoria.js'

import config from './config.js' //importamos las configuraciones del archivo config

//--------------------------------------------
// instancio servidor, socket y api

const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

const productosApi = new ContenedorSQL(config.mariaDb, 'articulos'); //Como primer parametro pasamos la configuracion y como segyundo parametro pasamos el nombre de la tabla
const mensajesApi = new ContenedorSQL(config.sqlite3, 'mensajes');

// const productosApi = new ContenedorArchivo('productos');
// const mens = new ContenedorMemoria('mensajes');
//--------------------------------------------
// configuro el socket


io.on('connection', async  socket => {
    console.log('Nuevo cliente conectado'); 
     const productos = await productosApi.getAll();
     const messages = await mensajesApi.getAll();
 
    socket.emit('messages' , messages);
     console.log(messages);
     
    socket.on('new-message', async mensajes => {
     let horaActual = new Date().getHours();
     let minActual = new Date().getMinutes();
     mensajes.hora = horaActual + ':' + minActual;
     messages.push(mensajes);
     await mensajesApi.save(mensajes);
     io.sockets.emit('messages', messages);
     await mensajesApi.desconectar();
    });
 
    
 
    //productos 
    socket.emit('productos' , productos);
    console.log(productos);
    
    socket.on('new-producto', async producto => {
         productos.push(producto);
         await productosApi.save(producto)
         io.sockets.emit('productos', productos);
         await productosApi.desconectar();
    });
    
    
 });

//--------------------------------------------
// agrego middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//--------------------------------------------
// inicio el servidor

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))