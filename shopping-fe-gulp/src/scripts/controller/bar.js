const bar = require("../views/bar.html");

const barController = {
    async render({res,router}) {
        var _this = this;
        let list = await _this.find().then(res => res)
        var datarender;
        if(list){
            datarender = template.render(bar, {
                data: JSON.parse(list)
            })   
        }else{
            datarender = template.render(bar)
        }
        
        res.render(datarender)
        _this.remove(res,router);

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
        
        $(".odd").on("click", ".app-position-remove", function () {
            let id = $(this).parents(".odd").attr("data-id")
            let companyLogo = $(this).parents('tr').attr('data-img')

          $.ajax({
                url: "/bar/remove",
                type: "get",
                data:{
                    id:id,
                    companyLogo:companyLogo 
                },
                success: (result) => {
                    if (result) {
                        _this.render({res,router})
                        console.log(result);
                        router.go('/bar/find')
                    }
                }
            })
        })

    }
}

module.exports = barController;