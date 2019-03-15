var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// app config
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now()}
});

// mongoose model config
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://static1.squarespace.com/static/52406c2ae4b02a75078310d2/t/56047f6de4b0a2d546f00a58/1515523853963/",
//     body: "This is the body! How exciting..."
// });

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

// RESTful routes
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        }
        else{
            res.render("index", {blogs: blogs});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog Server Started!");
});