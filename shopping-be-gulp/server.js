const express = require("express");
const path = require("path");
const router = require("./router/index");
const port = 4000;
const app = express();
const bodyParse = require("body-parser");

express.app = express();
app.use(bodyParse.urlencoded({extended:false}));
app.use(express.static(path.resolve(__dirname,"public")));

app.engine("art",require("express-art-template"));

app.set("view options",{
    debug: process.env.NODE_ENV !=="production",
    cache: true
})
app.set("views","./views");//设置模板渲染引擎路径

app.use("/bar",router);
app.use(function(err,req,res,next){
    res.status(500).send("something borke");
})

app.listen(port,()=>{
    console.log(`服务器运行在: localhost:${port}`);  
});

