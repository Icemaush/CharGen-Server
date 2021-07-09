const connection = require('../db/knex');
const path = require('path');
const databasePath = path.resolve('db/wowgen.db');

// Get all races
// exports.getRaces = async (req, res) => {
//     var db = connection.connect(databasePath);
//     var sql = 'SELECT * FROM wow_races';
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log('ERROR');
//             throw err;
//         }
//         res.json({
//             message: "success",
//             data: rows
//         });
//     });
//     connection.close(db);
// }

// Get all races by faction ID
// exports.getRacesByFaction = async (req, res) => {
//     var db = connection.connect(databasePath);
//     var sql = 'SELECT r.* FROM wow_races r '
//         + `LEFT JOIN wow_factions_races fr ON fr.race_id = r.id `
//         + `WHERE fr.faction_id = ${req.params['faction_id']}`;
        
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log('ERROR');
//             throw err;
//         }
//         res.json({
//             message: "success",
//             data: rows
//         });
//     });
//     connection.close(db);
// }