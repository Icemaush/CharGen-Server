const knex = require('../db/knex');

// Get all specs
function getSpecs() {
    return knex.select('*').from('wow_specs');
};

// Get specs by class ID
function getSpecsByClassId(classId) {
    return knex.select('s.*').from('wow_specs as s').leftJoin('wow_classes_specs as cs', 's.id', 'cs.spec_id').where('cs.class_id', classId);
};

module.exports = {
    getSpecs,
    getSpecsByClassId
}
