module.exports = (mdb, AUTH_TOKEN) =>{

const { Client, Intents } = require('discord.js');

const intents = new Intents();
intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING);

const client = new Client({ intents: intents });

require('./events/.main.js')(client, mdb)

const TOKEN = process.env['BOT_TOKEN']
client.login(TOKEN);

}