// FunBot Source Code
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "Ping Received");
  response.sendStatus(200);
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

client.on("messageCreate", async (message) => {
  let prefix = "?";
  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();

  if (!message.content.startsWith(prefix)) return;

  try {
    let cmdFile = require(`~/commands/${cmd}.js`);
    cmdFile.run(Discord, client, message, args);
  } catch (err) {
    console.log(err);
  }
});
console.log("Active.");
