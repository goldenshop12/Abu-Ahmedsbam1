const Discord = require('discord.js');
const client = new Discord.Client();
console.log("scrpit By Golden");


client.on("ready", () => {
let channel =     client.channels.get("510408997694603266")
setInterval(function() {
channel.send(`مياو ميااو مياااااااااااااااااااااااااااو مياو`);
}, 25)
})
 
 
client.login('NTEwMTUyNTk2MjYzMDEwMzI0.Dsb6oQ.X-Vy_F3LPZFDQgGDmbHfEaCFtKU');
