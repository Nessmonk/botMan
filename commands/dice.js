function diceRoll(message, logger) {
    let dice = Math.floor(Math.random() * 6 + 1);

    if (message.channel.type !== "dm") {
        logger.info(message.author.username + '#' + message.author.discriminator + ' rolled a ' + dice + ' in ' + message.guild.name); 
    }
    message.reply("you rolled a " + dice + "!");
}

module.exports = diceRoll;
