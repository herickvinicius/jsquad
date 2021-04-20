const dotenv = require("dotenv/config");
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const multer = require("multer");
const multerConfig = require("./src/config/multer");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./src/controllers/authController")(app);
require("./src/controllers/jsquadController")(app);
//require("./src/config/multer")(app);
require("./src/services/websocket")(io);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/posts", multer(multerConfig).single("file"), (req, res) => {
  console.log(req.file);
  return res.json({ hello: "OLA LUIZ" });
});

app.use(
  "/lib/fontawesome",
  express.static("node_modules/@fortawesome/fontawesome-free")
);
app.use("/lib/socket.io", express.static("node_modules/socket.io/client-dist"));

app.use(express.static("public"));

// HTTP
server.listen(port, () => {
  console.log(`Executing on port ${port}.`);
});