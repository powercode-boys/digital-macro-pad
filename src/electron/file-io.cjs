const {app} = require("electron");
const path = require("path");
const fs = require("fs");
const USER_DATA_PATH = path.join(app.getPath('userData'), 'userData.json');
const TERMINAL_OUTPUT_PATH = path.join(app.getPath('userData'), 'terminalOutput.txt');

module.exports.saveUserData = (macros) => {
    fs.writeFileSync(USER_DATA_PATH, JSON.stringify(macros));
}
module.exports.readUserData = () => {
    try {
        return JSON.parse(fs.readFileSync(USER_DATA_PATH, "utf8"));
    } catch (e) {
        fs.writeFileSync(USER_DATA_PATH, "[]");
        return [];
    }
}
module.exports.saveTerminalOutput = (stdout, stderr) => {
    if(stderr) return fs.writeFileSync(TERMINAL_ERROR_PATH, stderr);
    fs.writeFileSync(TERMINAL_OUTPUT_PATH, stdout);
}