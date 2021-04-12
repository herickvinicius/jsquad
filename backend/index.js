const express = require("express");
const dotenv = require("dotenv/config");
const socketio = require("socket.io");
const http = require("http");

const port = process.env.PORT || 3000; // Verificar outra maneira de ler o .env.

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./src/controllers/authController")(app);

server.listen(port, () => {
  console.log(`Executing on port ${port}.`);
});
