import { options} from "./options/mysqlDB.js";
import knex from "knex";

const kenxConnection = knex(options);


kenxConnection('cars').where('id', 5)
    .delete()
    .then(() => console.log('Registro Eliminado'))
    .catch((err) => {
        console.log(err);
        throw err;
    })
    .finally(() => {
        kenxConnection.destroy();
    })