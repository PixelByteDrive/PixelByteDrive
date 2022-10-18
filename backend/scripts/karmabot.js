// FunBot Source Code
const http = require("http");
var express = require("express");
var app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
});
app.listen(6942);
const { Discord, GatewayIntentBits, Client } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
client.on("ready", async () => {   
  client.user.setActivity("social credit system.", {
    type: "WATCHING",
   });
  client.user.setStatus("online");
 });

client.login(process.env.token3);
client.on("messageCreate", async (message) => {
   if (message.channel.id == 724045672839512139) {
    if (message.attachments.size > 0) {
      const upvote = client.emojis.cache.find(emoji => emoji.name === "upvote");
      const downvote = client.emojis.cache.find(emoji => emoji.name === "downvote");
      message.react(upvote);
      message.react(downvote);
    } else if (message.content.includes('https://')) {
      const upvote = client.emojis.cache.find(emoji => emoji.name === "upvote");
      const downvote = client.emojis.cache.find(emoji => emoji.name === "downvote");
      message.react(upvote);
      message.react(downvote);
    } 
   }
});
console.log("Active.");