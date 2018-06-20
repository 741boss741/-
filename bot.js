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

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    Let messageArray = message.content.split(" ");
    Let command = messageArray[0];
    Let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}userinfo`) {
        Let embed = new Discord.RichEmbed();
            .setAuthor(message.author.username)
            .setDescription("This is The user's info!")
            .setColor("RANDOM")
            .addField("Full Username", `${message.author.username}#${message.author.discriminato}`)
            .addField("ID", message.author.id)
            .addField("Created At", message.author.createdAt)
            .setFooter("This Dick Man Footer cool !")
            .setThumbnail(message.author.avatarURL);

        message.channel.sendEmbed(embed);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
