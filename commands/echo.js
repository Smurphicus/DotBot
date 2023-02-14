module.exports = {
    name: 'echo',
    execute(message, args, buffer) {
        console.log(buffer[buffer.length-1])
        if (typeof(buffer[buffer.length-1]) == "undefined") {
            message.reply("Say something first!")
        } else {
            message.reply(buffer[buffer.length-1]);
        }
        return true;
    }
}