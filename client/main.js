const { app, BrowserWindow } = require("electron");
const path = require("path");
const io = require("socket.io-client");
const { SERVER_URL } = require("../shared/config");

let win, socket;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });

  win.loadFile("index.html");

  socket = io(SERVER_URL);

  socket.on("connect", () => {
    console.log("Connected");
  });

  socket.on("screen-data", (data) => {
    win.webContents.send("screen-data", data);
  });

  socket.on("session-joined", (ok) => {
    if (!ok) win.webContents.send("invalid-code");
  });
}

app.whenReady().then(createWindow);
