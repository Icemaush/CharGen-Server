const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Require all controllers
const factionController = require('../controllers/faction-controller');
const raceController = require('../controllers/race-controller');
const genderController = require('../controllers/gender-controller');
const classController = require('../controllers/class-controller');
const specController = require('../controllers/spec-controller');
const characterController = require('../controllers/character-controller');

// Set routes
// Faction routes
app.get('/factions', async (req, res) => {
    const data = await factionController.getFactions();
    res.status(200).json({ data });
});


module.exports = app;
