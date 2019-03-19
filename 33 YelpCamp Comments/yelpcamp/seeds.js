var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet tellus malesuada, gravida dui id, tincidunt libero. Nunc faucibus ipsum eget magna vulputate feugiat. Donec ullamcorper justo eu arcu scelerisque iaculis. Nulla tristique elit sem, sed egestas purus vulputate in. Nam egestas mauris at neque faucibus, eget tempor lacus varius. Aenean suscipit vestibulum iaculis. Suspendisse potenti. Praesent sit amet ante nec nisi gravida fringilla a eu turpis."
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Vivamus suscipit magna eu tellus molestie, ut feugiat tellus vehicula. Integer quis placerat tellus. Vestibulum semper eu urna vel scelerisque. Aenean porta in sem venenatis finibus. Nunc id eros lacus. Curabitur est ante, finibus non molestie ac, convallis laoreet massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium imperdiet sem sed hendrerit. Fusce diam neque, auctor a nisi at, placerat commodo turpis. Nullam faucibus posuere magna, vel luctus sem imperdiet vitae. Suspendisse potenti. Suspendisse et ligula vitae felis lobortis finibus. Donec velit neque, finibus ac laoreet eu, blandit non sem. Praesent odio libero, blandit in faucibus ac, ultrices quis nunc."
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1259&q=80",
        description: "In sit amet leo eleifend, rutrum nisi et, blandit nunc. Donec odio orci, tincidunt et nulla in, elementum sollicitudin ex. Suspendisse ultricies ipsum vel ante porta, et varius velit vulputate. In hac habitasse platea dictumst. Aliquam vitae eleifend enim. Morbi tempus ultricies nibh, congue aliquet ipsum dictum at. Fusce pharetra congue neque, sit amet malesuada ante gravida at. Curabitur elementum tincidunt magna a ultricies. Maecenas erat risus, faucibus eu tincidunt ac, blandit ut neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque quis nisi vel leo luctus venenatis. Pellentesque sit amet erat est. Sed eu arcu posuere, laoreet ante ullamcorper, vestibulum orci."
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
                    //console.log("Added a campground!");
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
                                //console.log("Created new comment!");
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;