const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { saveUserData, readUserData } = require("./file-io.cjs");
let child_process = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 1050,
    height: 605,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  if (process.env.NODE_ENV !== "development") {
    // Load production build
    win.loadFile(`${__dirname}/../svelte/dist/index.html`);

    //hide menu in production
    win.setMenu(null)
  } else {
    // Load vite dev server page
    win.loadURL("http://localhost:5173/");
  }
}

ipcMain.on('saveMacros', (event, macros) => {
  saveUserData(macros);
});
ipcMain.on('execute-command', (event, command) => {
  child_process.exec(command);
});



app.whenReady().then(() => {
  createWindow();
  ipcMain.handle('getMacros', readUserData);

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
