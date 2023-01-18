const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    saveMacros: (macros) => ipcRenderer.send('saveMacros', macros),
    getMacros: () => ipcRenderer.invoke('getMacros')
});

