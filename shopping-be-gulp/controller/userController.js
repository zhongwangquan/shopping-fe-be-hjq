const userData = require("../models/userData");
const mongo = require("../db/mongoose");
const fs = require('fs')
const path = require('path')


const userController = {

    addjob: (req,response)=>{
        
        // console.log(JSON.stringify(req.body));
        req.body.companyLogo = req.fileName
        console.log(req.body);
        mongo.addjob({...req.body});
        response.render("home.art",{
            data:JSON.stringify(req.body)             
        });
    },
    findjob:  async(req,response)=>{

        let dbres =await  mongo.findjob().then(res=>res);
        response.render("find.art",{
            data:JSON.stringify(dbres)         
        });
    },
    removejob: async(req,response)=>{
        // console.log(req.query);
        let {id,companyLogo} = req.query

        let result = await mongo.remove(id).then(res=>res)

        if(result){ 
            fs.unlink(path.resolve(__dirname,`../public/upload/${companyLogo}`), (err) => {
                if (err) throw err;
                console.log('图片was deleted');
              });
        }
        response.render("find.art",{
            data:JSON.stringify("图片已经删除成功")         
        });
    }


}

module.exports = {
    addjob: userController.addjob,
    findjob: userController.findjob,
    removejob: userController.removejob
}