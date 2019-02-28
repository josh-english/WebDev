var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

// animal speaking requests
app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human!",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

// repeating word requests
app.get("/repeat/:word/:num", function(req, res) {
    var word = req.params.word;
    var num = req.params.num;
    var response = "";
    for (var i = 0; i < num; i++) {
        response += (word + " ");
    }
    res.send(response);
});

// defualt response
app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

// Listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});