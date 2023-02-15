module.exports = {
    name: 'owo',
    execute(message, args, buffer) {

        const substitutions = { 
            'r': 'w', 
            'R': 'W', 
            'l': 'w', 
            'L': 'W', 
            'na': 'nya', 
            'NA': 'NYA', 
            'qu':'qw', 
            'QU': 'QW',
            'has': 'haz',
            'have': 'haz', 
        };

        const faces = [
            " OwO",
            " owo",
            " UwU",
            " uwu",
            " :3",
            " :33",
            " :333",
            ' ( ´•̥̥̥ω•̥̥̥` )',
            ' ( ˘ ³˘)♥',
            ' ( ͡° ᴥ ͡°)',
            ' (^³^)',
            ' (´・ω・｀)',
            ' (ʘᗩʘ\')',
            ' (இωஇ )',
            ' (๑•́ ₃ •̀๑)',
            ' (• o •)',
            ' (•́︿•̀)',
            ' (⁎˃ᆺ˂)',
            ' (╯﹏╰）',
            ' (●´ω｀●)',
            ' (◠‿◠✿)',
            ' (✿ ♡‿♡)',
            ' (❁´◡`❁)',
            ' ( \'◟ \')',
            ' (人◕ω◕)',
            ' (；ω；)',
            ' (｀へ´)',
            ' ._.',
            ' :3c',
            ' :D',
            ' :O',
            ' :P',
            ' ;-;',
            ' ;3',
            ' ;_;',
            ' <{^v^}>',
            ' >_<',
            ' >_>',
            ' XDDD',
            ' \\°○°/',
            ' ^-^',
            ' ^_^',
            ' ^•ﻌ•^',
            ' x3',
            ' x3',
            ' xD',
            ' ÙωÙ',
            ' ʕʘ‿ʘʔ',
            ' ʕ•ᴥ•ʔ',
            ' ミ(．．)ミ',
            ' ㅇㅅㅇ',
            ' (＾ｖ＾)',
            ""
        ];

        if (typeof (buffer[buffer.length - 1]) == "undefined") {
            message.reply("Say something first!")
        } else {
            const output = buffer[buffer.length - 1].replace(
                new RegExp(Object.keys(substitutions).join('|'), 'g'), match => substitutions[match]
            ) + faces[Math.floor(Math.random() * faces.length)];

            message.reply(output);
        }

        return true;
    }
}