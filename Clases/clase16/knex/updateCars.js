import { options} from "./options/mysqlDB.js";
import knex from "knex";

const kenxConnection = knex(options);


kenxConnection.from('cars').where('id', 1)
    .update({price: 5001})
    .then(() => console.log('Registro actualizado'))
    .catch((err) => {
        console.log(err);
        throw err;
    })
    .finally(() => {
        kenxConnection.destroy();
    })