const express = require('express')

const {Router} =express;

const app = express();

app.use(express.static('public'))


/* Mascotas */

const routerMascotas = new Router();

routerMascotas.use(express.json());
routerMascotas.use(express.urlencoded({extended:true}));

const mascotas = [{nombre: 'animal1' , raza: 'raza' , edad:1
}];

routerMascotas.get('/', (req,res)=>{
    res.send(mascotas);
})

routerMascotas.post('/',(req,res)=>{
    mascotas.push(req.body);
    res.send(req.body);
})

/* Personas */

const routerPersonas = new Router();

routerPersonas.use(express.json());
routerPersonas.use(express.urlencoded({extended:true}));

const personas = [{nombre: "nombre1" , apellido: "apellido1" , edad:11
}];

routerPersonas.get('/', (req,res)=>{
    res.send(personas);
})

routerPersonas.post('/',(req,res)=>{
    personas.push(req.body);
    res.send(req.body);
})

/* Routers */
app.use('/mascotas',routerMascotas);
app.use('/personas',routerPersonas);

/* Server listen */
const PORT = 8080
const server = app.listen(PORT, () => {console.log(`Servidor escuchando en el puerto ${server.address().port}`)})
server.on('error', error => console.log(`Error en servidor ${error}`))