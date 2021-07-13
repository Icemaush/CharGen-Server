const knex = require('../db/knex');

// Get all classes
function getClasses() {
    return knex.select('*').from('wow_classes');
};

// Get classes by race ID
function getClassesByRaceId(raceId) {
    return knex.select('c.*').from('wow_classes as c').leftJoin('wow_races_classes as rc', 'c.id', 'rc.class_id').where('rc.race_id', raceId);
};

module.exports = {
    getClasses,
    getClassesByRaceId
}
