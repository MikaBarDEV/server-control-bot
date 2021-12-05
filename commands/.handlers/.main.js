module.exports = (client, mdb, message) =>{

require('./cmd_mods.js')(client, mdb, message)
require('./config.js')(client, mdb, message)
require('./moderation.js')(client, mdb, message)

if(message.content == `<@!${client.user.id}>`){
  require('../cmds/main/ping.js')(client, mdb, message)
}


}