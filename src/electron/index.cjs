const { app, BrowserWindow } = require("electron");
const fs = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  if (process.env.NODE_ENV !== "development") {
    // Load production build
    win.loadFile(`${__dirname}/../svelte/dist/index.html`);
  } else {
    // Load vite dev server page
    win.loadURL("http://localhost:5173/");
  }
}

fs.writeFile(app.getPath('userData') + '\\test.txt', 'example text', function (err) {
  if (err) throw err;
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
