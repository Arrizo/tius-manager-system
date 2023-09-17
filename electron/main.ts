/*
 * @Author: chenzechao
 * @Date: 2023-09-14 22:28:30
 * @LastEditTime: 2023-09-17 18:28:34
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/electron/main.ts
 */
import { app, BrowserWindow,ipcMain } from 'electron'
import { join } from 'path'
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload: join(__dirname,'../electron/preload.js') 
    }
  })
  win.webContents.openDevTools()
  if(app.isPackaged){
    win.loadFile(join(__dirname,'../dist/index.html'))
  }else{
    let url = "http://localhost:5173"; // 本地启动的vue项目路径。注意：vite版本3以上使用的端口5173；版本2用的是3000
    win.loadURL(url);
  }
  setTimeout(()=>{
    win.webContents.send('like', { age: 3232 })
  },4000)
}
app.whenReady().then(()=>{
  createWindow()
  app.on('activate',()=>{
    if(BrowserWindow.getAllWindows().length==0) createWindow()
  })
})
ipcMain.on('keyName',(data,event)=>{
  console.log(data,event)
})
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});