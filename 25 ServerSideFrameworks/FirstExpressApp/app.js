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

// Tell express to listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});