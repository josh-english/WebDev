var express = require("express");
var app = express();
var mongoose = require("mongoose");

//app config
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/cat_adoption", {useNewUrlParser: true});

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

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Adoption Server Started!");
});