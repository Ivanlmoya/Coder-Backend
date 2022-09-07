import { options} from "./options/mysqlDB.js";
import knex from "knex";

const kenxConnection = knex(options);

const cars = [{name: 'Audi',price: 123123}, 
{name: 'Mercedes',price: 234234234}, 
{ name: 'Volkswagen',price: 2344}, 
{name: 'Mazda', price: 23424324}, 
{name: 'Ferrari',price: 234234243}, ]

kenxConnection('cars').insert(cars)
    .then(() => console.log('tabla creada'))
    .catch((err) => {
        console.log(err);
        throw err;
    })
    .finally(() => {
        kenxConnection.destroy();
    })