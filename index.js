const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client(
    { intents: ["GUILD_MESSAGES", "GUILD_MEMBERS", "GUILDS"] }
);

// client.commands = new Discord.Collection();
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on('ready', () => {
    console.log('Have you seen the movie Hackers?');
});

client.login(config.TOKEN);

let messageBuffer = new Array(10);

const commands = {
    'ping': (messages) => 'pong',
    'eep': (messages) => 'oop',
    'echo': (messages) => messages[messages.length-1]
}

client.on('messageCreate', async message => {
    if (message.author.bot) { return; }
    if (message.content.startsWith(config.PREFIX)) {
        let args = message.content.slice(config.PREFIX.length).toLowerCase().split(" ");
        message.reply(commands[args[0]](messageBuffer));
    } else {
        messageBuffer.push(message.content);
        messageBuffer.shift();
    }
});
