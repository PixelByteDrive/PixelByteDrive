exports.run = async(Discord, client, message, args) => {
  if(!args[0]) return message.reply("An empty embed? Give me more information please.");
   
   let embed = args.slice(0).join(" "); // args minus prefix which leaves you with the message to send.
  
      var embedsssss = new Discord.MessageEmbed()
         .setTitle(embed)
         .setColor("#000000")                                            
     message.channel.send(embedsssss)
}