const knex = require('../../db/wow/knex');

// Get all genders
function getGenders() {
    return knex("wow_genders").select("*");
};

module.exports = { getGenders };
