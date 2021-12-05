module.exports = (client, mdb, message) =>{
if(!mdb.auth.userHasRoleInS_Server(client, mdb, '917004133196779540', message.author.id)) return mdb.error.sendEmbed(message, mdb, 'noPerms')




}