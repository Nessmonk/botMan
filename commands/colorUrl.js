function colorUrl(message, logger) {
    var hex2 = '0123456789ABCDEF';
    var color2 = '';
    for (var i = 0; i < 6; i++) {
      color2 += hex2[Math.floor(Math.random() * 16)];
    }
    logger.info("Random color is: " + color2);

    message.reply("https://via.placeholder.com/100/" + color2);
}
  
module.exports = colorUrl;