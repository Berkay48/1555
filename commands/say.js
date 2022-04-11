const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run= async (client, message, args) => {       

let Tag = (ayarlar.tag)
let Etiket = (ayarlar.etikettag) 

   let TotalMember = message.guild.memberCount

          let Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
          let Taglı = message.guild.members.cache.filter(u => u.user.username.includes(Tag)).size;
          let Taglı2 = message.guild.members.cache.filter(u => u.user.username.includes(Tag2)).size;
          let Taglı3 = message.guild.members.cache.filter(u => u.user.username.includes(Tag3)).size;
          let Etiketiniz = message.guild.members.cache.filter(u => u.user.discriminator.includes(Etiket)).size;
          let toplamTag = Etiketiniz + Taglı + Taglı2 + Taglı3
          let Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
          let Boost = message.guild.premiumSubscriptionCount;
  
  
message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`
 <a:sonsuzlukkk:897075326046318593> Sunucumuzda toplam **${TotalMember}** kullanıcı bulunmaktadır.
 <a:sonsuzlukkk:897075326046318593> Sunucumuzda toplam **${Online}** aktif kullanıcı bulunmaktadır.
 <a:sonsuzlukkk:897075326046318593> Toplam **${toplamTag}** kişi tagımızda bulunuyor.
 <a:sonsuzlukkk:897075326046318593> Seste **${Voice}** kullanıcı bulunmaktadır.
 <a:sonsuzlukkk:897075326046318593> Sunucuya toplam **${Boost}** takviye yapılmıştır. 
`))



}
exports.config = {
    name: "halksdjal",
    guildOnly: true,
    aliases: ["halksdjal"]
}