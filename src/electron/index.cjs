const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");
const {
  saveUserData,
  readUserData,
  saveTerminalOutput,
} = require("./file-io.cjs");
let child_process = require("child_process");

function createWindow() {
  const win = new BrowserWindow({
    width: 1050,
    height: 655,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.NODE_ENV !== "development") {
    // Load production build
    win.loadFile(`${__dirname}/../svelte/dist/index.html`);

    //hide menu in production
    win.setMenu(null);
  } else {
    // Load vite dev server page
    win.loadURL("http://localhost:5173/");
  }
  win.webContents.session.setSpellCheckerLanguages(['en-US', 'de']);
}

ipcMain.on("saveMacros", (event, macros) => {
  saveUserData(macros);
});
ipcMain.on("execute-command", (event, command) => {
  // '^' is ignored so that the terminal is not waiting for input. The command is executed in one line
  command = command.replaceAll("^\n", " ")
  child_process.exec(`${command}`, (error, stdout, stderr) => {
    saveTerminalOutput(stdout, stderr);
    if (error) {
      notify(
        "Befehl fehlgeschlagen",
        "Bitte überprüfe, ob du den Befehl richtig eingegeben hast",
      );
      return;
    }
    notify("Makro ausgeführt", "");
  });
});

function notify(title, body) {
  new Notification({
    title: title,
    body: body,
  }).show();
}

app.whenReady().then(() => {
  if (process.platform === "win32") {
    app.setAppUserModelId(app.name);
  }

  createWindow();
  ipcMain.handle("getMacros", readUserData);

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
