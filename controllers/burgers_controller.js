var express = require('express');
var router = express.Router();
var burgerQuery = require("../models/burger");

// routes
router.get("/", function(req, res) {
    burgerQuery.all((data) => {
        var burgerObj = { burger: data }
        res.render("index", {
            title: "Da Burger || HOME",
            burgerObj
            
            
        });
    })
});
router.post("/api/burger", ((req, res) => {
    var data = req.body.text;
    burgerQuery.create(["burger_name"], [data], (() => {
        res.render("index");
    }))
}))

router.get("/api/burger/:id", ((req, res) => {
    var condition = "id= " + req.params.id;
    burgerQuery.update({
        devoured: true
    }, condition, ((result) => {
        res.redirect("/");

    }))
}))
module.exports = router;