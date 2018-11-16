function upTime(bot, message) {
    let uptime = Math.round(bot.uptime / 1000);  //Turns the miliseconds into seconds
    let uptimeM = Math.floor(uptime / 60);       //Turns the seconds into minutes
    let uptimeS = uptime - uptimeM * 60;         //Combines the minutes and seconds
    
    console.log(bot.user.username + " has been up for " + uptimeM + " minutes and " + uptimeS + " seconds.");
    message.channel.send("I have been up for " + uptimeM + " minutes and " + uptimeS + " seconds!");
} 
module.exports = upTime;