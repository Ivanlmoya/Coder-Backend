/* export const options ={
    client: 'mysql',
    connection:{
        host:'127.0.0.1',
        user:'root',
        password:'',
        database:'ecommerce'
    }
} */

export const options ={
    client: 'sqlite3',
    connection:{
        filename: './DB/mydb.sqlite'
    }
}