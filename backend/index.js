const express = require("express");
const dotenv = require("dotenv/config");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3006; // Verificar outra maneira de ler o .env.

const app = express();

app.use(express.urlencoded({ extended: false }));

require("./src/controllers/authController")(app);

app.listen(port, () => {
  console.log(`Executing on port ${port}.`);
});
