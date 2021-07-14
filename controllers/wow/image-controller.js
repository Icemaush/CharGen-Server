const baseUrl = 'https://chargen-server.herokuapp.com/wow';
const path = require('path');
const baseImagePath = 'resources/wow/images/';

//#region Faction images
// Get faction icon path
function getFactionIconPath(faction) {
    const filePath = path.resolve(baseImagePath + 'factions/' + faction + '.png');
    return filePath;
};

// Get faction icon url
function getFactionIconUrl(faction) {
    return baseUrl + '/faction-image/' + faction;
}
//#endregion

//#region Race images
// Get race icon path
function getRaceIconPath(race, gender) {
    const filePath = path.resolve(baseImagePath + 'races/' + race + '_' + gender + '.png');
    return filePath;
};

// Get race icon url
function getRaceIconUrl(race, gender) {
    return baseUrl + '/race-image/' + race + '/' + gender;
}
//#endregion

//#region Class images
// Get class icon path
function getClassIconPath(className) {
    const filePath = path.resolve(baseImagePath + 'classes/' + className + '.png');
    return filePath;
};

// Get class icon url
function getClassIconUrl(className) {
    return baseUrl + '/class-image/' + className;
}
//#endregion

//#region Spec images
// Get spec icon path
function getSpecIconPath(className, spec) {
    const filePath = path.resolve(baseImagePath + 'specs/' + className + '_' + spec + '.png');
    return filePath;
};

// Get spec icon url
function getSpecIconUrl(className, spec) {
    return baseUrl + '/spec-image/' + className + '/' + spec;
}
//#endregion

//#region Preview images
// Get preview image path
function getPreviewImagePath(race, gender, className) {
    const filePath = path.resolve(baseImagePath + '/armor/T1/' + race + '_' + gender + '_' + className + '.png');
    return filePath;
};

// Get preview image url
function getPreviewImageUrl(race, gender, className) {
    return baseUrl + '/preview-image/' + race + '/' + gender + '/' + className;
}
//#endregion


module.exports = {
    getFactionIconPath, getFactionIconUrl,
    getRaceIconPath, getRaceIconUrl, 
    getClassIconPath, getClassIconUrl,
    getSpecIconPath, getSpecIconUrl,
    getPreviewImagePath, getPreviewImageUrl
}