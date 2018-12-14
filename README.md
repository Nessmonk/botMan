# botMan

## Simple bot made by Nessmonk#7550
Created with Node.JS with Discord.Js, Nodemon and Discord commando.
Base prefix is ">", you can change that by going into config.json and changing the prefix to anything you want.
Most commands speak for themselves.

## Getting the bot running locally.

 - Download [Node.js](https://nodejs.org/en/)
 - Clone the repository. 
   With SSH: `git clone git@github.com:Nessmonk/botMan.git`.
   With HTTPS: `git clone https://github.com/Nessmonk/botMan.git`
 - Go to the directory in your terminal. `cd botMan`
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
 
 - Type `node bot.js` in your terminal.
 - Congratulations, your bot is now running, don't forget to invite it to your server.

## Token

 - Go to [this website](https://discordapp.com/developers/applications/) (and log in).
 - Choose your existing application.
 - In the sidebar menu on the left, choose "Bot".
 - Click the big "Copy" button under the "Token" tab.
 - Paste the token in your config.json file!

## Commands

>help: Simple help command showing all available commands.

>info: Shows you simple information about yourself (Username, Nickname, Status etc).

>8ball: Rolls the 8ball.

>flip: Flips a coin.

>color: Generates a random hex code and adds that to a link so it displays a random color.

>uptime: Checks the uptime of the bot.

>invite: Creates an invite for the bot, shortened with tinyurl.
