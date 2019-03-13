var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
            {name: "Salmon Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f2c57da5efb6b8_340.jpg"},
            {name: "Granite Hill", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144497f4c57ba5eeb5_340.jpg"},
            {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
            {name: "Salmon Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f2c57da5efb6b8_340.jpg"},
            {name: "Granite Hill", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144497f4c57ba5eeb5_340.jpg"},
            {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
            {name: "Salmon Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f2c57da5efb6b8_340.jpg"},
            {name: "Granite Hill", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144497f4c57ba5eeb5_340.jpg"},
            {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"}
        ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form
    var name = req.body.name;
    var image = req.body.image;
    // add to campgrounds array
    var newCampground = {name: name, image:image};
    campgrounds.push(newCampground);
    // redirect to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});