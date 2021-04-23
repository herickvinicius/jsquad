const express = require("express");
const app = express();
const multer = require("multer");
const multerConfig = require("./src/config/multer");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./src/controllers/authController")(app);
require("./src/controllers/jsquadController")(app);
require("./src/controllers/productController")(app);
require("./src/controllers/playerController")(app);

app.listen(port, () => {
  console.log(`Executing on port ${port}.`);
});
