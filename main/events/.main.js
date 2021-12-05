module.exports = (client, mdb) =>{

// Bot events
client.on('ready', () => {
  require('./ready.js')(client, mdb)
});

client.on("guildCreate", guild => {
  require('./guildCreate.js')(client, mdb, guild)
});


// Command Events
client.on('interactionCreate', interaction => {
  require('./interactionCreate.js')(client, mdb, interaction)
});

client.on("messageCreate", message => {
  require('./messageCreate.js')(client, mdb, message)
});


// Logging events
client.on('messageDelete', message => {
    require('./messageDelete.js')(client, mdb, message)
});

client.on("messageUpdate", function(oldMessage, newMessage){
    require('./messageUpdate.js')(client, mdb, oldMessage, newMessage)
});



}