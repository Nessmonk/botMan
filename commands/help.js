function help(config, message, Discord) {
    let embed = new Discord.RichEmbed()

    .setTitle('(Default prefix: ' + config.prefix + ')')
    .addBlankField(true)
    .addField("help", "Simple help command showing all commands available")
    .addField("info", "Shows your basic discord information")
    .setColor("#007D75")
    .addField("8ball", "Test your luck by asking the 8ball a question!")
    .addField("flip", "Flips a coin", true)
    .addField("dice", "Rolls a die", true)
    .addField("color", "Sends you a 100x100 picture with a random color.")
    .addField("uptime", "Check bot uptime.")
    .addField("invite", "sends an invite for this bot.")
    .addBlankField(true)
    .setFooter("Requested by " + message.author.username + '#' + message.author.discriminator)
    .setTimestamp();

    message.channel.send(embed);
}

module.exports = help;
