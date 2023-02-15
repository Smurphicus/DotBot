module.exports = {
    name: 'cowsay',
    execute(message, args, buffer) {
        console.log(buffer[buffer.length - 1])
        if (typeof (buffer[buffer.length - 1]) == "undefined") {
            message.reply("Say something first!")
        } else {
            const cowMessage = '```' + bubbleMessage(
                buffer[buffer.length - 1]) + asciimals[Math.floor(Math.random() * asciimals.length)] + '```';
            message.reply(cowMessage);
        }
        return true;
    },
}

const asciimals = [
    `
    \\  ^__^
     \\ (oo)\\_______
       (__)\\       )\\/\\\\
           ||----w |
           ||     ||
    `,
    `
    \\   .--.
     \\ |o_o |
       |:_/ |
      //   \\ \\
     (|     | )
    /'\\_   _/\`\\
    \\___)=(___/
    `
    ,
    `
    \\    / <\`     '> \\
     \\  (  / @   @ \\  )
         \\(_ _\\_/_ _)/
       (\\ \`-/     \\-' /)
        "===\\     /==="
         .==')___(\`==.
          .='     \`=.
    `
]

function normalizeText(str) {
    const lines = wrapText(str, 24);
    const longestLineLength = Math.max(...lines.map(line => line.length));
    return lines.map(line => line.padEnd(longestLineLength));
}

function getBorder(lineCount, index) {
    if (lineCount === 1) {
        return ["<", ">"];
    } else if (index === 0) {
        return ["/", "\\"];
    } else if (index === lineCount - 1) {
        return ["\\", "/"];
    } else {
        return ["|", "|"];
    }
}

function bubbleMessage(text) {
    const bubble = [];
    const normalizedText = normalizeText(text);
    const borderSize = normalizedText[0].length;

    bubble.push("  " + "_".repeat(borderSize));

    for (let i = 0; i < normalizedText.length; i++) {
        const line = normalizedText[i];
        const border = getBorder(normalizedText.length, i);
        bubble.push(`${border[0]} ${line} ${border[1]}`);
    }

    bubble.push("  " + "‾".repeat(borderSize));

    return bubble.join("\n");
}

function wrapText(text, width) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    words.forEach((word) => {
        if ((currentLine + word).length > width) {
            lines.push(currentLine.trim());
            currentLine = '';
        }
        currentLine += `${word} `;
    });
    lines.push(currentLine.trim());
    return lines;
}
