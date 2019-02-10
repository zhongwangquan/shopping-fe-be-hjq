const jobs = require("../views/jobs.html");

const jobsController = {

    render: function({req,res,router}){
        var _this = this;
        res.render(jobs);
        
            $("#app-add-save").on("click", () => { 
            _this.save(router);
            // router.go("/bar/find");
         });
        
        $("#app-add-back").on("click",()=>{
        
            _this.return(router);
        })
    },
    save: function(router){
        //   $("#app-add-save").on("click", () => {
        //     console.log( 'submit ')
        //     var options = {
        //        "success":this.return(router),
        //         "resetForm" : true,
        //         "dataType" : "json"
        //     };
        //     $("#app-form-submit").ajaxSubmit(options);
        // });
        var companyLogo = $("#companyLogo").val(),
            companyName = $('#companyName').val(),
            positionName = $('#positionName').val(),
            city = $('#city').val(),
            salary = $('#salary').val(),
            degree = $('#degree').val(),
            experience = $('#experience').val(),
            description = $('#description').val(),
            createTime = Date.now();

        $.ajax({
            url: "/bar/jobs",
            type: "post",
            data: {
                companyLogo: companyLogo,
                companyName: companyName,
                positionName: positionName,
                city: city,
                salary: salary,
                degree: degree,
                experience: experience,
                description: description,
                createTime: createTime
            },
            success: (res)=>{
                // console.log("success 连接");
                
                if(res){
                    // console.log(res);
                    router.go("/bar/find");
                }
            }
        })
    },
    return: function(router){
        router.back();
    }

}

module.exports = jobsController;