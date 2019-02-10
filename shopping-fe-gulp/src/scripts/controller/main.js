const main = require("../views/main.html");

const mainController = {
    render: ({req,res})=>{
        res.render(main);
    }
}

module.exports = mainController;