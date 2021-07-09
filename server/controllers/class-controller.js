const connection = require('../db/knex');
const path = require('path');
const databasePath = path.resolve('db/wowgen.db');

// Get all classes
exports.getClasses = async (req, res) => {
    var db = connection.connect(databasePath);
    var sql = 'SELECT * FROM wow_classes';
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

// Get all classes by race
exports.getClassesByRace = async (req, res) => {
    var db = connection.connect(databasePath);
    var sql = 'SELECT c.* FROM wow_classes c '
        + `LEFT JOIN wow_races_classes rc ON rc.class_id = c.id `
        + `WHERE rc.race_id = ${req.params['race_id']}`;
        
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