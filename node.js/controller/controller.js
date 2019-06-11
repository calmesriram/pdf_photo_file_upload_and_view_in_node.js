var db = require('../db')
const path = require('path');
exports.test = (req,res)=>{
res.end("test");
}

exports.uploadsinglefile= (req,res)=>{
    res.end("file uploaded");
}

exports.arrayfile= (req,res)=>{
    res.end("file amounts  uploaded");
}

exports.getfile= (req,res)=>{
    var d = req.params._id;
    res.sendFile(path.resolve('./UploadedFile/'+d));
    //  res.end(d)
}
console.log(path.resolve('./UploadedFile/'))