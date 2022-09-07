import { options} from "./options/mysqlDB.js";
import knex from "knex";

const kenxConnection = knex(options);


kenxConnection.from('cars').select('*')
    .where('price', '>','5000')
    .orderBy('price', 'desc')
    .then((rows) => {
        for(let row of rows) {
            console.log(`${row['id']} - ${row['name']} - ${row['price']} `)
    }})
    .catch((err) => {
        console.log(err);
        throw err;
    })
    .finally(() => {
        kenxConnection.destroy();
    })