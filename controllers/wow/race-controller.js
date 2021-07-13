const knex = require('../../db/knex');

// Get all races
function getRaces() {
    return knex.select('*').from('wow_races');
};

// Get races by faction ID
function getRacesByFactionId(factionId) {
    return knex.select('r.*').from('wow_races as r').leftJoin('wow_factions_races as fr', 'r.id', 'fr.race_id').where('fr.faction_id', factionId);
};

module.exports = {
    getRaces,
    getRacesByFactionId
}