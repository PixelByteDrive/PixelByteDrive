// FunBot Source Code
const http = require("http");
var express = require("express");
var app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Ping Received");
});
app.listen(6934);
const { Client, Intents } = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
client.on("ready", async () => {   
  client.user.setActivity("experimental bot.", {
    type: "WATCHING",
   });
  client.user.setStatus("online");
 });

client.login(process.env.token4);
client.on("messageCreate", async (message) => {
   const upvote = client.emojis.cache.find(emoji => emoji.name === "upvote");
   const downvote = client.emojis.cache.find(emoji => emoji.name === "downvote");
   message.react(upvote);
   message.react(downvote);
});
client.on('messageReactionAdd', (reaction, user) => {
  if (reaction.emoji.name === "upvote") {
    console.log("second check");
    reaction.users.remove(user.Id)
  }
});
console.log("Active.");