var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//app config
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/cat_adoption", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"))
app.use(express.static("public"));

//cat adoption schema
var catSchema = new mongoose.Schema({
    name: String,
    image: String,
    age: Number,
    breed: String,
    size: String,
    created: {type: Date, default: Date.now()}
});
var Cats = mongoose.model("Cats", catSchema);

//test cat
// Cats.create({
//     name: "Bubbles",
//     image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44250090/1/?bust=1552805872&width=560",
//     age: 7,
//     breed: "Domestic Short Hair",
//     size: "Medium"
// })

// home route
app.get("/", function(req, res){
    res.redirect("/cats");
});


// index route
app.get("/cats", function(req, res){
    Cats.find({}, function(err, foundCats){
        if(err) {
            console.log(err);
        }
        else {
            res.render("index", {cats: foundCats});
        }
    });
});

// new route
app.get("/cats/new", function(req, res){
    res.render("new");
});

// create route
app.post("/cats", function(req, res){
    Cats.create(req.body.cat, function(err, newCat){
        if(err){
            res.render("new");
        }
        else{
            res.redirect("/cats");
        }
    });
});

// show route
app.get("/cats/:id", function(req, res){
    Cats.findById(req.params.id, function(err, cat){
        if(err){
            res.redirect("cats");
        }
        else{
            res.render("show", {cat: cat});
        }
    });
});

// edit route
app.get("/cats/:id/edit", function(req, res) {
    Cats.findById(req.params.id, function(err, cat){
        if(err){
            res.render("/cats/" + req.params.id);
        }
        else {
            res.render("edit", {cat: cat});
        }
    });
});

// update route
app.put("/cats/:id", function(req, res){
    Cats.findByIdAndUpdate(req.params.id, req.body.cat, function(err, updatedCat){
        if(err){
            res.redirect("/cats");
        }
        else{
            res.redirect("/cats/" + req.params.id);
        }
    });
});

// destroy route
app.delete("/cats/:id", function(req, res){
    Cats.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/cats");
        }
        else {
            res.redirect("/cats");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Adoption Server Started!");
});