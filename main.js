const {app,BrowserWindow} = require('electron');
const isDev = require("electron-is-dev");

let mainWindow;
app.on('ready',()=>{
    const urlLocation = isDev?"http://localhost:3000":"urlReal";
    mainWindow = new BrowserWindow({
        width:1440,
        height:765,
        webPreferences:{
            nodeIntegration:true,
            enableRemoteModule:true 
        },
        show:false,
            backgroundColor:'#efefef'
    })
    mainWindow.loadURL(urlLocation);
    mainWindow.once('ready-to-show',()=>{
       mainWindow.show();
    })
})