function replies(bot) {
    bot.on("message", msg => {
        let message = msg.content.toLowerCase();
    
        if (message == 'ping') { 
            msg.reply('pong'); 
        }
    });
}

module.exports = replies;