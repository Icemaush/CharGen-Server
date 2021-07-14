require('isomorphic-fetch');
const imageController = require('./image-controller');
const baseUrl = 'https://chargen-server.herokuapp.com/wow';

// Generate a random character
exports.generateCharacter = async (req, res) => {
    // Generate all the random parameters 

    // Character data
    var charFaction = await getFaction();
    var charRace = await getRace(charFaction.id);
    var charGender = await getGender();
    var charClass = await getClass(charRace.id);
    var charSpec = await getSpec(charClass.id);
    
    var character = {};
    character.faction = charFaction.name;
    character.race = charRace.name;
    character.gender = charGender.name;
    character.class = charClass.name;
    character.spec = charSpec.name;
    character.factionIconUrl = imageController.getFactionIconUrl(charFaction.name.replace(' ', '').toLowerCase());
    character.raceIconUrl = imageController.getRaceIconUrl(charRace.name.replace(' ', '').toLowerCase(), charGender.name.replace(' ', '').toLowerCase());
    character.classIconUrl = imageController.getClassIconUrl(charClass.name.replace(' ', '').toLowerCase());
    character.specIconUrl = imageController.getSpecIconUrl(charClass.name.replace(' ', '').toLowerCase(), charSpec.name.replace(' ', '').toLowerCase());
    character.previewImageUrl = imageController.getPreviewImageUrl(
        charRace.name.replace(' ', '').toLowerCase(), 
        charGender.name.replace(' ', '').toLowerCase(), 
        charClass.name.replace(' ', '').toLowerCase()
        );

    return character;
}

async function getData(url, variable) {
    const response = await fetch(url + '/' + variable);
    return response.json(); //extract JSON from the http response
}

// Get faction
async function getFaction() {
    const factions = await getData(baseUrl + '/factions', '');
    return factions.data[getRandomIndex(factions.data.length)];
}

// Get race
async function getRace(faction_id) {
    const races = await getData(baseUrl + '/races', faction_id);
    return races.data[getRandomIndex(races.data.length)];
}

// Get gender
async function getGender() {
    const genders = await getData(baseUrl + '/genders', '');
    return genders.data[getRandomIndex(genders.data.length)];
}

// Get class
async function getClass(race_id) {
    const classes = await getData(baseUrl + '/classes', race_id);
    return classes.data[getRandomIndex(classes.data.length)];
}

// Get spec
async function getSpec(class_id) {
    const specs = await getData(baseUrl + '/specs', class_id);
    return specs.data[getRandomIndex(specs.data.length)];
}

function getRandomIndex (arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}