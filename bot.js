const config = require("./config.json");
const Discord = require('discord.js');
const prefix = config.prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log('Bot is ready, and his name is:  ' + bot.user.username);
    
    try{
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }
   
});

bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;
    
    if (command === `${prefix}aboutme`) {
        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator}`)
        .setDescription("Fat **__BOYE__**")
        .setColor("#007D75")
        .setThumbnail(message.author.avatarURL)
        .addField("ID", message.author.id)
        .addField("Created At", message.author.createdAt)
        .setFooter("XD")
        .setTimestamp()
        ;

        message.channel.sendEmbed(embed);
    
        return;
        
        }

    if (command === `${prefix}flip`){
        var flip = Math.floor(Math.random() * 2 + 1);
        
                if (flip === 1) {
        
                    console.log("Tails");
        
                    message.reply("tails!");
        
                }
        
                else {
        
                    console.log("Heads");
        
                    message.reply("heads!");
        
                }
}

    if (command === `${prefix}mute`) {
        if(!message.member.hasPermission("ADINISTRATOR")) return message.channel.send("You have no permissions.");

         let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
         if(!toMute) return message.channel.send("You didn't mention anyone.");
        
         let role = message.guild.roles.find(r => r.name === "muted");
         if (!role) {
            try{
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
            } catch(e){
                console.log(e.stack);
            }
         }

         if(toMute.roles.has(role.id)) return message.channel.send("This person is already muted.");

         await toMute.addRole(role);
         message.channel.send("They have been muted!")

        return; 
    
        }
});

bot.login(config.token);
