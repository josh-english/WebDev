var express = require("express");
var router = express.Router();
var Campground = require("../models/campground.js");

// index - show all campgrounds
router.get("/", function(req, res){
    // get all campgrounds from db
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index", {campgrounds: campgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds: campgrounds});
});

// create - add new campground to db
router.post("/", function(req, res){
    // get data from form
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    // add to campgrounds array
    var newCampground = {name: name, image:image, description: desc};
    // create a new campground and save to db
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }
        else {
            res.redirect("/campgrounds");
        }
    });
    // campgrounds.push(newCampground);
    // redirect to campgrounds page
    // res.redirect("/campgrounds");
});

// new - show new form to create new campground
router.get("/new", function(req, res) {
    res.render("campgrounds/new");
});

// show - shows more info about one campground
router.get("/:id", function(req, res) {
    // find the campground with provided id
    var id = req.params.id;
    Campground.findById(id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else {
            //console.log(foundCampground);
            // render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

module.exports = router;