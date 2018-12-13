const config = require("./config.json");
const Discord = require('discord.js');
const prefix = config.prefix;
let tinyurl = require('tinyurl');
let start = require('./app/start');
let help = require('./commands/help');
let info = require('./commands/info');
let eightBall = require('./commands/8ball');
let flip = require('./commands/Flip');
let diceRoll = require('./commands/dice');
let color = require('./commands/randomColor');
let upTime = require('./commands/uptime');
let replies = require('./commands/replies')
let logging = require('./app/logging');

const bot = new Discord.Client({
    disableEveryone: true
});

const log4js = require('log4js');
log4js.configure({
  appenders: { log: { type: 'file', filename: './app/logfile.log' } },
  categories: { default: { appenders: ['log'], level: 'info' } }
});
const logger = log4js.getLogger('log');

start(bot);

bot.on("message", async message => {
    if (message.author.bot) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLocaleLowerCase();
    args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    if (command == `${prefix}help`) {
        help(config, message, Discord)
    }

    if (command == `${prefix}info`) {
        info(message, Discord);
    }

    if (command == `${prefix}8ball`) {
        eightBall(message, logger);
    }

    if (command == `${prefix}flip`) {
        flip(message, logger);
    }

    if (command == `${prefix}dice`) {
        diceRoll(message, logger);
    }

    if (command == `${prefix}color`) {
        message.reply("https://via.placeholder.com/100/" + color.colorUrl());
    }

    if (command == `${prefix}uptime`) {
        upTime(bot, message, logger);
    }

    if (command == `${prefix}invite`) {
        let invite = await bot.generateInvite(["ADMINISTRATOR"]);

        tinyurl.shorten(invite, function(res) {
            message.channel.send(res);
        });
    }
});

replies(bot);

logging(bot);
  
bot.login(config.token);
