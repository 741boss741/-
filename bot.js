const Discord = require('discord.js');
const client = new Discord.Client();
const botSettings = require("./botsettings.json")
const Discord = require("discord.js");
const prefix = botSettings.prefix;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
