import {
    options
} from "./options/mysqlDB.js";
import knex from "knex";

const kenxConnection = knex(options);

kenxConnection.schema.createTable('cars', table => {
        table.increments('id')
        table.string('name')
        table.integer('price')
    }).then(() => console.log('tabla creada'))
    .catch((err) => {
        console.log(err);
        throw err;
    })
    .finally(() => {
        kenxConnection.destroy();
    })