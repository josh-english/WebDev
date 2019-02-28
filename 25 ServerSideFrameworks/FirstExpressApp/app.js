var express = require("express");
var app =  express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
   res.send("Goodbye!"); 
});

// "/dog" => "Meow!"
app.get("/dog", function(req, res) {
   console.log("Someone made a request to /dog!");
   res.send("Meow!"); 
});

// route patterns
app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit + " subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    res.send("Welcome to the comments page!");
});

// order matters!
app.get("*", function(req, res) {
   res.send("You are a star!"); 
});


// Tell express to listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});