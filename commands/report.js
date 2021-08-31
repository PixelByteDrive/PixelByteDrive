exports.run = async(Discord, client, message, args) => {
  if(!args[0]) return message.reply("Yo, don't you know that you need to type more arguements?");
   
   let suggestion = args.slice(0).join(" "); // args minus prefix which leaves you with the message to send.
   
   let sicon = client.user.displayAvatarURL();
   let suggestionEmbed = new Discord.MessageEmbed()
   .setAuthor(client.user.tag, client.user.displayAvatarURL())
   .setColor("RED")
   .setThumbnail(sicon)
   .addField("BUG REPORT WITNESS:", message.author)
   .addField("Bug issues:", suggestion)
   .addField("It was sent in", message.guild.name)
   .setTimestamp()
   
   let msg = await client.channels.get(`584813387079221261`).send(suggestionEmbed).then(function(msg) {
     message.delete({timeout: 1000});
   }).catch(function(error) {
     console.log(error);
   });
   
   message.channel.send("Your notice was sent! Please wait up to 24 hours.")
}