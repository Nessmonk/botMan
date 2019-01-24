function replies(bot) {
    bot.on("message", msg => {
        let message = msg.content.toLowerCase();
    
        if (message == 'danid') { 
            msg.reply('Danique "stagiair bij google" de Jong van het Mediacollege Amsterdam locatie contactweg in de klas MD3B van de opleiding Media- en Applicatie development en lijdt aan een beginnende gokverslaving. :dani2:'); 
        } else if (message == 'xd') {
            msg.reply('sterf');
        } else if (message == 'ricos') {
            msg.reply('🎵VANDAAG IS ROOD! 🔥');
        } else if (message == 'ik schreeuw het van de toren') {
            msg.reply('ik schreeuw het van de daken')
        } else if (message == '/ban dani') {
            msg.reply('Banning @Limited_Dani from the server')
        } else if (message == 'keizer') {
            msg.reply('*ROT OP*')
        } else if (message == 'disapointed' || 'sad' || 'teleurstellend' || 'jammer'|| 'teleurgesteld' || 'teleurstellen' || 'helaas') {
            msg.reply('Dylanpointed! :disappointed:')
        } else if (message == 'sanna') {
            msg.reply('*Sanne')
        } else if (message == 'peterd') {
            msg.reply('"Dit is niet mijn probleem, Dit is een probleem voor Peter in de Toekomst" :peter:')
        } else if (message == 'tatu') {
            msg.reply('Tatu, tatu, daar komt de politie aan, tatu, tatu, hoor je de sirene gaan? Alle mensen aan de kant, want er is iets aan de hand.')
        } else if (message == 'markd') {
            msg.reply('Fuck front-end, fuck bootstrap, fuck foundation, fuck css, fuck sass, fuck less, fuck styling, fuck cols, fuck grids, fuck fuck fuck :pepeslap: :pepeslap: :pepeslap:')
        } else if (message == 'svod') {
            msg.reply('Hallo mijn naam is Zveau "Conversie Koning" Alvart. In de ochtend drink ik Chocomel. Tijdens de koffiepauze drink ik Chocomel. Wanneer het lunchtijd is, drink ik Chocomel. Mijn leven is Chocomel, ze noemen mij ook wel de Choccy Conversie Koning.')
        } else if (message == 'dyland') {
            msg.reply('Ik leef weer voor Manon. Voorbij zijn alle jaren, Waarin ik heb geloofd. Dat wij niet gelukkig waren. En nu het leven weer van ons is, Mijn hart sinds lange tijd weer vol is. Ben ik zo blij dat het begonnen is, Ik leef weer voor Manon. Manon, Je mag het weer proberen. Om hier te blijven staan, En mij te domineren. Ik heb teveel moeten wachten, Ik heb niet genoeg van al Manon\'s kuren. Dus is het tijd om met Manon te overnachten')
        } else if (message == 'marketing' || 'sea') {
            msg.reply(':seo:')
        } else if (message == 'ricod') {
            msg.reply('Ik film het voor het nageslacht')
        } 
    });
}

module.exports = replies;