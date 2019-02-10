const userData = require("../models/userData");
const mongo = require("../db/mongoose");

const userController = {

    addjob: (req,response)=>{
        console.log(req.body);
        // console.log(JSON.stringify(req.body));
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
    removejob: (req,response)=>{
        // console.log(req.query);
        
       mongo.remove({...req.query})

        // console.log(dbres);
        
        response.render("find.art",{
            data:JSON.stringify(req.query.id)         
        });
    }


}

module.exports = {
    // login: userController.login,
    // home: userController.home,
    addjob: userController.addjob,
    findjob: userController.findjob,
    removejob: userController.removejob
}