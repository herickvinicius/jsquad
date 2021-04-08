const express = require("express");
//const cors = require("cors");

const app = express();

//app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Executing on port ${port}.`);
});
