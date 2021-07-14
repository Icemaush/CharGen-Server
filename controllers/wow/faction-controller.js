const knex = require('../../db/wow/knex');

// Get all factions
function getFactions() {
    return knex("wow_factions").select("*");
};

module.exports = { getFactions };
