const {app} = require("electron");
const path = require("path");
const fs = require("fs");
const userDataPath = path.join(app.getPath('userData'), 'userData.json');

module.exports.saveUserData = (macros) => {
    fs.writeFileSync(userDataPath, JSON.stringify(macros));
}
module.exports.readUserData = () => {
    try {
        return JSON.parse(fs.readFileSync(userDataPath, "utf8"));
    } catch (e) {
        fs.writeFileSync(userDataPath, "[]");
        return [];
    }
}