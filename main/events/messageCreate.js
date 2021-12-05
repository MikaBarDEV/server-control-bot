module.exports = (client, mdb, message) =>{

console.log(`A message has been send by: ${message.author.tag} || ${message.author.id}`)

if(message.author.bot) return
if(message.webhookId) return
if(message.channel.type == 'dm') return

require('../../commands/.handlers/.main.js')(client, mdb, message)

}