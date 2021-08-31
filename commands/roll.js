exports.run = async(Discord, client, message, args) => {
 let replies = [":game_die: says 1", ":game_die: says 2.", ":game_die: says 3.", ":game_die: says 4.", ":game_die: says 5.", ":game_die: says 6."]
let result = Math.floor((Math.random() * replies.length));
let question =  args.slice(1).join(" ")
message.channel.send(replies[result])
}