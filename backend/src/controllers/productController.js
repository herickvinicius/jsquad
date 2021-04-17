const router = express.Router();
const multer = require('multer');
const multerConfig= require("../config/multer");
const Product = require("../models/Product");

router.post("/posts",multer(multerConfig).single("file"),(req,res)=>{
    console.log(req.file);
    return res.json ({hello: "OLA LUIZ"});
} );