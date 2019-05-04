const electron = require('electron');

const {app, BrowserWindow} = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 640,
        height: 480
    });
    win.setMenuBarVisibility(false);
    win.loadURL("https://www.reddit.com");
}

app.on("ready", createWindow);