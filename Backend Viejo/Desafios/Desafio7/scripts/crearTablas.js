import knex from 'knex'
import config from '../src/config.js'

//------------------------------------------
// productos en MariaDb
const mariaDbClient = knex(config.mariaDb)
    try {
        //Implementar creación de tabla
         await mariaDbClient.schema.dropTableIfExists('articulos');
         await mariaDbClient.schema.createTable('articulos' ,  table => {
            table.increments('id').primary(); //Cada vez que sumas un elemento, el id sube, gracias al increments, eso es para que no se sobreescriban.  
            table.string('title').notNullable(); //Si ponemos .notNullable() al final del ('') podemos hacer que nunca sea null
            table.float('price');
            table.string('thumbnail');
        });
        
        
        //Inserto elementos a modo ejemplo
        const articulos = [
            {title: 'imagenprueba'  ,price: 1200, thumbnail:'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png' },
            {title: 'imagenprueba2', price: 2000, thumbnail: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-128.png'}
    
        ];
        
         await mariaDbClient('articulos').insert(articulos);
        
        console.log('tabla productos en mariaDb creada con éxito')
    } catch (error) {
        console.log('error al crear tabla productos en mariaDb')
        console.log(error)
    } finally {
         await mariaDbClient.destroy();
    }
    
    



//------------------------------------------
// mensajes en SQLite3
const sqliteClient = knex(config.sqlite3)

    try {
        //Implementar creación de tabla
        await sqliteClient.schema.dropTableIfExists('mensajes');
        await sqliteClient.schema.createTable('mensajes', table => {
            table.increments('id').primary();
            table.string('autor').notNullable();
            table.string('hora');
            table.string('texto');
        });

        const mensaje = [
            {autor: 'Base de Datos'  ,hora: "00:00",texto:'BIENVENIDOS!' },
            {autor: 'Administracion', hora: "00:00", texto: 'AQUI PUEDES ESCRIBIR TUS MENSAJES'}
        ];

        await sqliteClient('mensajes').insert(mensaje);

        console.log('tabla mensajes en sqlite3 creada con éxito')
    } catch (error) {
        console.log('error al crear tabla mensajes en sqlite3')
    } finally {
        sqliteClient.destroy() 
    }