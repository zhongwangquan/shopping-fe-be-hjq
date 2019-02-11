const bar = require("../views/bar.html");

const barController = {
    async render({ res,router}) {
        var _this = this;
        let list = await _this.find().then(res => res)
        var datarender;
        // console.log(list);
        
        if(list){
            datarender = template.render(bar, {
                data: JSON.parse(list)
            })
            
        }
        
        else{
            datarender = template.render(bar)
        }
        // console.log(datarender);
        
        res.render(datarender)

        // find();
        _this.remove(router);

    },
    find: function () {
      
        return $.ajax({
            url: "/bar/find",
            type: "get",

            success: (res) => {
                if (res) {
                    return res;

                }
            }
        })
    },
    remove: function (res,router) {
        var _this = this;
        // console.log(router);
        
        $(".odd").on("click", ".app-position-remove", function () {
            let id = $(this).parents(".odd").attr("data-id")

            return $.ajax({
                url: "/bar/remove",
                type: "get",
                data:{
                    id:id
                },
                success: (result) => {
                    if (result) {
                        _this.render({res,router})
                        console.log(result);
                        // router.go('/bar/find')
                    }
                }
            })
           

        })

    }
}

// barController.find();
module.exports = barController;