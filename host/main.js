const { app, BrowserWindow } = require("electron");
const path = require("path");
require("electron-reload")(__dirname);
const screenshot = require("screenshot-desktop");
const io = require("socket.io-client");
const robot = require("robotjs");
const { SERVER_URL } = require("../shared/config");

let win;
let socket;
const sessionCode = "123456"; // You can randomize this later

function createWindow() {
  win = new BrowserWindow({
    width: 300,
    height: 150,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });
  win.loadFile("index.html");

  socket = io(SERVER_URL);
  socket.on("connect", () => {
    console.log("Connected to server");
    socket.emit("register-host", sessionCode);
    win.webContents.send("session-code", sessionCode);
    streamScreen();
  });

  socket.on("mouse", handleMouse);
  socket.on("keyboard", handleKeyboard);
}

app.whenReady().then(createWindow);

function streamScreen() {
  setInterval(async () => {
    try {
      const img = await screenshot({ format: "jpg" });
      const b64 = img.toString("base64");
      socket.emit("screen-data", { code: sessionCode, image: b64 });
    } catch (err) {
      console.error("Screenshot error", err);
    }
  }, 100);
}

function handleMouse({ x, y, button }) {
  const screenSize = robot.getScreenSize();
  const scaledX = Math.floor(x * screenSize.width);
  const scaledY = Math.floor(y * screenSize.height);
  robot.moveMouse(scaledX, scaledY);
  robot.mouseClick(button);
}

function handleKeyboard({ key }) {
  robot.keyTap(key);
}
