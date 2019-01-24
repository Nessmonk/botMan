function start(config, bot, logger) {
    bot.on("ready", async () => {
        bot.user.setUsername("Botmonk");
        bot.user.setPresence({ game: { name: config.prefix  + 'help for help'}, status: "dnd" });
        /* [online | dnd | idle | invisible] */
        logger.info('Bot with name ' + bot.user.username + "#" + bot.user.discriminator + ' and id ' + bot.user.id + ' is now live.');
        try {
            let link = await bot.generateInvite(["ADMINISTRATOR"]);
    
            console.log('Invite link is: ' + link);
        } catch (e) {
            logger.info(e.stack);
        }
    });
}

module.exports = start;