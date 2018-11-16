function replies(bot) {
    bot.on("message", msg => {
        let message = msg.content.toLowerCase();
    
        if (message == 'ping') { 
            msg.reply('pong'); 
        } else if (message == 'dirk') {
            msg.reply('Dirk is stom');
        } else if (message == 'anime') {
            msg.reply('https://twist.moe/a/bokunopico/1');
        } else if (message == 'yeehaw') {
            msg.reply('end the pain please :cowboy::gun:')
        }
    });
}

module.exports = replies;