// model的任务是
//     1.存数据到数据库
//     2.和暴露数据

const userData = {
    //前端发来的request数据，username ,password
    findjob: function({
           companyLogo,
           companyName,
           positionName,
           city,
           salary,
           degree,
          experience,
          description,
          createTime
    }){

        return {
            auth: true,
            username,
            password
        }
        
    },
    login: function({username,password}){

        return {
            auth: true,
            username,
            password
        }  
    },
 
}


module.exports = {
    home: userData.home,
    login: userData.login
}