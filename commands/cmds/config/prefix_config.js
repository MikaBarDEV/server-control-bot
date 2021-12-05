module.exports = (client, mdb, message, args) =>{
if(!mdb.premium.expireCheck(client, mdb, message)) return mdb.error.sendEmbed(message, mdb, 'premiumRequired')

if(!args[2]) return mdb.error.sendEmbed(message, mdb, 'invalidBody')


if(args[2] == 'get'){
const content = mdb.fs.readFileSync(`./database/servers/${message.guild.id}/main/prefix.txt`).toString()

const embed = new mdb.Discord.MessageEmbed()
.setColor('#00b9ff')
.setTitle(`Current Server Prefix:`)
.setDescription(`\`${content}\``)
.setTimestamp()
.setFooter('Current Prefix')

message.channel.send({ embeds: [embed] })

return
}


const content = args[2]
if(content.length >= 10) return mdb.errors.sendEmbed(message, mdb, 'invalidBody')

mdb.fs.writeFileSync(`./database/servers/${message.guild.id}/main/prefix.txt`, content)

const embed = new mdb.Discord.MessageEmbed()
.setColor('#00b9ff')
.setTitle(`Success!!`)
.setDescription(`The prefix is editted to be: \`${content}\``)
.setTimestamp()
.setFooter('Modified prefix')

message.channel.send({ embeds: [embed] })



}