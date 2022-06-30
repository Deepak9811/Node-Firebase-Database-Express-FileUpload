// const BannerSchema = require("../model/banner.model");
const ResponseObj = require("../service/Response.service");
const Users = require("../config");

exports.addBanner =async (req, res) => {
    let file = req.body
    await Users.add({file})
    console.log("controller :- ",file)
//   let registerObj = new BannerSchema(req.body);
//   registerObj.save((err, mongoresponse) => {
//     if (err) {
//       res.status(400).send({ response: "error", data: null });
//     } else {
//         console.log(mongoresponse)
//       ResponseObj.successResponse(res, mongoresponse);
//     }
//   });
};
