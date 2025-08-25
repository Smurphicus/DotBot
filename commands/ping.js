module.exports = {
    name: 'ping',
    execute({message}) {
        message.reply('pong');
        return true;
    }
}