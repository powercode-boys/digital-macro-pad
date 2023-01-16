const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");

const macro = {
  title: 'Example Title',
  description: 'Example Description',
  command: 'Example Command'
};

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

function createJSON() {
    fs.writeFileSync(path.join(app.getPath('userData'), 'test.json'), JSON.stringify(macro));
}

function readJSON() {
    return fs.readFileSync(path.join(app.getPath('userData'), "test.json"), "utf8");
}

app.whenReady().then(() => {
  createJSON();
  console.log(readJSON());
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
