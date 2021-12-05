module.exports = (client, mdb, message) =>{
if(!mdb.auth.userHasRoleInS_Server(client, mdb, '917041228745420871', message.author.id)) return mdb.error.sendEmbed(message, mdb, 'noPerms')




}