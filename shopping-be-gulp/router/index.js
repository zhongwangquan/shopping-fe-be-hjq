const express = require("express");
const userController = require("../controller/userController")
const router = express.Router();
// router.get("",userController.home)
// router.get("/register",userController.register)
router.post("/jobs",userController.addjob)
router.get("/find",userController.findjob)
router.get("/remove",userController.removejob)

module.exports = router;