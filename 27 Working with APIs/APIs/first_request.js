var request = require('request');

request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log("User's name is:")
        console.log(parsedData['name']);
    }
});