let color = require('./randomColor');

function info(message, Discord) {
    let ca = message.author.createdAt;

    let embed = new Discord.RichEmbed()
        .setColor(color.randomColor())
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
        .addField("Username", message.author.username, true)
        .addField("Registered", ca.toDateString(), true)
        if (message.channel.type !== 'dm'){
            let ja = message.member.joinedAt;
            embed.addField("Nickname", message.member.displayName, true)
            embed.addField("Joined at", ja.toDateString(), true)
        };
        embed.addField("Status", message.author.presence.status)
        .addField("Avatar link", message.author.displayAvatarURL)
        .setThumbnail(message.author.avatarURL)
        .addField("ID", message.author.id)
        .setFooter("Requested by " + message.author.username + '#' + message.author.discriminator)
        .setTimestamp();

    message.channel.send(embed);
}

module.exports = info;
