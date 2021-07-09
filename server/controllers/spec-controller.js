const connection = require('../db/knex');
const path = require('path');
const databasePath = path.resolve('db/wowgen.db');

// Get all specs
exports.getSpecs = async (req, res) => {
    var db = connection.connect(databasePath);
    var sql = 'SELECT * FROM wow_specs';
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

// Get all specs by class
exports.getSpecsByClass = async (req, res) => {
    var db = connection.connect(databasePath);
    var sql = 'SELECT s.* FROM wow_specs s '
        + `LEFT JOIN wow_classes_specs cs ON cs.spec_id = s.id `
        + `WHERE cs.class_id = ${req.params['class_id']}`;
        
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