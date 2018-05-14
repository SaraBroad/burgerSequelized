var express = require("express");
var router = express.Router();

let db = require("../models");

router.get("/", function (req, res) {
    db.Burgers.findAll().then(function(data) {
    
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});


router.post('/burgers', function (req, res) {
    console.log(req.body.name);
    var postBurger = {
        burger_name: req.body.name
    }
    db.Burgers.create(postBurger).then(function (data) {
        res.redirect('/');
    });
});

router.put('/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    console.log(req.params.id);
    db.Burgers.update({
        devoured: true
    }, {
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data);
        })
});



module.exports = router;
