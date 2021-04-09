const express = require('express');
const dotenv = require("dotenv/config");


const app = express();

const port = process.env.PORT || 3000; // Verificar outra maneira de ler o .env.

app.use(express.urlencoded({ extended: false }))

require('./src/controllers/authController')(app);

app.listen(port, () => {
  console.log(`Executing on port ${port}.`);
});