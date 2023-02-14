module.exports = {
    name: 'owo',
    execute(message, args, buffer) {

        const substitutions = { 'r': 'w', 'R': 'W', 'l': 'w', 'L': 'W', 'na': 'nya', 'NA': 'NYA', 'qu':'qw', 'QU': 'QW' };
        const faces = [" OwO", " owo", " UwU", " uwu", " :3", " :33", " :333", ""];

        if (typeof (buffer[buffer.length - 1]) == "undefined") {
            message.reply("Say something first!")
        } else {
            const output = buffer[buffer.length - 1].replace(
                new RegExp(Object.keys(substitutions).join('|'), 'g'), match => substitutions[match]
            ) + faces[Math.floor(Math.random() * faces.length)];

            console.log(output);
            message.reply(output);
        }

        return true;
    }
}