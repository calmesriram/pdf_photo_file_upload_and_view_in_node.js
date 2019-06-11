var controller = require('../controller/controller')
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './UploadedFile/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

var fileFilter = (req, file, cb) => {
  // reject a file  
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ||
   file.mimetype == 'video/mpeg' || file.mimetype == 'video/mp4'  || 
   file.mimetype == 'application/msword' || file.mimetype == 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5
  // },
  fileFilter: fileFilter
});

module.exports = (app) =>{

  
  app.get('/',controller.test)
  app.post('/upload',upload.single('file'),controller.uploadsinglefile)
  app.post('/uploadarray',upload.array('files',12),controller.arrayfile)
  app.get('/getfile/:_id',controller.getfile)

}

















































// const express = require("express");
// const cors = require('cors');
// const bodyparser= require('body-parser');
// const multer = require('multer');
// const fs = require('fs');
// const jwt = require('jsonwebtoken');
// const path = require('path');
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var router = express.Router();

// var app = express();
// app.use(cors());
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended: true}));
// require('../Routes/routes')(app);

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
 
//   var upload = multer({
//     storage: storage,
//     // limits: {
//     //   fileSize: 1024 * 1024 * 5
//     // },
//     fileFilter: fileFilter
//   });



// module.exports= {    
//     myname:name,
//     mycors:cors,
//     mybodyparser:bodyparser,
//     mymulter:multer,    
//     express:express,
//     myapp:app,
//     myfs:fs,
//     myjwt:jwt,
//     mypath:path,
//     mystorage:storage,
//     myfilefilter:fileFilter,
//     myupload:upload,
//     myeventEmitter:eventEmitter    
// }

