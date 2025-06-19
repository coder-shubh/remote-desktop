// server/index.js
const { Server } = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 3000; // Use Render-assigned port

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("screen-data", (data) => {
    socket.broadcast.emit("screen-data", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
