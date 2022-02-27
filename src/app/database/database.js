const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'S1ssala23',
        database: 'catalogoDB'
    }
});

module.exports = knex;