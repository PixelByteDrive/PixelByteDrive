const discord = require("discord.js");
const Client = new discord.Client({
  intents: [
    discord.Intents.FLAGS.GUILDS,
    discord.Intents.FLAGS.GUILD_MEMBERS,
    discord.Intents.FLAGS.GUILD_MESSAGES,
    discord.Intents.FLAGS.DIRECT_MESSAGES,
  ],
  allowedMentions: { parse: ["users", "roles"], repliedUser: true },
});

Client.on("ready", async () => {
  Client.user.setPresence({
    activities: [
      {
        name: "ye",
        type: "PLAYING",
      },
    ],
  });
  console.log(`bot is also online! ${Client.user.tag}`);
  const data = {
    name: "currentmap",
    description: "Used to determine the current map.",
    options: [
      {
        name: "link",
        description: "The link to the current map.",
        required: true,
        type: ["STRING"],
      },
    ],
  };
  const data2 = {
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
  const data4 = {
    name: "serverrestart",
    description: "To announce server restarts.",
    options: [
      {
        name: "text",
        description: "The description of the restart announcement.",
        required: true,
        type: ["STRING"],
      },
    ],
  };
  const command1 = await Client.guilds.cache
    .get("928781472628887643")
    .commands.create(data);
  const command2 = await Client.guilds.cache
    .get("928781472628887643")
    .commands.create(data2);
  const command4 = await Client.guilds.cache
    .get("928781472628887643")
    .commands.create(data4);
});

Client.on("interactionCreate", async (inter) => {
  const { commandName, options } = inter;
  if (inter.isCommand()) {
    if (inter.commandName === "currentmap") {
      if (inter.channelId == "923758645601255495") {
        var currentmap = options.getString("link");
        var embedsssss = new discord.MessageEmbed()
          .setTitle("**Latest Map**")
          .setDescription("The current map on the server is " + currentmap)
          .setColor("BLUE");
        inter.reply({ embeds: [embedsssss] });
      } else {
        await inter.reply({ content: "Wrong channel.", ephemeral: true });
      }
    }
    if (inter.commandName === "serverrestart") {
      if (inter.channelId == "928784265561403453") {
        var text = options.getString("text");
        var embedsssss = new discord.MessageEmbed()
          .setTitle("**The server is restarting...**")
          .setDescription(text)
          .setColor("GREEN");
        inter.reply({ embeds: [embedsssss] });
      } else {
        await inter.reply({ content: "Wrong channel.", ephemeral: true });
      }
    }
    if (inter.commandName === "announce") {
      if (inter.channelId == "928784265561403453") {
        var currentmap = options.getString("text");
        var title = options.getString("title");
        var embedsssss = new discord.MessageEmbed()
          .setTitle("Announcement - " + title)
          .setDescription(currentmap)
          .setColor("GREEN");
        inter.reply({ embeds: [embedsssss] });
      } else {
        await inter.reply({ content: "Wrong channel.", ephemeral: true });
      }
    }
  }
});

Client.on("messageCreate", async (message) => {
  if (message.author.bot || message.channel.type == "DM") return;
});

Client.login(process.env.token2);
