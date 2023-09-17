"use strict";
const electron = require("electron");
const path = require("path");
const createWindow = () => {
  const win = new electron.BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload: path.join(__dirname, "../electron/preload.js")
    }
  });
  win.webContents.openDevTools();
  if (electron.app.isPackaged) {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  } else {
    let url = "http://localhost:5173";
    win.loadURL(url);
  }
  setTimeout(() => {
    win.webContents.send("like", { age: 3232 });
  }, 4e3);
};
electron.app.whenReady().then(() => {
  createWindow();
  electron.app.on("activate", () => {
    if (electron.BrowserWindow.getAllWindows().length == 0)
      createWindow();
  });
});
electron.ipcMain.on("keyName", (data, event) => {
  console.log(data, event);
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
