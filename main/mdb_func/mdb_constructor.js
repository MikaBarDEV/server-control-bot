module.exports = (AUTH_TOKEN) =>{

mdb = [];

mdb.fs = require('fs')
mdb.Discord = require('discord.js')
mdb.os = require("os");


mdb.auth = require('./funcs/auth.js')

mdb.command = require('./funcs/cmdsMatch.js')
mdb.error = require('./funcs/error_embeds.js')
mdb.premium = require('./funcs/premium.js')





console.log(`mdb Function initialized! Returned to web server startup`)
return mdb

}