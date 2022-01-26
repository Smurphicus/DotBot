const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json')

const client = new Discord.Client(
    { intents: ["GUILD_MESSAGES", "GUILD_MEMBERS", "GUILDS"] }
);

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on('ready', () => {
    console.log('Have you seen the movie Hackers?');
});

client.login(config.TOKEN);

let messageBuffer = new Array(10);

const commands = {
    'ping':'pong',
    'eep':'oop'//,
    // 'echo':messageBuffer[9]
}

// for (const file of commandFiles) {
//     const command = require(`./commands/${file}`);
//     // Set a new item in the Collection
//     // With the key as the command name and the value as the exported module
//     client.commands.set(command.data.name, command);
// }

client.on('messageCreate', async message => {
    if (message.author.bot) { return; }
    if (message.content.startsWith(config.PREFIX)) {
        let args = message.content.slice(config.PREFIX.length).toLowerCase().split(" ");
        message.reply(client.commands[args[0]]);
    } else {
        messageBuffer.push(message.content);
        messageBuffer.shift();
    }
});
