const knex = require('knex');
const path = require('path');
const databasePath = path.resolve('db/wowgen.db');

// Connect to database
const connectedKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: databasePath
    }
});

module.exports = connectedKnex;