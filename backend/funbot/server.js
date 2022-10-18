// FunBot Source Code
var express = require("express");
var online = process.env.online;
var app = express();
app.listen(process.env.PORT2);
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.login(process.env.token);

client.on("ready", async () => {
  client.user.setPresence({
    activities: [
      {
        name: "no. | /about",
        type: "PLAYING",
      },
    ],
  });
  console.log(`bot is also online! ${client.user.tag}`);
  /* Template
  const help = {
    name: "help",
    description: "Presents a list of commands."
  };
  */
  const about = {
    name: "about",
    description: "Statistics and information about the bot.",
  };
  const rps = {
    name: "rps",
    description: "Rock, Paper, Scissors.",
  };
  const eightball = {
    name: "8ball",
    description: "Magic 8-Ball prediction.",
  };
  const coinflip = {
    name: "coinflip",
    description: "Flips a coin, with 50/50 chance of each result.",
  };
  const roll = {
    name: "roll",
    description: "Rolls a die, with a 1/6 chance of each result.",
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
    description: "Bans a user.",
  };

  // Command Creation
  const command1 = await client.guilds.cache
    .get("549036331372904478")
    .commands.create(announce);
  const command2 = await client.guilds.cache
    .get("549036331372904478")
    .commands.create(ban);
  const command3 = await client.guilds.cache
    .get("549036331372904478")
    .commands.create(about);
  const command4 = await client.guilds.cache
    .get("549036331372904478")
    .commands.create(rps);
  const command5 = await client.guilds.cache
    .get("549036331372904478")
    .commands.create(eightball);
  const command6 = await client.guilds.cache
    .get("549036331372904478")
    .commands.create(coinflip);
  const command7 = await client.guilds.cache
    .get("549036331372904478")
    .commands.create(roll);
});

client.on("interactionCreate", async (inter) => {
  const { commandName, options } = inter;
  if (inter.isCommand()) {
    // Announce command
    if (inter.commandName === "announce") {
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot || message.channel.type == "DM") return;
});
console.log("Active.");

/*
if (inter.commandName === "help") {
      
      var embed = new Discord.MessageEmbed()
        .setTitle('**Server Commands**')
        .setDescription(":newspaper: **Informational:** `?help`, `?invite`, `?about` \n \n :joy: **Cool Stuff:** `?rps`, `?8ball`, `?coinflip`, `?roll`, ~~`?find`,~~ `?embed`  \n \n :pencil: **Responsival:** `?suggest`, `?report`, `?feedback` \n \n ~~:hammer: **Moderation:** `?kick`, `?ban`, `?mute`, `?unban`, `?addrole`, `?removerole`~~ \n \n ~~:musical_note: **Musical:** `?play`, `?skip`, `?stop`~~")
        .setFooter('This bot was developed and maintained by Pixel#3015.')
        .setColor("GREEN");
      inter.reply({ embeds: [embed] });
    }
*/
