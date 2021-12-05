const AUTH_TOKEN = 'DISCORD_TOKEN'

console.clear()
const mdb = require('./main/mdb_func/mdb_constructor.js')(AUTH_TOKEN)

require('./main/server.js')(AUTH_TOKEN)
require('./main/boot.js')(mdb, AUTH_TOKEN)