const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
});

client.once('ready', () => {
  console.log(`${client.user.tag} botu aktif!`);
});

client.on('guildMemberAdd', (member) => {
  const welcomeChannel = member.guild.channels.cache.get(process.env.KANAL);
  if (!welcomeChannel) return;

  // Tarih ve saati almak için Date objesini kullanıyoruz
  const now = new Date();
  const formattedDate = now.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });
  const formattedTime = now.toLocaleTimeString('tr-TR');

  welcomeChannel.send({
    content: `Hoşgeldin ${member} <@&1278431780671586404> `,
    embeds: [
      {
        description: `꒰:wood:꒱ -------✧---- ꒰♡꒱ ----✧------- ꒰:potted_plant:꒱\n✧˒˙˚•∘ ˖:herb:・V.E.N.O.M sunucusuna hoş geldiniz ☆\n∘˙˚˒☆ ・Etrafınıza bakmaya başlamadan önce lütfen bu kanallara göz atın. ꒰:basket:꒱˖˒\n✿ 𓂃˒:mushroom:.  https://discord.com/channels/1213531797925920768/1224039537123004601◞ ⁺ ˖˚:pancakes:・https://discord.com/channels/1213531797925920768/1240197068178456678 ・⪩⪨ :sunflower:⸜ ⸜ ıllı ・https://ptb.discord.com/channels/1213531797925920768/1224039991802597547 l ꒰:blossom:꒱ -------✧---- ꒰♡꒱ ----✧------- ꒰:pie:꒱ ☕️໑ 𓂃⊹ Katıldığınız için teşekkürler<3 ・░`,
        color: null,
        author: {
          name: "V.E.N.O.M",
        },
        image: {
          url: "https://i.pinimg.com/564x/14/1e/47/141e4786de4ee116cdda49be9253c922.jpg",
        },
        thumbnail: {
          url: "https://i.pinimg.com/564x/1f/71/63/1f71636b2c6b3c0a6740964aa511c4c1.jpg",
        },
        footer: {
          text: `Tarih: ${formattedDate} | Saat: ${formattedTime}`
        }
      }
    ],
  });
});

client.login(process.env.TOKEN);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot çalışıyor!');
});

app.listen(process.env.PORT, () => {
  console.log(`Sunucu ${process.env.PORT} portunda çalışıyor`);
});