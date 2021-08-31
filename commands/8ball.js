exports.run = async(Discord, client, message, args) => {
   if(!args[1]) return message.reply("Umm, I am confused. What do you want me to answer?");
  
  let suggestion = args.slice(0).join(" ");
  
 let replies = ["No.", "Maybe.", "My sources says sure.", "Try again later, I probably can't reply.", "Nuh uh.", "Kinda.", "Hmm, dunno.","I'm confused, try again.", "Yeah, sure.", "No, I don't think so.", "Maybe, who knows?", "I'm being a bit fuzzy, say that again?"]
let result = Math.floor((Math.random() * replies.length));
let question =  args.slice(1).join(" ")
message.channel.send(replies[result])
}