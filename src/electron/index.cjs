const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { saveUserData, readUserData, importMacros, exportMacros } = require("./file-io.cjs");

function createWindow() {
  const win = new BrowserWindow({
    width: 1050,
    height: 655,
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

ipcMain.on('exportMacros', (event, macros) => {
  exportMacros(macros);
});

app.whenReady().then(() => {
  createWindow();
  ipcMain.handle('getMacros', readUserData);

  ipcMain.handle("importMacros", importMacros)

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
