const express = require("express");
const cors = require('cors');
const bodyparser= require('body-parser');
// const multer = require('multer');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var router = express.Router();

var app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('UploadedFile'))
require('./Routers/appRouter')(app);

// var storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, './UploadedFile/');
//     },
//     filename: function(req, file, cb) {
//       cb(null, new Date().toISOString() + file.originalname);
//     }
//   });
 
//   var fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };
 
//   const upload = multer({
//     storage: storage,
//     // limits: {
//     //   fileSize: 1024 * 1024 * 5
//     // },
//     fileFilter: fileFilter
//   });


var name = "NODE Express.js"
module.exports= {    
    myname:name,
    mycors:cors,
    mybodyparser:bodyparser,
    // mymulter:multer,    
    express:express,
    myapp:app,
    myfs:fs,
    myjwt:jwt,
    mypath:path,
    // mystorage:storage,
    // myfilefilter:fileFilter,
    // myupload:upload,
    myeventEmitter:eventEmitter    
}

