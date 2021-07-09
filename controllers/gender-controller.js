const connection = require('../db/knex');
const path = require('path');
const databasePath = path.resolve('db/wowgen.db');

// Get all genders
exports.getGenders = async (req, res) => {
    var db = connection.connect(databasePath);
    var sql = 'SELECT * FROM wow_genders';
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log('ERROR');
            throw err;
        }
        res.json({
            message: "success",
            data: rows
        });
    });
    connection.close(db);
}