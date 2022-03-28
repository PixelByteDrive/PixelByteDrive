// FunBot Source Code
const http = require("http");
var express = require("express");
var app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Ping Received");
  response.sendStatus(200);
});
app.listen(6942);
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.on("ready", async () => {   
  client.user.setActivity("social credit system.", {
    type: "WATCHING",
   });
  client.user.setStatus("online");
 });

client.login(process.env.token3);
client.on("messageCreate", async (message) => {
   const upvote = client.emojis.cache.find(emoji => emoji.name === "upvote");
   const downvote = client.emojis.cache.find(emoji => emoji.name === "downvote");
   message.react(upvote);
   message.react(downvote);
});
console.log("Active.");