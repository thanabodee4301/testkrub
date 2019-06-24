const discord = require('discord.js');
const ezBot = new discord.Client();
const ytdl = require('ytdl-core');
const option = {
    seek:0, 
    volume:1
};

ezBot.on('ready', function(){
    console.log('เย้');
});
ezBot.on('message', function(message){
    if(message.content.toLocaleLowerCase().startsWith('!play')) {
        var openMusicThisChannel = message.guild.channels.find(channels => channels.name =='1');
        if(openMusicThisChannel){
            console.log('ok เจอห้องจ้า');
            var linkMusic = message.content.substr(6);
            console.log('linkMusic', linkMusic);
            openMusicThisChannel.join().then(conn=> {
                var playThisVideo = ytdl(linkMusic, {filter: 'audioonly'});
                var result= conn.playStream(playThisVideo,option);
            });
        }
    }
});

ezBot.login('NTkyNzM3Mzg3Mjg1NTc3NzU4.XRDr0A.V9W7_gvMMlf0aEow15OZtsOkHR0');