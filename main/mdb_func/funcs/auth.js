function userHasRoleInS_Server(client, mdb, Role_ID, User_ID){

var role = client.guilds.cache.get('916966237634985984').members.cache.find(u => u.id === User_ID.toString()).roles.cache.find(r => r.id === Role_ID.toString())

if(role) return true
if(!role) return false

}

module.exports = { userHasRoleInS_Server };