var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log("your in the post route for friends")

        console.log(req.body.name);
        console.log(req.body);

        var fendsFriends = req.body;
        var fendsScore = fendsFriends("score").map(parseFloat);
        fendsScore = friends.map(function(friends){
            return friends.score
        })

        





    })





}