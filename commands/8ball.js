function eightBall(message) {
    var randomNumber = Math.floor(Math.random() * 8);
    var answer = '';
    switch (randomNumber) {
        case 0:
            answer = 'It is certain';
            break;
        case 1:
            answer = 'It is decidedly so';
            break;
        case 2:
            answer = 'Cannot predict now';
            break;
        case 3:
            answer = 'Don\'t count on it';
            break;
        case 4:
            answer = 'My sources say no';
            break;
        case 5:
            answer = 'Outlook not so good';
            break;
        case 6:
            answer = 'Signs point to yes';
            break;
        case 7:
            answer = 'Better not tell you now.';
            break;
    }
    console.log('The eight ball answered: ' + answer);
    message.reply('The eight ball answered: ' + answer);
}

module.exports = eightBall;
