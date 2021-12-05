module.exports = (client, mdb, message) =>{
const authorizedUsers = mdb.fs.readFileSync('./database/users/evalPerms.txt').toString()

if(!authorizedUsers.includes(message.author.id)) return mdb.error.sendEmbed(message, mdb, 'noPerms')


function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
  else 
    return text
}

const args = message.content.split(' ')
if(!args[1]) return mdb.error.sendEmbed(message, mdb, 'invalidBody')
args.shift()
var code = args.join(' ')

try {
var evaled = eval(code);

if (typeof evaled !== "string") var evaled = require("util").inspect(evaled)

message.channel.send(`\`HTTP Status Code: 200\` \`\`\`js\n${clean(evaled)}\n\`\`\``)

} catch(err) {

message.channel.send(`\`HTTP Status Code 405\` \`\`\`xl\n${clean(err)}\n\`\`\``)

}


}