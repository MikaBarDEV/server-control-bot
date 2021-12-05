module.exports = (client, mdb, message) =>{
if(!mdb.auth.userHasRoleInS_Server(client, mdb, '917041229110317068', message.author.id)) return mdb.error.sendEmbed(message, mdb, 'noPerms')


const embed = new mdb.Discord.MessageEmbed()
.setColor('#6eff41')
.setTitle('Ping, Pong!')
.setDescription(`🏓 - Latency is ${Date.now() - message.createdTimestamp}ms.`)
.setTimestamp()

message.channel.send({ embeds: [embed], reply: { messageReference: message.id }})

}