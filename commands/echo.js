module.exports = {
    name: 'echo',
    execute({message, messageBuffer}) {
        console.log(messageBuffer[messageBuffer.length-1])
        if (typeof(messageBuffer[messageBuffer.length-1]) == "undefined") {
            message.reply("Say something first!")
        } else {
            message.reply(messageBuffer[messageBuffer.length-1]);
        }
        return true;
    }
}