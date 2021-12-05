module.exports = (client, mdb, message) =>{
if(!mdb.auth.userHasRoleInS_Server(client, mdb, '917041229110317068', message.author.id)) return mdb.error.sendEmbed(message, mdb, 'noPerms')

const ping = Date.now() - message.createdTimestamp

const miliseconds = client.uptime
const date = new Date(miliseconds);
const uptime = date.getUTCHours()+" hours, "+date.getUTCMinutes()+" minutes and "+date.getUTCSeconds()+" second(s)";

const embed = new mdb.Discord.MessageEmbed()
.setColor('#6eff41')
.setTitle('Uptime:')
.setDescription(`🏓 - I'm now online for: \`${uptime}\`. \n And my current is ping: \`${ping} ms\` `)
.setTimestamp()

message.channel.send({ embeds: [embed], reply: { messageReference: message.id }})

}