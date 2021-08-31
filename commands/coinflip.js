exports.run = async(Discord, client, message, args) => {
 let replies = ["It landed on Heads!","It landed on Tails!"]
let result = Math.floor((Math.random() * replies.length));
let question =  args.slice(1).join(" ")
message.channel.send(replies[result])
}