const electron = require('electron');

const {app, BrowserWindow} = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 900,
        height: 1600
    });
    win.setMenuBarVisibility(false);
    win.loadURL("https://www.reddit.com");
}

app.on("ready", createWindow);