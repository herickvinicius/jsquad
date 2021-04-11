const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv/config");

const app = express();

const port = process.env.SERVER_PORT; // Verificar outra maneira de ler o .env.

app.listen(port, () => {
  console.log(`Executing on port ${port}.`);
});
