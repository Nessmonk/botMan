# botMan

## Simple bot made by Nessmonk#7550
Created with Node.JS with Discord.Js, Nodemon and Discord commando.
Base prefix is ">", you can change that by going into config.json and changing the prefix to anything you want.
Most commands speak for themselves. Still going to add comments to code for readability.

## Getting the bot running locally.

 - git clone the repository.
 - Go to the directory in your terminal.
 - Type `npm install` in your terminal.
 - Create a file called `config.json` in the root directory of the bot.
 - Make a json object array in the `config.json` file with the values "token" and "prefix".
 - The file should look like this:

```
{
    "token": "YourTokenHere",
    "prefix": "YourPrefixHere"
}
```
 
 - Type `nodemon` in your terminal.
 - Congratulations, your bot is now running, don't forget to invite it to your server.

## Token

 - Go to [this website](https://discordapp.com/developers/applications/) (and log in).
 - Choose your existing application.
 - In the sidebar menu on the left, choose "Bot".
 - Click the big "Copy" button under the "Token" tab.
 - Paste the token in your config.json file!

## Commands

>help: Simple help command showing all available commands (manually added, no algorithm for whenever I add a command yet.)

>info: Shows you simple information about yourself (Username, Nickname, Status etc)

>8ball: Rolls the 8ball with a switch with 8 different answers.

>flip: Flips a coin with Math.Random 

>color: Creates a random hex code and adds that to a link so it displays the random color

>uptime: Checks the uptime of the bot

>invite: Creates an invite for the bot, could be shortened with goo.gl or bit.ly but cba to get an API key so I can do that.
