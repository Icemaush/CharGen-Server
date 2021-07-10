const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000/WoWGen-React'
}));
// Require all controllers
const factionController = require('../controllers/faction-controller');
const raceController = require('../controllers/race-controller');
const genderController = require('../controllers/gender-controller');
const classController = require('../controllers/class-controller');
const specController = require('../controllers/spec-controller');
const imageController = require('../controllers/image-controller');
const characterController = require('../controllers/character-controller');

//#region Faction routes
app.get('/factions', async (req, res) => {
    const data = await factionController.getFactions();
    res.status(200).json({ data });
});
//#endregion

//#region Race routes
app.get('/races', async (req, res) => {
    const data = await raceController.getRaces();
    res.status(200).json({ data });
});

app.get('/races/:id', async (req, res) => {
    const data = await raceController.getRacesByFactionId(req.params.id);
    res.status(200).json({ data });
});
//#endregion

//#region Gender routes
app.get('/genders', async (req, res) => {
    const data = await genderController.getGenders();
    res.status(200).json({ data });
});
//#endregion

//#region Class routes
app.get('/classes', async (req, res) => {
    const data = await classController.getClasses();
    res.status(200).json({ data });
});

app.get('/classes/:id', async (req, res) => {
    const data = await classController.getClassesByRaceId(req.params.id);
    res.status(200).json({ data });
});
//#endregion

//#region Spec routes
app.get('/specs', async (req, res) => {
    const data = await specController.getSpecs();
    res.status(200).json({ data });
});

app.get('/specs/:id', async (req, res) => {
    const data = await specController.getSpecsByClassId(req.params.id);
    res.status(200).json({ data });
});
//#endregion

//#region Character routes
app.get('/generate-character', async (req, res) => {
    const data = await characterController.generateCharacter();
    res.status(200).json({ data });
});
//#endregion

//#region Image routes
app.get('/faction-image/:faction', (req, res) => {
    res.sendFile(imageController.getFactionIconPath(req.params.faction));
});
app.get('/race-image/:race/:gender', (req, res) => {
    res.sendFile(imageController.getRaceIconPath(req.params.race, req.params.gender));
});
app.get('/class-image/:class', (req, res) => {
    res.sendFile(imageController.getClassIconPath(req.params.class));
});
app.get('/spec-image/:class/:spec', (req, res) => {
    res.sendFile(imageController.getSpecIconPath(req.params.class, req.params.spec));
});
app.get('/preview-image/:race/:gender/:class', (req, res) => {
    res.sendFile(imageController.getPreviewImagePath(req.params.race, req.params.gender, req.params.class));
});
//#endregion

//#region Errors
// Implement 500 error route
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken lol.')
});
  
// Implement 404 error route
app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.')
});
//#endregion

module.exports = app;
