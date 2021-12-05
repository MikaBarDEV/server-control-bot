module.exports = (client, mdb, interaction) =>{
if(!mdb.auth.userHasRoleInS_Server(client, mdb, '917044734369878076', interaction.member.id)) return



if(interaction.customId == 'os_ram'){
title = `OS RAM Details:`
content = `Total RAM: \`${Math.round(mdb.os.totalmem() / (1024 * 1024))}\` MB \n Free RAM: \`${Math.round(mdb.os.freemem() / (1024 * 1024))}\` MB`
}


if(interaction.customId == 'os_cpu') content = `\`\`\`json\n${JSON.stringify(mdb.os.cpus())}\`\`\``; title = `OS CPU Details:`

if(interaction.customId == 'os_homedir') content = `\`${mdb.os.homedir()}\``; title = `OS Homedir Details:`

if(interaction.customId == 'os_hostname') content = `\`${mdb.os.hostname()}\``; title = `OS Hostname Details:`

if(interaction.customId == 'os_networkInterfaces') content = `\`\`\`${JSON.stringify(mdb.os.networkInterfaces())}\`\`\``; title = `OS Network Interfaces Details:`



const embed = new mdb.Discord.MessageEmbed()
.setColor('#6eff41')
.setTitle(title)
.setDescription(content)
.setTimestamp()


interaction.reply({ embeds: [embed], ephemeral: true })

}