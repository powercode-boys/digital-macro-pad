const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { saveUserData, readUserData } = require("./file-io.cjs");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  
  win.setMenu(null)

  if (process.env.NODE_ENV !== "development") {
    // Load production build
    win.loadFile(`${__dirname}/../svelte/dist/index.html`);
  } else {
    // Load vite dev server page
    win.loadURL("http://localhost:5173/");
  }
}

ipcMain.on('saveMacros', (event, macros) => {
  saveUserData(macros);
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
