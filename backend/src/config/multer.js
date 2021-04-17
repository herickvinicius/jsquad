const express = require("express");
const multer = require('multer');
const router = express.Router();
const multerConfig= require("../config/multer");
const path = require("path")
const crypto = require("crypto");

router.post("/posts",multer(multerConfig).single("file"),(req,res)=>{
    console.log(req.file);
    return res.json ({hello: "OLA LUIZ"});
} );

module.exports = {
    dest: path.resolve(__dirname, '..','..','tmp','uploads'),
    storage : multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, path.resolve(__dirname, '..','..','tmp','uploads'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
              if (err) cb(err);
      
              const filename = `${hash.toString("hex")}-${file.originalname}`;
      
              cb(null, filename);
            });
          }
        }),
    limits: {
        fileSize: 2 * 1024 * 1024 
    },
    fileFilter: (req, file, cb)=>{
        const allowedMimes=[
            "imagem.jpeg",
            "imagem.pjpeg",
            "imagem.png"
        ];
        
        if (allowedMimes.includes(file.mimetype)){
            cb (null , true);
        }else{
            cb (new Error("Invalid file type."));
        }
    }
};