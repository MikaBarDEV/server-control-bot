module.exports = (client, mdb) =>{

console.log(`${client.user.tag} - is logged in`)
client.user.setActivity('my developer', {type: 'LISTENING'});

console.log('\nCurrent Guilds:')

client.guilds.cache.forEach(guild => {
  console.log(`${guild.name} | ${guild.id}`)
  require('./guildCreate.js')(client, mdb, guild)
})



}