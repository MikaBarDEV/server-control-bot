module.exports = (AUTH_TOKEN) =>{

const express = require('express');
const app = express();
const port = 3000;

app.get('/replitPing', (req, res) => {
const token = process.env['PING_TOKEN']
if(req.query.payload == 'uptimeRobot:' + token) return res.send('The bot is online!')


});

app.listen(port, () => console.log(`Web Server Started!`));


}