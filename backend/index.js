const express = require("express");

const app = express();

const port = process.env.PORT || 3000; // Verificar outra maneira de ler o .env.

app.listen(port, () => {
  console.log(`Executing on port ${port}.`);
});
