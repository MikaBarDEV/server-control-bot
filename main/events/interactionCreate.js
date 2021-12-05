module.exports = (client, mdb, interaction) =>{

console.log(`An interaction has been created by: ${interaction.user.tag} || ${interaction.user.id}`)

regex = new RegExp(`^(os_ram|os_cpu|os_homedir|os_hostname|os_networkInterfaces)$`, 'gi');

if(regex.test(interaction.customId)){
  require(`../../interactions/osUpdate_cmd.js`)(client, mdb, interaction)
}



}