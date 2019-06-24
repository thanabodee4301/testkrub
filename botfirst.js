const Discord = require('discord.js');
const ezbotkrub = new Discord.Client(); 
ezbotkrub.on('ready', () => {
  console.log('555+');
});

ezbotkrub.on('message', message => { 
  if (message.content === 'หวัดดี') {
    message.reply('5555+');
  }
});

ezbotkrub.login('NTkyNzM3Mzg3Mjg1NTc3NzU4.XRDr0A.V9W7_gvMMlf0aEow15OZtsOkHR0');