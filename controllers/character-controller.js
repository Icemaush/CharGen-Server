const connection = require('../db/knex');
const path = require('path');
const databasePath = path.resolve('db/wowgen.db');

// Generate a random character
exports.generateCharacter = async (req, res) => {

    // Generate all the random parameters

    // var charFaction = getFaction();
    // var charRace = 
    // var charGender = 
    // var charClass = 
    // var charSpec = 

    res.json({
        message: "success",
        data: [{
            faction: getFaction(),
            // race: charRace,
            // gender: charGender,
            // class: charClass,
            // spec: charSpec
        }]
    });
    // var db = connection.connect(databasePath);
    // var sql = 'SELECT c.* FROM wow_classes c '
    //     + `LEFT JOIN wow_races_classes rc ON rc.class_id = c.id `
    //     + `WHERE rc.race_id = ${req.params['race_id']}`;
        
    // db.all(sql, [], (err, rows) => {
    //     if (err) {
    //         console.log('ERROR');
    //         throw err;
    //     }
    //     res.json({
    //         message: "success",
    //         data: rows
    //     });
    // });
    // connection.close(db);
}

// Get faction
function getFaction() {
    var sql = 'SELECT f.name FROM wow_factions f';
    var result = connection.query(sql);
    console.log(result);
    // var result = [];
    // db.each(sql, [], (err, rows) => {
    //     if (err) {
    //         console.log('ERROR');
    //         throw err;
    //     }
    //     result.push(rows);
    // });

    // connection.close(db);
    // console.log(result);
    // return result;
}

function getIndex (arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}