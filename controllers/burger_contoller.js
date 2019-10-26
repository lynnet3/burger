var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hdbrsObj = {
            burger: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });  
});

router.post("/api/burgers", function (req, res) {
    var burInfo = req.body;
    
    burger.updateOne(function(data){
        ["burger_name", "devoured"],
        [burInfo.burger_name, burInfo.devoured],
        function(result){
            res.json{{ id: result.insertId}};
        }
    });
});

router.put("", function(req, res){

});