const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client(
    { intents: ["GUILD_MESSAGES", "GUILD_MEMBERS", "GUILDS"] }
);

const commands = {};

fs.readdirSync('./commands')
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
        const command = require(`./commands/${file}`);
        commands[command.name] = command.execute;
    });

client.on('ready', () => {
    console.log('Have you seen the movie Hackers?');
});

client.login(config.TOKEN);

let messageBuffer = new Array(10);

client.on('messageCreate', async message => {
    if (message.author.bot) { return; }

    if (config.DEBUG) {
        console.log(message.content);
    }

    if (message.content.startsWith(config.PREFIX)) {
        const args = message.content.slice(config.PREFIX.length).split(" ");
        const command = args.shift().toLowerCase();
        if (commands[command]) {
            if (config.DEBUG) {
                console.log("Command: " + command);
            }
            //command is called here
            const success = commands[command]({client, message, args, messageBuffer});
            if (!success) {
                message.reply("OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko boingo! The code monkeys at our headquarters are working VEWY HAWD to fix this!")
            }
        }

    } else {
        messageBuffer.push(message.content);
        messageBuffer.shift();
    }

});
