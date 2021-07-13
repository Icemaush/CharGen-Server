const express = require('express');
const cors = require('cors');
const wowApp = express();
const bodyParser = require('body-parser');
wowApp.use(bodyParser.urlencoded({ extended: false }));
wowApp.use(bodyParser.json());
wowApp.use(cors({
    origin: 'http://localhost:3000'
}));

// Require all controllers
const wowControllers = '../controllers/wow/';
const factionController = require(wowControllers + 'faction-controller');
const raceController = require(wowControllers + 'race-controller');
const genderController = require(wowControllers + 'gender-controller');
const classController = require(wowControllers + 'class-controller');
const specController = require(wowControllers + 'spec-controller');
const imageController = require(wowControllers + 'image-controller');
const characterController = require(wowControllers + 'character-controller');

//#region Faction routes
wowApp.get('/wow/factions', async (req, res) => {
    const data = await factionController.getFactions();
    res.status(200).json({ data });
});
//#endregion

//#region Race routes
wowApp.get('/wow/races', async (req, res) => {
    const data = await raceController.getRaces();
    res.status(200).json({ data });
});

wowApp.get('/wow/races/:id', async (req, res) => {
    const data = await raceController.getRacesByFactionId(req.params.id);
    res.status(200).json({ data });
});
//#endregion

//#region Gender routes
wowApp.get('/wow/genders', async (req, res) => {
    const data = await genderController.getGenders();
    res.status(200).json({ data });
});
//#endregion

//#region Class routes
wowApp.get('/wow/classes', async (req, res) => {
    const data = await classController.getClasses();
    res.status(200).json({ data });
});

wowApp.get('/wow/classes/:id', async (req, res) => {
    const data = await classController.getClassesByRaceId(req.params.id);
    res.status(200).json({ data });
});
//#endregion

//#region Spec routes
wowApp.get('/wow/specs', async (req, res) => {
    const data = await specController.getSpecs();
    res.status(200).json({ data });
});

wowApp.get('/wow/specs/:id', async (req, res) => {
    const data = await specController.getSpecsByClassId(req.params.id);
    res.status(200).json({ data });
});
//#endregion

//#region Character routes
wowApp.get('/wow/generate-character', async (req, res) => {
    const data = await characterController.generateCharacter();
    res.status(200).json({ data });
});
//#endregion

//#region Image routes
wowApp.get('/wow/faction-image/:faction', (req, res) => {
    res.sendFile(imageController.getFactionIconPath(req.params.faction));
});
wowApp.get('/wow/race-image/:race/:gender', (req, res) => {
    res.sendFile(imageController.getRaceIconPath(req.params.race, req.params.gender));
});
wowApp.get('/wow/class-image/:class', (req, res) => {
    res.sendFile(imageController.getClassIconPath(req.params.class));
});
wowApp.get('/wow/spec-image/:class/:spec', (req, res) => {
    res.sendFile(imageController.getSpecIconPath(req.params.class, req.params.spec));
});
wowApp.get('/wow/preview-image/:race/:gender/:class', (req, res) => {
    res.sendFile(imageController.getPreviewImagePath(req.params.race, req.params.gender, req.params.class));
});
//#endregion

//#region Errors
// Implement 500 error route
wowApp.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken lol.')
});
  
// Implement 404 error route
wowApp.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.')
});
//#endregion

module.exports = wowApp;
