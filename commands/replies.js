function replies(bot) {
    bot.on("message", msg => {
        let message = msg.content.toLowerCase();
    
        if (message == '🐟') { // Lahna's custom reply
            msg.channel.send('Liten bög snigel'); 
        } else if (message == 'rick') {
            msg.channel.send('stik');
        }
    });
}

module.exports = replies;
