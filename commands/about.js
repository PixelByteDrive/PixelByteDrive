exports.run = async(Discord, client, message, args) => {
  var embedsssss = new Discord.MessageEmbed()
         .setTitle("**About FunBot.**")
         .setDescription("FunBot is an intuitive robot to power Discord Servers like a good child. The way we work is we build commands to bring your server to life! With FunBot's all new commands, you won't have to worry about missing out on the fun anymore! Simplify your server, your friends, your fans, and more! [Click here!](https://discordapp.com/oauth2/authorize?client_id=548990903776313356&scope=bot&permissions=8) For suggestions, say ?suggest")
         .setColor('GREEN')                                            
     message.channel.send(embedsssss)
}