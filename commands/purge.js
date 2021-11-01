exports.run = async(Discord, client, message, args) => {
  if (message.member.hasPermission('DELETE_MESSAGES')) {
      var bulk = args.slice(0).join(" "); // args minus prefix which leaves you with the message to send.
      if(!args[0]) return message.reply("Yo, don't you know that you need to type more arguements?");
      message.reply("Bulk deleting messages...")
      message.channel.bulkDelete(bulk + 1)
      message.reply("Bulk deleted messages. (Please note, messages sent in this channel that lasted longer than 14 days cannot be deleted. This command is still experimental, so it is currently being worked on, please excuse the bugs.)")
      setTimeout(function(){message.channel.bulkDelete(2)},2000)
  } else {
      message.channel.send("When you realize you don't have permission to use this command...")
      
  }
}