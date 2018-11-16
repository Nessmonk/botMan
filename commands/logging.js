function logging(bot) {
    bot.on('guildMemberAdd', member => {
        const channel = member.guild.channels.find(ch => ch.name == 'log');
        if (!channel) return;
        channel.send(`Welcome to the server, ${member}`);
    });
    
    bot.on('guildMemberRemove', member => {
        const channel = member.guild.channels.find(ch => ch.name == 'log');
        if (!channel) return;
        channel.send(`Goodbye, ${member}`);
    });
}

module.exports = logging;