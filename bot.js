const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "!>";

var fortunes = [
    "Yup"
    "Nope"
    "Maybe"
    "Die"
    "Fuck You"
    "Super Poop"
];

client.on('ready', () => {
    console.log('I am ready!');
});

//yooo commands
btoa.on("message", function(message){
     if (message.author.equals(bot.user)) return;

     if (!message.content.startWith(PREFIX)) return;

     var args = message.content.substring(PREFIX.lenth).split(" ");

     switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("I'm a super dope but This Not Your Job :stuck_out_tongue_winking_eye: !?");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can't Read That");
            break;
        default:
            message.channel.sendMessage("Die Noob Command is Not on Database :frog: !!")            
     }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
