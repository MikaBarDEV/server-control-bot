function sendEmbed(message, mdb, type = 'undefined', info = 'Not Provided'){

author = message.author
channel = message.channel

// Missing Perms
if(type == 'noPerms'){
var embed = new mdb.Discord.MessageEmbed()
.setColor('#ff0000')
.setTitle(':x: - Permissions Error!')
.setDescription('You haven\'t got permission to issue this command!')
.setTimestamp()
.setAuthor(author.tag, `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.jpeg`)
}

if(type == 'invalidBody'){
var embed = new mdb.Discord.MessageEmbed()
.setColor('#ff0000')
.setTitle(':x: - Invalid Body Form Provided')
.setDescription('You have provided 1 or more invalid parameter(s), please issue command again with correct parameters')
.setTimestamp()
.setAuthor(author.tag, `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.jpeg`)
}


if(type == 'premiumRequired'){
var embed = new mdb.Discord.MessageEmbed()
.setColor('#ff0000')
.setTitle(':x: - You can\'t use this function/ command!')
.setDescription('Sadly this server doesn\'t has any premium subscription. This means you can\'t use this function/ command!')
.setTimestamp()
.setAuthor(author.tag, `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.jpeg`)
}






channel.send({ embeds: [embed], reply: { messageReference: message.id }})
}

module.exports = { sendEmbed };