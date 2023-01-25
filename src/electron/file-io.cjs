const { app, dialog } = require("electron");
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
    if(stderr) return fs.writeFileSync(TERMINAL_OUTPUT_PATH, stderr);
    fs.writeFileSync(TERMINAL_OUTPUT_PATH, stdout);
}

module.exports.importMacros = async () => {
  const res = await dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [{ name: "Makros", extensions: ["dmacro"] }],
  });
  if (res.filePaths.length > 0) {
    const warn = await dialog.showMessageBox({
      type: "warning",
      message:
        "Mit dem Importieren von Makros werden deine bestehenden Makros überschrieben. Trotzdem Makros importieren?",
      buttons: ["Importieren", "Abbrechen"],
      noLink: true,
    });
    if (warn.response === 1) return { error: true, data: null };
    return {
      error: false,
      data: JSON.parse(fs.readFileSync(res.filePaths[0], "utf8")),
    };
  }
  return { error: true, data: null };
};

module.exports.exportMacros = async (macros) => {
  const res = await dialog.showSaveDialog({
    properties: ["showOverwriteConfirmation"],
    filters: [{ name: "Makros", extensions: ["dmacro"] }],
  });
  if (res.filePath)
    fs.writeFileSync(res.filePath, JSON.stringify(macros), "utf8");
};
