
const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'webmap102',
    password: '123456',
    port: 5433,
  })

client.connect()

client.query('SELECT NOW()', (err, res) => {
    if(err) {
        console.log("db not connected");
    } else {
        console.log("db is connected")
    }
})

module.exports = client