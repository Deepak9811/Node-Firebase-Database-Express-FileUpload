var express = require("express");
var router = express.Router();
const Users = require("../config");
const multer = require("multer");
const fs = require("fs")
const bodyParser = require("body-parser");
const bannerController = require("../controller/banner.controller");

router.get("/", function (req, res, next) {
  const data = req.body;
  console.log("hello :- ", data);
  res.send({ msg: "User Added", data: data });
});

router.post("/", function (req, res, next) {
  const data = req.body;
  console.log("hello :- ", data);
  res.send({ msg: "User Added", data: data });
});


// by express-fileupload
const path = require("path")

router.post("/uploadfile", function (req, res, next) {
  const file = req.files;
  console.log(file)
  
  let fileNmae = Date.now()+'-'+req.files.myFiles.name
  let newPath = path.join(process.cwd(),'image',fileNmae)
  req.files.myFiles.mv(newPath)
  console.log(file)
  // upload.single('myFiles')
  if (file) {
    res.json({ status: true, data: file });
  } else {
    res.send("please select file");
  }
  
});



//---------BANNERs-------------

router.post("/post", function (req, res, next) {
  const data = req.files;
  // console.log("req.body :- ", data);
  if (req.files.image.length == 0) res.status(400).send("Image not found");
  req.body.image = [];

  if (req.files.image.size < 300000) {
    if (typeof req.files.image == "object") {
      req.body.image.push(
        `data:${req.files.image.mimetype};base64,` +
          req.files.image.data.toString("base64")
      );
      // console.log("base 64 :- ", req.body.image);
      bannerController.addBanner(req, res);
    } else
      req.files.image.map(async (obj, index) => {
        req.body.image.push(
          `data:${obj.mimetype};base64,` + obj.data.toString("base64")
        );
        if (req.files.image.length == index + 1) {
          //   bannerController.addBanner(req, res);
        }
      });
  } else {
    ResponseObj.errorResponse(res, {
      status: 400,
      msg: "Image should be less than 200KB",
    });
  }
});


// SET STORAGE by multer
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// var upload = multer({ storage: storage }).array('myFiles', 12)

// router.post("/up",(req,res)=>{
//   const file = req.files;
//   console.log(file)
//   upload(req,res,(error)=>{
//     if(error){
//       console.log("Error :- ",error)
//       res.send(error)
//     }else{
//       console.log(req.files)
//       res.send("test")
//     }
//   })
// })




module.exports = router;
