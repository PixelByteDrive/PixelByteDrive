exports.run = async (Discord, client, message, args) => {
  var embed = new Discord.MessageEmbed()
    .setTitle("**__Commands:__**")
    .setDescription(
      ":newspaper: **Informational:** `?help`, `?invite`, `?about` \n \n :joy: **Cool Stuff:** `?rps`, `?8ball`, `?coinflip`, `?roll`, ~~`?find`,~~ `?embed`  \n \n :pencil: **Responsival:** `?suggest`, `?report`, `?feedback` \n \n ~~:hammer: **Moderation:** `?kick`, `?ban`, `?mute`, `?unban`, `?addrole`, `?removerole`~~ \n \n ~~:musical_note: **Musical:** `?play`, `?skip`, `?stop`~~"
    )
    .setFooter(
      "©Copyright 2020 - System by Flxwer#5300. I Strikethroughs mean the command isn't available at the moment."
    )
    .setColor("GREEN");
  message.channel.send(embed);
};
