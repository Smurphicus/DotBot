const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client(
    { intents: ["GUILD_MESSAGES", "GUILD_MEMBERS", "GUILDS"] }
);

// client.commands = new Discord.Collection();
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

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
    if (message.content.startsWith(config.PREFIX)) {
        const args = message.content.slice(config.PREFIX.length).split(" ");
        const command = args.shift().toLowerCase();

        if (commands[command]) {
            commands[command](message, args, messageBuffer);
        }

    }
    messageBuffer.push(message.content);
    messageBuffer.shift();

});
