module.exports = (client, mdb, message) =>{
if(!mdb.auth.userHasRoleInS_Server(client, mdb, '917044734369878076', message.author.id)) return mdb.error.sendEmbed(message, mdb, 'noPerms')




}