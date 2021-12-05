function match(path, commandTriggers, client, mdb, message){
const prefixes = mdb.fs.readFileSync(`./database/servers/${message.guild.id}/main/prefix.txt`).toString()

const regex = new RegExp(`^(${prefixes})(${commandTriggers})`, 'gi');

if(regex.test(message.content)){
  require(`../../../commands/${path}`)(client, mdb, message)
}

}

module.exports = { match };