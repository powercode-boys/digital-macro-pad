const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('electronAPI', {
    saveMacros: (macros) => ipcRenderer.send('saveMacros', macros),
    getMacros: () => ipcRenderer.invoke('getMacros'),
    import: () => ipcRenderer.invoke("importMacros"),
    export: (macros) => ipcRenderer.send("exportMacros", macros),
    executeCommand: (command) => ipcRenderer.send('execute-command', command)
});
