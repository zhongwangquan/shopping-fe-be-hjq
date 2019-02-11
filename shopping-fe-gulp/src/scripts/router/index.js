import SMERouter from "sme-router";
const router = new SMERouter("router-view");
const mainController = require("../controller/main")
const jobsController = require("../controller/jobs")
const barController = require("../controller/bar")


router.route("/main",(req,res,next)=>{    
    mainController.render({req,res,next});

});


router.route("/bar/find",(req,res,next)=>{     
    barController.render({req,res,next,router});

});

router.route("/bar/position",(req,res,next)=>{

    jobsController.render({req,res,next,router});//此router是最上面定义的


});


router.route('*', (req, res,next) => {
     mainController.render({req,res,next});
  })
