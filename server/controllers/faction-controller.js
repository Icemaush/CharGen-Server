const knex = require('../db/knex');

// Get all factions
function getFactions() {
    return knex("wow_factions").select("*");
};

module.exports = { getFactions };

// exports.getFactions = async (req, res) => {
//     var db = connection.connect(databasePath);
//     var sql = 'SELECT * FROM wow_factions';
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
