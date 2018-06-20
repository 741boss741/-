const botSettings = require("./botsettings.json")
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", () =?> {
    console.log('Bot is ready! ${bot.user.username}');
});

bot.login("botSettings.token");
