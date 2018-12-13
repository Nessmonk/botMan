function start(bot) {
    bot.on("ready", async () => {
        /* Sets the bot's username (Not nickname) */
        bot.user.setUsername("Botmonk");
        /* Sets the game the bot is playing */
        bot.user.setPresence({ game: { name: '>help for help'} });
        /* [online | dnd | idle | invisible] */
        bot.user.setStatus('idle');
        console.log('Bot is ready, and his name is:  ' + bot.user.username + "#" + bot.user.discriminator);
        console.log('Bot id is: ' + bot.user.id)
        /* Prints an invite link for the bot in the console */
        try {
            let link = await bot.generateInvite(["ADMINISTRATOR"]);
    
            console.log('Invite link is: ' + link);
        } catch (e) {
            console.log(e.stack);
        }
    });
}

module.exports = start;