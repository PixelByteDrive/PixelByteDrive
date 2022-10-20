const mongoose = require("mongoose");
const randomString = require("random-string");
const express = require("express");
var app = express();
app.use(express.static(__dirname));
app.get("/", function (request, response) {
  response.status(503).end();
});
app.listen(8080);

async function connectToDatabase() {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.bhuz1mg.mongodb.net/test`
  );
}

connectToDatabase()
  .then(console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  name: String,
  id: Number,
  apiKey: String,

  // if a user was banned, then deactivated would be true with a reason associated with that
  deactiated: Boolean,
  reason: String,
});

const User = mongoose.model("Users", UserSchema);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

app.put("/api/newUser/:username", (req, res) => {
  User.exists({ name: req.params.username }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      if (result == null) {
        var apikey = randomString({ length: 20, special: true });
        let NewUser = new User({
          name: req.params.username,
          id: getRandomIntInclusive(1, 100000000000),
          apiKey: apikey,
        });
        NewUser.save();
        var jsonResponse = `
          {"success": true, "body": {"name": "${NewUser.name}", "id": ${NewUser.id}, "apiKey": "${NewUser.apiKey}"}, "notice": "Please save the API key, as you'll need it to perform certain actions."}
        `;
        var jsonParse = JSON.parse(jsonResponse);
        res.setHeader("Content-Type", "application/json");
        res.send(jsonParse);
      } else {
        var jsonResponse = `
          {"success": false, "body": {"error": "Username already taken. Pick another one!"}}
        `;
        var jsonParse = JSON.parse(jsonResponse);
        res.setHeader("Content-Type", "application/json");
        res.send(jsonParse);
      }
    }
  });
});

app.get("/api/user/:id", (req, res) => {
  User.find({ id: req.params.id })
    .limit(1)
    .then(function (response, error) {
      if (response[0]) {
        var jsonResponse = `
          {"success": true, "username": "${response[0].name}", "id": ${response[0].id}}
        `;
        console.log(response);
        var jsonParse = JSON.parse(jsonResponse);
        res.setHeader("Content-Type", "application/json");
        res.send(jsonParse);
      } else {
        var jsonResponse = `
          {"success": false, "error": "No user found."}
        `;
        console.log(response);
        var jsonParse = JSON.parse(jsonResponse);
        res.setHeader("Content-Type", "application/json");
        res.send(jsonParse);
      }
    });
});
app.delete("/api/deleteUser", (req, res) => {
  const apiKey = req.get("api-key");
  User.find({ apiKey: apiKey })
    .limit(1)
    .then((response, error) => {
      if (response[0]) {
        User.deleteOne({ apiKey: apiKey }, function (err) {
          if (err)
            return res
              .setHeader("Content-Type", "application/json")
              .send(
                JSON.parse(
                  `{"success": false, "error": "Something went wrong."}`
                )
              );
          var jsonResponse = `
          {"success": true, "body": "The account has been deleted from our database."}
        `;
          console.log(response);
          var jsonParse = JSON.parse(jsonResponse);
          res.setHeader("Content-Type", "application/json");
          res.send(jsonParse);
        });
      } else {
        var jsonResponse = `
        {"success": false, "error": "Invalid API key."}
      `;
        console.log(response);
        var jsonParse = JSON.parse(jsonResponse);
        res.setHeader("Content-Type", "application/json");
        res.send(jsonParse);
      }
    });
});
