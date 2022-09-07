const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

const messages = [
    { author: "Alejandro", text: "Hola!!, que tal" },
    { author: "Jean", text: "Muy bien! y tú" },
    { author: "Facundo", text: "Genial!!" }
];

io.on('connection', socket => {
    console.log('Nuevo cliente conectado');
    //Este evento carga el historial de mensajes cuando un nuevo cliente se conecta
    socket.emit('messages', messages);

    socket.on('new-message', data => {
        messages.push(data);
        //Este evento envía un nuevo mensaje a todos los clientes que estén conectado en ese momento
        io.sockets.emit('messages', messages);
    });
});

const PORT = 8080;

const connectedServer = httpServer.listen(PORT, () => console.log('Server is running'))

connectedServer.on(
    'error', error => console.log(`Error en servidor ${error}`)
)

