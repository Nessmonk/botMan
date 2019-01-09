function flip(message, logger) {
    var flipNumber = Math.floor(Math.random() * 2);
    var result = '';
    switch(flipNumber) {
        case 0: 
            result = 'Heads';
            break;
        case 1:
            result = 'Tails';
            break;
    }   
    logger.info(result + " has been flipped in " + message.guild.name)

    message.reply(result)
}

module.exports = flip;
