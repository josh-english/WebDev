var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// SCHEMA setup
var Campground = require("./models/campground")
//var Comment = require("./models/comment")
//var User = require("./models/user")

var seedDB = require("./seeds");
seedDB();

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true})
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

// index - show all campgrounds
app.get("/campgrounds", function(req, res){
    // get all campgrounds from db
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("index", {campgrounds: campgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds: campgrounds});
});

// create - add new campground to db
app.post("/campgrounds", function(req, res){
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
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

// show - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    // find the campground with provided id
    var id = req.params.id;
    Campground.findById(id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else {
            console.log(foundCampground);
            // render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});