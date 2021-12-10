const discord = require("discord.js");
const Client = new discord.Client({
  intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MEMBERS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.DIRECT_MESSAGES ],
  allowedMentions: { parse: ['users', 'roles'], repliedUser: true }
})

Client.on('ready', async () => {
  Client.user.setPresence({ activities: [{ name: "heck yeah, man!", type: "PLAYING" }] })
  console.log(`bot is also online! ${Client.user.tag}`);
  const data = {
    name: 'ping',
    description: 'Replies with Pong!',
  };
  const data2 = {
    name: 'addemoji',
    description: 'Adds an emoji to server, subject to admin approval.',
    permissions: ['ADMINISTRATOR'],
    options: [
      {
        name: 'link',
        description: 'The link to your emoji image.',
        required: true,
        type: ['STRING']
      },
      {
        name: 'emojiname',
        description: 'The name of the emoji.',
        required: true,
        type: ['STRING']
      }
    ]
  };
  const command1 = await Client.guilds.cache.get('612056333838975000')?.commands.create(data);
  const command2 = await Client.guilds.cache.get('612056333838975000')?.commands.create(data2);
})

Client.on('interactionCreate', async inter => {
  const { commandName, options } = inter
  if(inter.isCommand()) { 
   if(inter.commandName === 'ping') {
     await inter.reply("Pong!");
   } else if(inter.commandName === 'addemoji') {
     const link = options.getString('link');
     const emoname = options.getString('emojiname');
     await inter.guild.emojis.create(link, emoname).then(emoji => inter.reply(`Created new emoji with name ${emoji.name}. Daaaang maaaaan.`)).catch(console.error("That's an invalid link. You can do better than that!"));
   } 
  }
})

Client.on('messageCreate', async message => {
  if(message.author.bot || message.channel.type == 'DM') return;
  
  
})

Client.login(process.env.token2)