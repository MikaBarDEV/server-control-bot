module.exports = (client, mdb, message) =>{
if(!mdb.auth.userHasRoleInS_Server(client, mdb, '917044734369878076', message.author.id)) return mdb.error.sendEmbed(message, mdb, 'noPerms')

const embed = new mdb.Discord.MessageEmbed()
.setColor('#6eff41')
.setTitle(`OS Buttons Menu`)
.setDescription(`Please use the buttons below to navigate to the correct OS sub-function`)
.setTimestamp()
.setFooter('OS Menu')


const row1 = new mdb.Discord.MessageActionRow()
.addComponents(
  new mdb.Discord.MessageButton()
  .setCustomId('x')
  .setLabel('Performence: ')
  .setStyle('SECONDARY')
  .setDisabled(true)
)
.addComponents(
  new mdb.Discord.MessageButton()
  .setCustomId('os_ram')
  .setLabel('RAM Usage')
  .setStyle('SUCCESS')
)
.addComponents(
  new mdb.Discord.MessageButton()
  .setCustomId('os_cpu')
  .setLabel('CPU Data')
  .setStyle('SUCCESS')
)
.addComponents(
  new mdb.Discord.MessageButton()
  .setCustomId('os_networkInterfaces')
  .setLabel('Network Interfaces')
  .setStyle('SUCCESS')
)


const row2 = new mdb.Discord.MessageActionRow()
.addComponents(
  new mdb.Discord.MessageButton()
  .setCustomId('xx')
  .setLabel('Information: ')
  .setStyle('SECONDARY')
  .setDisabled(true)
)
.addComponents(
  new mdb.Discord.MessageButton()
  .setCustomId('os_homedir')
  .setLabel('Home Directory')
  .setStyle('SUCCESS')
)
.addComponents(
  new mdb.Discord.MessageButton()
  .setCustomId('os_hostname')
  .setLabel('Server Hostname')
  .setStyle('SUCCESS')
)




message.channel.send({ components: [row1, row2], embeds: [embed], ephemeral: true })

}