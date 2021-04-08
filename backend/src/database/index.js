const mongoose = require("mongoose");

const dbSocket = process.env.DB_SOCKET;
const serverPath = process.env.SERVER_PATH;
const dbName = process.env.DB_NAME;

mongoose
  .connect(`${dbSocket}${serverPath}/${dbName}`, {
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
