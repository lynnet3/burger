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