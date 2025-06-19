// server/index.js
const http = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Remote Desktop WebSocket Server running.");
});
const io = new Server(server, {
  cors: { origin: "*" },
});

const sessions = {}; // sessionCode -> hostSocketId

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("register-host", (code) => {
    sessions[code] = socket.id;
    console.log(`Host registered with code ${code}`);
  });

  socket.on("join-session", (code) => {
    const hostId = sessions[code];
    if (hostId) {
      socket.join(code);
      socket.emit("session-joined", true);
      console.log(`Client joined session ${code}`);
    } else {
      socket.emit("session-joined", false);
    }
  });

  socket.on("screen-data", ({ code, image }) => {
    socket.to(code).emit("screen-data", image);
  });

  socket.on("mouse", ({ code, event }) => {
    const hostId = sessions[code];
    if (hostId) io.to(hostId).emit("mouse", event);
  });

  socket.on("keyboard", ({ code, event }) => {
    const hostId = sessions[code];
    if (hostId) io.to(hostId).emit("keyboard", event);
  });

  socket.on("disconnect", () => {
    for (const [code, id] of Object.entries(sessions)) {
      if (id === socket.id) {
        delete sessions[code];
        console.log(`Host for session ${code} disconnected.`);
        break;
      }
    }
  });
});

server.listen(PORT, "0.0.0.0", () =>
  console.log(`✅ Server running on port ${PORT}`)
);
