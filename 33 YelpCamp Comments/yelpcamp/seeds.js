var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1259&q=80",
        description: "blah blah blah"
    }
]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Added a campground!");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet!",
                            author: "Homer"
                            
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }
                            else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment!");
                            }
                        })
                }
            });
        });
    });
}

module.exports = seedDB;