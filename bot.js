const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('message', message => {
   var sender = message.author;
   var msg = message.content.toUpperCase();
   var prefix = '!>'
   //Commands
   if (msg === prefix + 'PING') {
      message.channel.send('Pong!')
   }
});

client.on('ready', () => {
    console.log('I am ready!');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
