const config = require("./config.json");
const Discord = require('discord.js');
const prefix = config.prefix;

const bot = new Discord.Client({
    disableEveryone: true
});

bot.on("ready", async () => {
    //When bot is live, send this message in the console.
    //bot.user.setUsername("Tobi");
    console.log('Bot is ready, and his name is:  ' + bot.user.username);

    //Give invite link for bot when bot is live
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch (e) {
        console.log(e.stack);
    }

});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    //HELP
    if (command === `${prefix}help`) {
        message.channel.send('(Default prefix: ' + config.prefix + ')' +
            "\r\n" +
            'x help: Simple help command showing all commands available' +
            "\r\n" +
            'x aboutme: Shows your basic discord information' +
            "\r\n" +
            'x 8ball: Test your luck by asking the 8ball closed questions!' +
            "\r\n" +
            'x flip: flips a coin' +
            "\r\n" +
            'x dice: rolls the dice' +
            "\r\n" +
            'x mute: mute some fat shit (no unmute function yet :))) )');
    }

    //Message replies

    bot.on('message', msg => {
        if (msg.content === 'ping') {
            msg.reply('pong');
        }
    });
    bot.on('message', msg => {
        if (msg.content === 'right?') {
            msg.channel.send('WRONG.');
        }
    });
    bot.on('message', msg => {
        if (msg.content === 'jesse') {
            msg.channel.send('You\'re a very nice person, good artist and great friend!');
        }
    });
    bot.on('message', msg => {
        if (msg.content === 'jacob') {
            msg.channel.send('You are a good son~~, I\'d fuck you nohomo~~');
        }
    });
    bot.on('message', msg => {
        if (msg.content === 'sky') {
            msg.channel.send('Swag, should be a crime, go to swag jail and doing some time');
        }
    });
    bot.on('message', msg => {
        if (msg.content === 'whats 9+10') {
            msg.channel.send('21');
        }
    });
    bot.on('message', msg => {
        if (msg.content === 'whats your favorite game?') {
            msg.channel.send('Meat Beat Mania');
        }
    });
    bot.on('message', msg => {
        if (msg.content === 'ness') {
            msg.channel.send('Do not use the Lord\'s name in vain. ');
        }
    });
    bot.on('message', msg => {
        if (msg.content === 'Sky') {
            msg.channel.send('Little girls like my style but don\'t call me a pedophile');
        }
    });
    bot.on('message', msg => {
        if (msg.content === 'ransco') {
            msg.channel.send('https://www.hentaihaven.org');
        }
    });
    
    //ABOUT ME

    if (command === `${prefix}aboutme`) {
        let embed = new Discord.RichEmbed()
            .setTitle('Enjoy your user info, ' + message.author.username + "!")
            .addBlankField(true)
            .addField("Username", message.author.username + '#' + message.author.discriminator)
            .addField("Avatar link", message.author.displayAvatarURL)
            .setColor("#22B4A1")
            .setThumbnail(message.author.avatarURL)
            .addField("ID", message.author.id)
            .addField("Created At", message.author.createdAt)
            .setFooter("Requested by " + message.author.username + '#' + message.author.discriminator)
            .setTimestamp();

        message.channel.send(embed);

        return;

    }

    //8ball
    if (command === `${prefix}8ball`) {
        var randomNumber = Math.floor(Math.random() * 8);
        var eightBall = '';
        switch (randomNumber) {
            case 0:
                eightBall = 'It is certain';
                break;
            case 1:
                eightBall = 'It is decidedly so';
                break;
            case 2:
                eightBall = 'Cannot predict now';
                break;
            case 3:
                eightBall = 'Don\'t count on it';
                break;
            case 4:
                eightBall = 'My sources say no';
                break;
            case 5:
                eightBall = 'Outlook not so good';
                break;
            case 6:
                eightBall = 'Signs point to yes';
                break;
            case 7:
                eightBall = 'Sure.';
                break;
        }
        console.log('The eight ball answered: ' + eightBall);
        message.reply('The eight ball answered: ' + eightBall);
    }

    //COINFLIP
    if (command === `${prefix}flip`) {
        var flip = Math.floor(Math.random() * 2 + 1);

        if (flip === 1) {

            console.log("Tails");

            message.reply("Tails!");

        } else {

            console.log("Heads");

            message.reply("Heads!");

        }
    }

    //DICE
    if (command === `${prefix}dice`) {
        var dice = Math.floor(Math.random() * 5 + 1);

        console.log('Someone rolled a ' + dice);

        message.reply("you rolled a " + dice + "!");
    }

    //MUTE
    if (command === `${prefix}mute`) {
        if (!message.member.hasPermission("ADINISTRATOR")) return message.channel.send("You have no permissions.");

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!toMute) return message.channel.send("You didn't mention anyone.");

        let role = message.guild.roles.find(r => r.name === "muted");
        if (!role) {
            try {
                role = await message.guild.createRole({
                    name: "Muted",
                    color: "#000000",
                    permissions: []
                });

                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
            } catch (e) {
                console.log(e.stack);
            }
        }

        if (toMute.roles.has(role.id)) return message.channel.send("This person is already muted.");

        await toMute.addRole(role);
        message.channel.send("GET NAE NAE'D NIGGA XDDD")

        return;

    }
});

bot.login(config.token);