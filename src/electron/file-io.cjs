const { app, dialog } = require("electron");
const path = require("path");
const fs = require("fs");
const userDataPath = path.join(app.getPath("userData"), "userData.json");

module.exports.saveUserData = (macros) => {
  fs.writeFileSync(userDataPath, JSON.stringify(macros), "utf8");
};
module.exports.readUserData = () => {
  try {
    return JSON.parse(fs.readFileSync(userDataPath, "utf8"));
  } catch (e) {
    fs.writeFileSync(userDataPath, "[]");
    return [];
  }
};

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
