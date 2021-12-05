module.exports = (client, mdb, message) =>{

const prefix = mdb.fs.readFileSync(`./database/servers/${message.guild.id}/main/prefix.txt`).toString()

message.channel.send(`My prefix is: \`${prefix}\``)



}