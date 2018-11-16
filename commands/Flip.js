function flip(message) {
    var flipNumber = Math.floor(Math.random() * 2);
    var result = '';
    switch(flipNumber) {
        case 0: 
            result = 'Heads';
            break;
        case 1:
            result = 'Tails';
            break;
    }   
    console.log(result + " has been flipped.")

    message.reply(result)
}

module.exports = flip;
