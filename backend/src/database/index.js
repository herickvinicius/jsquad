const mongoose = require("mongoose");
const dotenv = require("dotenv/config");

const dbSocket = process.env.DB_SOCKET;
const serverPath = process.env.SERVER_PATH;
const dbName = process.env.DB_NAME;

console.log(`Trying to connect to ${dbSocket}${serverPath}/${dbName}.`);
mongoose
  .connect("mongodb://localhost/jsquad", {
    // .connect("mongoose://localhost/jsquad", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((r) => {
    console.log("Banco conectado!");
  })
  .catch((e) => {
    console.log("Não foi possível se conectar ao banco de dados.");
  });
  

mongoose.Promise = global.Promise;

module.exports = mongoose;
