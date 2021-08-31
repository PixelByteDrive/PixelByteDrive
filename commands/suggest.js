exports.run = async(Discord, client, message, args) => {
  if(!args[0]) return message.reply("Yo, don't you know that you need to type more arguements?");
  
  let invite = await message.channel.createInvite({
    maxAge: 0  , 
    maxUses: 0 //maximum times it can be used
  })

   let suggestion = args.slice(0).join(" "); // args minus prefix which leaves you with the message to send.
   
   let sicon = client.user.displayAvatarURL();
   let aicon = message.author.displayAvatarURL();
  
   let suggestionEmbed = new Discord.MessageEmbed()
   .setAuthor(client.user.tag, client.user.displayAvatarURL())
   .setColor("BLUE")
   .setThumbnail(aicon)
   .addField("This suggestion was made by", message.author)
   .addField("The suggestion is", suggestion)
   .addField("It was sent in", message.guild.name)
   .addField("Invite link:", invite)
   .setTimestamp()
   
   
   let msg = await client.channels.cache.get(`584813369148571675`).send(suggestionEmbed).then(function(msg) {
     msg.react("❎");
     msg.react("✅");
     message.delete({timeout: 1000});
   }).catch(function(error) {
     
   });
   
   message.channel.send("Suggestion sent! Wait up to 24hrs please.")
}