var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

// animal speaking requests
app.get("/speak/pig", function(req, res) {
    res.send("The pig says 'Oink'");
});

app.get("/speak/cow", function(req, res) {
    res.send("The cow says 'Moo'");
});

app.get("/speak/dog", function(req, res) {
    res.send("The dog says 'Woof Woof!'");
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