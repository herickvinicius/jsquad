const dotenv = require("dotenv/config");
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./src/controllers/authController")(app);

// WEBSOCKET
let users = [];

// Inicia o websocket.
io.on("connection", (socket) => {
  console.log(`Socket.io: user connected! ID: ${socket.id}`);

  // O evento 'join server' recebe do frontend o nickname, cria o ojeto user e o guarda em users (declarado acima).
  socket.on("join server", (username) => {
    const user = {
      username,
      id: socket.id,
    };
    users.push(user);
    //E então notifica todos os usuários que existe um novo user conectado.
    io.emit("new user", users);
  });
});

// HTTP
server.listen(port, () => {
  console.log(`Executing on port ${port}.`);
});
