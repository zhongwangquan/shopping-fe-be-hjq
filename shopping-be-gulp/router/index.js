const express = require("express");
const userController = require("../controller/userController")
const router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname,'../public/upload'))
    },
    filename: function (req, file, cb) {
      let fileStr = file.originalname  //3.jpg 
      let docIndex = file.originalname.indexOf('.')
      let fileEnd = fileStr.substr(docIndex)
      req.abc = 'yyb'
      let fileName = file.fieldname + '-' + Date.now() + fileEnd
      req.fileName = fileName
      cb(null, fileName )
    }
  })
   
  var upload = multer({ storage: storage })

router.post("/jobs",upload.single('companyLogo'),userController.addjob)
router.get("/find",userController.findjob)
router.get("/remove",userController.removejob)

module.exports = router;