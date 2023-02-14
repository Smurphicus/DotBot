module.exports = {
    name: 'ping',
    execute(message, args) {
        message.reply('pong');
        return true;
    }
}