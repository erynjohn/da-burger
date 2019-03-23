var orm = require("../config/orm");

//query DB
var burgerQuery = {
    all: ((cb) => {
        orm.viewAll("*", "burgers", ((res) => {
           cb(res);
           console.log("all:")
           console.log(res); 
        }))
    }),
    create: ((cols, vals, cb) => {
        orm.create("burgers", cols, vals, ((res) => {
            cb(res);
            console.log("create:");
            console.log(res); 
        }));
    }),
    update: ((objColVals, condition, cb) => {
     orm.update("burgers", objColVals, condition, ((res) => {
         cb(res);
         console.log("update:")
         console.log(res); 
     }));   
    })
}
module.exports = burgerQuery;