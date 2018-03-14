const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  
   bot.user.setGame("Niquer ta mere")
   bot.user.setAvatar('unnamed.jpg');
    console.log("Je suis connecté !")

 
})


bot.login('NDIyOTE4NTMyMzIyNDI2OTAx.DYlVBA.iX1z5i06EszVoT08ThMzU66FKUQ')
bot.on('message', message => {
    if (message.content === 'bombe') {
      message.reply('3')
      message.reply('2')
      message.reply('1')
      message.reply('booom')
   
          }
          if (message.content === 'lol') {
          message.reply('mdr c drôle')
          }
if(message.content === 'bvn!'){
    message.reply('BVN!')
    message.reply('BVN!')
    message.reply('BVN!')
    message.reply('BVN!')
    message.reply('BVN!')
    message.reply('BVN!')
    message.reply('BVN!')
    message.reply('BVN!')
    message.reply('lol')
}
bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur le discord de la pvpcubik vas dans le chanel recrutement tu serras mouve ' + member.displayName)
    }).catch(console.error)
    })
    
           })        
