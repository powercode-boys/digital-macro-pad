const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");
const userDataPath = path.join(app.getPath('userData'), 'userData.json');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  if (process.env.NODE_ENV !== "development") {
    // Load production build
    win.loadFile(`${__dirname}/../svelte/dist/index.html`);
  } else {
    // Load vite dev server page
    win.loadURL("http://localhost:5173/");
  }
}

ipcMain.on('saveMacros', (event, macros) => {
  saveMacros(macros);
});

function saveMacros(macros) {
    fs.writeFileSync(userDataPath, JSON.stringify(macros));
}
function readJSON() {
    return fs.readFileSync(userDataPath, "utf8");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
