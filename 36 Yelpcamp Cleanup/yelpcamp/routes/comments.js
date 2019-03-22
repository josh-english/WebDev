var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground.js");
var Comment = require("../models/comment.js");

// comments new
router.get("/new", isLoggedIn, function(req, res) {
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }
        else {
            res.render("comments/new", {campground: campground});
        }
    });
});

// comments create
router.post("/", isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }
        else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }
                else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + req.params.id);
                }
            });
        }
    })
});

// middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;