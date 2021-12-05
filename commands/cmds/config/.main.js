module.exports = (client, mdb, message) =>{
if(message.guild.ownerId != message.author.id) return mdb.error.sendEmbed(message, mdb, 'noPerms')
const args = message.content.split(' ')

if(args[1] == 'prefix'){
require('./prefix_config.js')(client, mdb, message, args)
}



}