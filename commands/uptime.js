function upTime(bot, message) {
    let uptime = Math.round(bot.uptime / 1000);
    let uptimeM = Math.floor(uptime / 60);
    let uptimeS = uptime - uptimeM * 60;
    
    console.log(bot.user.username + " has been up for " + uptimeM + " minutes and " + uptimeS + " seconds.");
    message.channel.send("I have been up for " + uptimeM + " minutes and " + uptimeS + " seconds!");
} 
module.exports = upTime;
