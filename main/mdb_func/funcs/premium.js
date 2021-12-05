function expireCheck(client, mdb, message){
const premium = mdb.fs.readFileSync(`./database/servers/${message.guild.id}/main/premium.txt`).toString()

if(premium == 'false'){var approved = false
return}


var expireDate = premium.split('||')
expireDate.shift()
var expireDate = expireDate.join('')

date = Date.now() / 1000

if(expireDate <= date){
var approved = false
mdb.fs.writeFileSync(`./database/servers/${message.guild.id}/main/premium.txt`, 'false')
}else{
var approved = true
}


return approved
}






module.exports = { expireCheck };