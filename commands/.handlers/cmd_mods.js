module.exports = (client, mdb, message) =>{

mdb.command.match('cmd_mods/eval.js', 'eval|exec|execute|runCode|-e', client, mdb, message)
mdb.command.match('cmd_mods/ping.js', 'ping', client, mdb, message)
mdb.command.match('cmd_mods/uptime.js', 'uptime', client, mdb, message)
mdb.command.match('cmd_mods/os.js', 'os|stats', client, mdb, message)

}