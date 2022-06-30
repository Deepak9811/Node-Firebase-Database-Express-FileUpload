var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
// const assert = require("assert");
const bodyParser = require("body-parser");
var jsonparser = bodyParser.json();



var indexRouter = require("./route/index");

// const fileupload = require("express-fileupload");

var app = express();
app.use(express.static("./image"));
// Then you can set a middleware for express-fileupload

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const baseUrl = "";
app.use(cors({ origin: "*" }));
// app.use(fileupload({useTempFiles:true,tempFileDir:"./image"}));
// app.use(fileupload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));

app.use("/", indexRouter);


//Storage

// const multer = require('multer');
// var storage = multer.diskStorage({
//       destination: function (req, file, cb) {
//           cb(null, './image')
//       },
//       filename: function (req, file, cb) {
//           cb(null, file.originalname )
//       }
//   })

//   var uploads = multer({ storage: storage })

// app.post('/uploadfile', uploads.single('myFiles'), (req, res, next) => {
//     const file = req.file
//     if (!file) {
//         const error = ('Please upload a file')
//         // return next(error)
//         res.send(error)
//     }
//     res.send(file)
// })




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;




















// Require all packages installed
// const express = require('express')
// const app = express();
// app.use(express.json());

// app.listen(8080, () => {
//   console.log('Database connected successfully')
//   console.log('Server started on port 8080')
// })

// const multer = require('multer');

// // SET STORAGE
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './image')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname )
//     }
// })

// var upload = multer({ storage: storage })

// app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
//     const file = req.file
//     if (!file) {
//         const error = ('Please upload a file')
//         // return next(error)
//         res.send(error)
//     }
//     res.send(file)
// })

// //Uploading multiple files
// app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
//     const files = req.files
//     if (!files) {
//         const error = new Error('Please choose files')
//         error.httpStatusCode = 400
//         return next(error)
//     }
//     res.send(files)
// })












