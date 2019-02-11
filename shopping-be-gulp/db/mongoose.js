const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/shopping", function (err) {
    if (err) {
        console.log("链接mongo服务器失败");
        return;
    } else {
        console.log("链接mongo服务器成功");
    }
})
//定义骨架
const Schema = mongoose.Schema({
    companyLogo: String,
    companyName: String,
    positionName: String,
    city: String,
    salary: String,
    degree: String,
    experience: String,
    description: String,
    createTime: String
})
//定义模型
const model = mongoose.model("jobs", Schema);

const mongo = {

    addjob: function ({
        companyLogo,
        companyName,
        positionName,
        city,
        salary,
        degree,
        experience,
        description,
        createTime}) {

        //创建实体
        const instance = new model({  
            companyLogo: companyLogo,
            companyName: companyName,
            positionName: positionName,
            city: city,
            salary: salary,
            degree: degree,
            experience: experience,
            description: description,
            createTime: createTime
        })
        instance.save(function (err) {
            if (err) {
                throw err
            } else {
                console.log("添加职位成功");
            }
        })
    },
    update: function (username, val) {
        model.find({
            username: username
        }, function (err, res) {
            const id = res[0]._id;
            model.findById({
                _id: id
            }, function (err, doc) {
                doc.username = val;
                doc.save(function (err) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("更新数据成功");

                    }
                })

            })
        })
    },
    findjob: function () {
        let result = model.find({}).then(res => res);
        return result;
    },
    remove: function (id) {
        console.log(id);
        
       const p1 = model.findById({"_id":id}, function (err, res) {
            
            if(res){
                res.remove(function (err) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("删除数据成功");
    
                    }
                })
            }

        }).then(res=>{
            if( res ){
                return true
            }else{
                return false
            }
        }).catch(err => false)
        console.log(p1);
        
        return p1;
    }
}
module.exports = {
    addjob: mongo.addjob,
    update: mongo.update,
    findjob: mongo.findjob,
    remove: mongo.remove

}