function callLog(fs, message, logger) {
    let log = fs.readFileSync('./app/logfile.log', 'utf8');

    if (message.channel.type !== "dm") {
        logger.info(message.author.username + '#' + message.author.discriminator + ' requested logs in ' + message.guild.name); 
    }

    message.channel.send('```'+log+'```');
}

module.exports = callLog;