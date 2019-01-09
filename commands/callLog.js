function callLog(message, logger, readLastLines) {
    readLastLines.read('./app/logfile.log', 5).then((lines) => message.channel.send('```'+lines+'```'));

    if (message.channel.type !== "dm") {
        logger.info(message.author.username + '#' + message.author.discriminator + ' requested logs in ' + message.guild.name); 
    }
}

module.exports = callLog;