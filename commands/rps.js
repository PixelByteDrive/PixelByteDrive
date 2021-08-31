exports.run = async(Discord, client, message, args) => {
 let replies = ["Rock.", "Paper.", "Scissors."]
let result = Math.floor((Math.random() * replies.length));
let question =  args.slice(1).join(" ")
message.channel.send(replies[result])
}