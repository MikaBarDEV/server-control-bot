module.exports = (client, mdb, message) =>{

mdb.command.match('cmds/config/.main.js', 'config|setup', client, mdb, message)

}