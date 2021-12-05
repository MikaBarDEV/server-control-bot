module.exports = (client, mdb, guild) =>{

if(mdb.fs.existsSync(`./database/servers/${guild.id}/`)){
  console.log('> Database file did already exist')
}else{
// All Directories
var dir = `./database/servers/${guild.id}/main`
mdb.fs.mkdirSync(dir, { recursive: true })

var dir = `./database/servers/${guild.id}/logs`
mdb.fs.mkdirSync(dir, { recursive: true })

var dir = `./database/servers/${guild.id}/moderation/permissions`
mdb.fs.mkdirSync(dir, { recursive: true })

console.log('> Init dirs')
}

//// main

// Premium
var content = 'false'
if(!mdb.fs.existsSync(`./database/servers/${guild.id}/main/premium.txt`)) mdb.fs.writeFileSync(`./database/servers/${guild.id}/main/premium.txt`, content)

// Prefix
var content = 'sc!'
if(!mdb.fs.existsSync(`./database/servers/${guild.id}/main/prefix.txt`)) mdb.fs.writeFileSync(`./database/servers/${guild.id}/main/prefix.txt`, content)


//// moderation
var content = 'undefined'
if(!mdb.fs.existsSync(`./database/servers/${guild.id}/moderation/permissions`)){
mdb.fs.writeFileSync(`./database/servers/${guild.id}/moderation/permissions/tier_1.txt`, content)
mdb.fs.writeFileSync(`./database/servers/${guild.id}/moderation/permissions/tier_2.txt`, content)
mdb.fs.writeFileSync(`./database/servers/${guild.id}/moderation/permissions/tier_3.txt`, content)
mdb.fs.writeFileSync(`./database/servers/${guild.id}/moderation/permissions/tier_4.txt`, content)
}


//// Logs
var content = 'disabled'
if(!mdb.fs.existsSync(`./database/servers/${guild.id}/logs`)){
mdb.fs.writeFileSync(`./database/servers/${guild.id}/logs/del_msg.txt`, content)
mdb.fs.writeFileSync(`./database/servers/${guild.id}/logs/edit_msg.txt`, content)
}






}