function logging(bot, logger) {
    bot.on('guildMemberAdd', member => {
        const channel = member.guild.channels.find(ch => ch.name == 'log');
        if (!channel) return;
        logger.info(`${member} joined ` + member.guild + ". Guild id is " + member.guild.id);
        channel.send(`Welcome to the server, ${member}`);
    });
    
    bot.on('guildMemberRemove', member => {
        const channel = member.guild.channels.find(ch => ch.name == 'log');
        if (!channel) return;
        logger.info(`${member} left ` + member.guild + ". Guild id is " + member.guild.id);
        channel.send(`Goodbye, ${member}`);
    });
}

module.exports = logging;
