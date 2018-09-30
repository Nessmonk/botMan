const config = require("./config.json");
const Discord = require('discord.js');
const prefix = config.prefix;
let color = require('./commands/randomColor');
let eightBall = require('./commands/8ball');
let coinflip = require('./commands/Flip');

const bot = new Discord.Client({
    disableEveryone: true
});

bot.on("ready", async () => {
    //bot.user.setUsername("Botmonk");
    bot.user.setPresence({ game: { name: '>help for help'} });
    bot.user.setStatus('idle'); /* [online | dnd | idle | invisible] */
    console.log('Bot is ready, and his name is:  ' + bot.user.username + "#" + bot.user.discriminator);
    console.log('Bot id is: ' + bot.user.id)
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log('Invite link is: ' + link);
    } catch (e) {
        console.log(e.stack);
    }
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLocaleLowerCase();
    
    args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    //HELP
    if (command == `${prefix}help`) {
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
        return;
    }

    //INFO
    if (command == `${prefix}info`) {
        let dr = message.author.createdAt;
        let dj = message.member.joinedAt;
        let embed = new Discord.RichEmbed()

            .setColor(color.randomColor())
            .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
            .addField("Username", message.author.username, true)
            .addField("Registered", dr.toDateString(), true)
            .addField("Nickname", message.member.displayName, true)
            .addField("Joined at", dj.toDateString(), true)
            .addField("Status", message.author.presence.status)
            .addField("Avatar link", message.author.displayAvatarURL)
            .setThumbnail(message.author.avatarURL)
            .addField("ID", message.author.id)
            .setFooter("Requested by " + message.author.username + '#' + message.author.discriminator)
            .setTimestamp();

        message.channel.send(embed);
        return;
    }

    //8BALL
    if (command == `${prefix}8ball`) {
        message.reply('The eight ball answered: ' + eightBall.eightBall());
    }

    //COINFLIP
    if (command == `${prefix}flip`) {
        message.reply(coinflip.flip());
    }

    //DICE
    if (command == `${prefix}dice`) {
        var dice = Math.floor(Math.random() * 6 + 1);

        console.log(message.author.username + '#' + message.author.discriminator + ' rolled a ' + dice + ' in ' + message.guild.name); 
        message.reply("you rolled a " + dice + "!");
    }

    //RANDOM COLOR
    if (command == `${prefix}color`) {
        message.reply("https://via.placeholder.com/100/" + color.colorUrl());
    }

    //UPTIME
    if (command == `${prefix}uptime`) {
        let uptime = Math.round(bot.uptime / 1000);  //Turns the miliseconds into seconds
        let uptimeM = Math.floor(uptime / 60);       //Turns the seconds into minutes
        let uptimeS = uptime - uptimeM * 60;         //Combines the minutes and seconds
        
        console.log(bot.user.username + " has been up for " + uptimeM + " minutes and " + uptimeS + " seconds.");
        message.channel.send("I have been up for " + uptimeM + " minutes and " + uptimeS + " seconds!");
    }

    //INVITE LINK
    if (command == `${prefix}invite`) {
        let invite = await bot.generateInvite(["ADMINISTRATOR"]);
        message.channel.send(invite);
    }

    //Message replies
    if (command == `${prefix}ping`){
        message.reply('pong');
    }

    if (command == `${prefix}yeehaw`){
        message.reply('end the pain please :cowboy::gun:')
    }

    bot.on('message', msg => {
        if (msg.content === 'ping') {
            msg.reply('pong');
        }

        if (msg.content === 'help') {
            msg.channel.send('nah');
        }
    });
});

bot.login(config.token);