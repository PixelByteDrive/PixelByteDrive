// FunBot Source Code
var express = require("express");
var online = process.env.online;
var app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "Ping Received");
});
app.listen(process.env.PORT);
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
if (online == "true") {
  client.on("ready", async () => {
    console.log(`bot is online!`);
    client.user.setActivity("no. | ?help | ?about | ?invite", {
      type: "WATCHING",
    });
  });
} else {
  client.on("ready", async () => {
    console.log(`bot is inactive.`);
    client.user.setActivity("a maintenance. | ?help | ?about | ?invite", {
      type: "COMPETING",
    });
    client.user.setStatus("idle");
  });
}

client.login(process.env.token);

client.on("ready", async () => {
  client.user.setPresence({
    activities: [
      {
        name: "ye",
        type: "PLAYING",
      },
    ],
  });
  console.log(`bot is also online! ${client.user.tag}`);
  const help = {
    name: "help",
    description: "Presents a list of commands."
  };
  const announce = {
    name: "announce",
    description: "For general announcements.",
    options: [
      {
        name: "title",
        description: "The title of your announcement.",
        required: true,
        type: ["STRING"],
      },
      {
        name: "text",
        description: "The description of your announcement.",
        required: true,
        type: ["STRING"],
      },
    ],
  };
  const ban = {
    name: "ban",
    description: "Bans a user."
  };
  const command1 = await client.guilds.cache
    .get("549036331372904478")
    .commands.create(help);
  const command2 = await client.guilds.cache
    .get("549036331372904478")
    .commands.create(announce);
  const command4 = await client.guilds.cache
    .get("549036331372904478")
    .commands.create(ban);
});

client.on("interactionCreate", async (inter) => {
  const { commandName, options } = inter;
  if (inter.isCommand()) {
    
    // Help command
    
    if (inter.commandName === "help") {
      
      var embed = new Discord.MessageEmbed()
        .setTitle('**Server Commands**')
        .setDescription(":newspaper: **Informational:** `?help`, `?invite`, `?about` \n \n :joy: **Cool Stuff:** `?rps`, `?8ball`, `?coinflip`, `?roll`, ~~`?find`,~~ `?embed`  \n \n :pencil: **Responsival:** `?suggest`, `?report`, `?feedback` \n \n ~~:hammer: **Moderation:** `?kick`, `?ban`, `?mute`, `?unban`, `?addrole`, `?removerole`~~ \n \n ~~:musical_note: **Musical:** `?play`, `?skip`, `?stop`~~")
        .setFooter('This bot was developed and maintained by Pixel#3015.')
        .setColor("#00ff00");
      var loadingEmbed = new Discord.MessageEmbed()
        .setDescription("Waiting...")
        .setColor("#ff0000")
      inter.reply({ embeds: [embed] });
      setTimeout(function(){
        inter.edit({ embeds: [loadingEmbed] });
      },2000)
    }
    
    // Announce command
    
    if (inter.commandName === "announce") {
      
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot || message.channel.type == "DM") return;
});
console.log("Active.");