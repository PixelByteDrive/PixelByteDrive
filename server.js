var express = require("express");
var app = express();
app.use(express.static(__dirname));
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/homepage.html");
});
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/error/404.html");
});
app.listen(8080);
console.log("Andrew is Cool");

// FunBot Source Code
const http = require('http');
app.get("/", (request, response) => { 
  console.log(Date.now() + "Ping Received");     
  response.sendStatus(200);
});
app.listen(process.env.PORT);
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.on("ready", async () => { 
  console.log(`bot is online!`); client.user.setActivity("h. | ?help | ?about | ?invite", {type: "WATCHING"});
      }); 

client.login(process.env.token) 

client.on('message', async message => {
  let prefix = "?";
  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  
  if(!message.content.startsWith(prefix)) return;
  
  try {
    let cmdFile = require(`./commands/${cmd}.js`)
    cmdFile.run(Discord, client, message, args);
    } catch(err) {
      console.log(err)
    }
});