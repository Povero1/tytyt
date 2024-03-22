

const { Client, Intents, MessageEmbed, Interaction, MessageButton, MessageActionRow, Modal, WebhookClient, MessageSelectMenu, Collection, Permissions, MessageFlags } = require("discord.js");
const Discord = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, 32767]
});

client.setMaxListeners(0)





client.on("ready", () => {
  console.log(`Logged in as : ${client.user.username}`)
  client.user.setActivity(`# ~ POINT S`, { type: 'WATCHING' })
});




const db = require("pro.db")
db.backup("backup");

const staffManagerRole = "1214996059257053204"
const discorsLeader = "1152059482134814853"
const OfficialRole = "1163720392549072946"
const discordStaff = "1152236106973196370"

const developerId = "889994885212553257"
const bankid =  "946085504066158626"
let sellermention = '1163720412560113664'
const prefix = "$"
const lineLink = ""

//////////////
client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id == ``){

    let args = message.content.split(' ').slice(0).join(' ')

    let test = args.replaceAll("نيترو","نـيـتـر9").replaceAll("فيزا","فيـ ـزا").replaceAll("كريدت","كريـ ـدت").replaceAll("كرديت","كريـ ـدت").replaceAll("كاش","كـ ـاش").replaceAll("ستيم","ستـ ـيم").replaceAll("سيرفر","سيرفـ ـر").replaceAll("ديسكورد","ديسـ ـكورد").replaceAll("حسابات","7سابــات").replaceAll("اكونتات","اكـ ـونتات").replaceAll("بوستات","بوستـ ـات").replaceAll("تفعيل","تفـ ـعيل").replaceAll("نيتفليكس","نيتفلـ ـيكس").replaceAll("سبوتيفاي","سبوتـ ـيفاي").replaceAll("تيكتوك","تيكـ ـتوك").replaceAll("فيسبوك","فيسـ ـبوك").replaceAll("انستا","انسـ ـتا").replaceAll("توكنات","توكــnــات").replaceAll("فوتات","فوتـ ـات").replaceAll("بوتات","بوتـ ـات").replaceAll("كريبتو","كريبتـ ـو").replaceAll("عملات","عمـ ـلات").replaceAll("كود","كـ ـود").replaceAll("بوت","بـ9ت").replaceAll("اكس بوكس","اكسـ ـبوكس").replaceAll("فيز","فيـ ـز").replaceAll("موجود","موجـ ـود").replaceAll("اكونت","اكـ ونـ ت").replaceAll("متوفر","مـت9فر").replaceAll("سعر","سـ3ر").replaceAll("تيكت","تيـ ـكت").replaceAll("تكت","تـ كـ ـت").replaceAll("متابع","مـ ـتـابـع").replaceAll("حساب","7سـاب").replaceAll("بيع","بـ ـيع").replaceAll("اعضاء","اعـ ـضاء").replaceAll("اوتو","اوتـ ـو").replaceAll("اوفلاين","اوفـ ـلاين").replaceAll("اونلاين","اونـ ـلاين").replaceAll("تيك توك","تـ ـيك تـ ـوك") .replaceAll("وهمي","وهـ ـمي").replaceAll("استور","اسـت9ر").replaceAll("شاهد","شـ ـاهـ ـد").replaceAll("نوع","نـ ـوع").replaceAll("شوب","شـ9ب").replaceAll("تفاعل","تفـ ـاعـ ـل").replaceAll("لفل","لـ ـفـ ـل").replaceAll("ضمان","ضـ ـمان").replaceAll("محدوده","محـ ـدوده").replaceAll("فتره","فـ ـتره").replaceAll("ابدي","ابـ ـدي").replaceAll("سنه","سـ ـنه").replaceAll("شهر","شـ ـهر").replaceAll("شهور","شـ ـهور").replaceAll("اسبوع","اسـ ـبوع").replaceAll("انواع","انـ ـواع").replaceAll("انواع","انـ ـواع").replaceAll("جميع","جمـ ـيع").replaceAll("ديس","دي$$ـس").replaceAll("كوين","كويـ ـن").replaceAll("والت","والـ ـت") .replaceAll("سويت","سـ ـويـ ـت").replaceAll("اسعار","اس3ـار").replaceAll("ميمبر","ميـ ـمبر").replaceAll("سوشيال","شوشـ ـيال").replaceAll("خدمات","خدمـ ـات").replaceAll("ميديا","ميديـ ـا").replaceAll("توكن","تـ9كن") 

let embed = new MessageEmbed()
.setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setColor("#fc0101")
.setTimestamp()
.setImage(lineLink)
.setDescription(`
> **المنشور بعد التشفير : **

> **__${test}__**`)
    
  message.reply({ embeds: [embed]})
    
 }
});







  

  

client.on('messageCreate', (message) => {
  if (message.channel.name === 'ᔕ・اراء' && !message.author.bot) {
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setDescription(message.content)
.setImage(lineLink)
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setThumbnail(message.author.displayAvatarURL());

    message.channel.send({ embeds: [embed] }).then((sentMessage) => {
      sentMessage.react('1155923787641016391');
      sentMessage.react('1155923760763900075');
      sentMessage.react('1155923337453781022');
    });
  }
});


client.on('messageCreate', (message) => {
  if (message.channel.name === 'ᔕ・اقتراحات' && !message.author.bot) {
    message.react('✅');
    message.react('❎');
    message.channel.send(lineLink);
  }
});



client.on('messageCreate', async (message) => {
    if (message.content.startsWith(prefix + 'jj') && message.member.roles.cache.some(role => role.name === '♚ || Discord Owners :')) {
        const args = message.content.split(' ');
        const roleName = args[1];
        const roleColor = args[2];
        const mentionedUser = message.mentions.users.first();
        const mentionedMember = message.guild.members.cache.get(mentionedUser.id);
        const roleChannel = message.guild.channels.cache.find(channel => channel.name === 'logs');

        try {
            const role = await message.guild.roles.create({
                name: roleName,
                color: roleColor,
                permissions: [
                    'SEND_MESSAGES',
                    'ADD_REACTIONS',
                    'USE_EXTERNAL_EMOJIS',
                    'ATTACH_FILES',
                    'CHANGE_NICKNAME',
                    'CONNECT',
                    'SPEAK',
                    'MANAGE_THREADS',
                    'USE_EXTERNAL_STICKERS'
                ]
            });

            mentionedMember.roles.add(role);

            const logEmbed = new Discord.MessageEmbed()
                .setTitle('Role Created and Assigned')
                .setDescription(`Role: ${role}\nGiven by: <@${message.author.id}>\nGiven to: ${mentionedMember}`)
                .setColor(roleColor)
                .setTimestamp();

            roleChannel.send({ embeds: [logEmbed] });
            message.channel.send(`**Role ${role.name} created with color ${role.hexColor} and assigned to ${mentionedUser.username}
Don't Forget To thank Me :
$شكر <@${message.author.id}>**`);
        } catch (error) {
            console.error(error);
            message.channel.send('An error occurred while creating the role.');
        }
    }
});
    

client.on('messageCreate', (message) => {
    if (message.content.startsWith( prefix + 'cc')) {
        const args = message.content.split(' ');
        const colorName = args[1];

        let colorHexCode;

        switch (colorName.toLowerCase()) {
            case 'أخضر':
                colorHexCode = '#00ff00';
                break;
            case 'أحمر':
                colorHexCode = '#ff0000';
                break;
            case 'أزرق':
                colorHexCode = '#0000ff';
                break;
            case 'أسود':
                colorHexCode = '#000000';
                break;
            case 'أبيض':
                colorHexCode = '#ffffff';
                break;
            case 'أصفر':
                colorHexCode = '#ffff00';
                break;
            case 'بنفسجي':
                colorHexCode = '#800080';
                break;
            case 'برتقالي':
                colorHexCode = '#ffa500';
                break;
            case 'وردي':
                colorHexCode = '#ff69b4';
                break;
            case 'رمادي':
                colorHexCode = '#808080';
                break;
            // يمكنك إضافة المزيد من الألوان هنا
            default:
                colorHexCode = 'لون غير صالح';
        }

        message.channel.send(`Hex code للون ${colorName}: ${colorHexCode}`);
    }
});
            

client.on(`messageCreate`, Kimo => {
  const args = Kimo.content.trim().split(/ +/g);
  const command = args[0].slice().toLowerCase();

  if (command === prefix + `rol`) {
    const rolesList = [
      { name: '~POINT S', id: '1152049853212401717' },
      { name: '~PO PROFIT S', id: '1152050146557837352' },
      { name: '~PO EXTREEM S', id: '1152050392713138227' },
      { name: '~PO PERFECT S', id: '1152051023431614475' },
      { name: '~PO GOOD S', id: '1152051139366371459' },
      { name: '~PO DESIGNER S', id: '1152051350830600233' },
      { name: '~PO DEVELOPER S', id: '1152051512479064134' }
    ]; // قم بتعديل الأسماء والمعرفات حسب الرولات المحددة

    if (!Kimo.member.roles.cache.has("1152236106973196370"))/* ايدي الرول الادارة اللي تقدر تعطي الرولات*/  return Kimo.reply("ليس لديك صلاحيات لاستخدام الأمر");

    let user = Kimo.mentions.members.first();

    if (!user) return Kimo.reply("لم يتم عمل منشن للشخص");

    let roleOptions = '';

    rolesList.forEach((role, index) => {
      roleOptions += `${index + 1}. ${role.name}\n`;
    });

    Kimo.reply(`الرجاء اختيار الرول المطلوب من القائمة التالية:\n${roleOptions}`).then(() => {
      const filter = m => m.author.id === Kimo.author.id;
      Kimo.channel.awaitMessages({ filter, max: 1, time: 3000, errors: ['time'] })
        .then(collected => {
          let roleIndex = parseInt(collected.first().content) - 1;

          if (isNaN(roleIndex) || roleIndex < 0 || roleIndex >= rolesList.length) {
            return Kimo.reply("الرقم المدخل غير صحيح");
          }

          let role = Kimo.guild.roles.cache.get(rolesList[roleIndex].id);

          if (!role) return Kimo.reply("الرول غير موجود");

          let roleaaa = Kimo.guild.roles.cache.find(r => r == role);
          let done = roleaaa.id;

          user.roles.add(done).then(() => {
            return Kimo.reply(`**تم إعطاء الرول : <@&${done}> إلى : <@${user.id}>
لا تنسي قرأة القوانين  ووضع فيدباك عن : <@${admin.id}>**`);
          }).catch(e => {
            return console.log(`Missing Permissions`);
          });

          const roleslog = Kimo.guild.channels.cache.get('1163720743998197822');
          const admin = Kimo.author;
          roleslog.send(`تم إعطاء رول جديد!
الإداري: <@${admin.id}>
العضو: <@${user.id}>
الرول: <@&${done}>
التاريخ: <t:${Math.floor(Date.now() / 1000)}:d>`);
          roleslog.send(lineLink);
        })
        .catch(() => {
          return Kimo.reply('لم يتم اختيار رقم الرول في الوقت المحدد');
        });
    });
  }
});


client.on(`messageCreate`, Kimo => {
  const args = Kimo.content.trim().split(/ +/g);
  const command = args[0].slice().toLowerCase();

  if (command === prefix + `mr`) {
    const list = ['1163720411360546868','1163720410773336104','1163720409800261682','1163720408953000007','1163720407954763848','1163720407229141053','1163720406235090964']; // الرولات اللي الايداري يقدر يعطيها للعضو
    if (!Kimo.member.roles.cache.has("1163720388304453642"))/* ايدي الرول الادارة اللي تقدر تعطي الرولات*/  return Kimo.reply("ليس لديك صلاحيات لاستخدام الأمر");

    let user = Kimo.mentions.members.first();
    let role = Kimo.mentions.roles.first() || Kimo.guild.roles.cache.find(r => r.name === args.slice(2).join(" ")) || Kimo.guild.roles.cache.get(args[2]);

    if (!user) return Kimo.reply("لم يتم عمل منشن للشخص");
    if (!role) return Kimo.reply("الرول غير موجود");

    let roleaaa = Kimo.guild.roles.cache.find(r => r == role);
    let done = roleaaa.id;
    let aa = (list.some(amr => Kimo.content.toLowerCase().includes(amr)));

    if (aa) {
      user.roles.add(done).then(() => {
        return Kimo.reply(`**تم إعطاء الرول : <@&${done}> إلى : <@${user.id}>
لا تنسي قرأة القوانين ووضع فيدباك عن : <@${admin.id}>**`);
      }).catch(e => {
        return console.log(`Missing Permissions`);
      });
      const roleslog = Kimo.guild.channels.cache.get('1163720743998197822');
      const admin = Kimo.author;
      roleslog.send(`تم إعطاء رول جديد!
الإداري: <@${admin.id}>
العضو: <@${user.id}>
الرول: <@&${done}>
التاريخ: <t:${Math.floor(Date.now() / 1000)}:d>`);
      roleslog.send(lineLink);
    } else {
      return Kimo.reply("عفوًا، لا يمكنك إعطاء هذه الرتبة. ليس لديك الصلاحيات اللازمة.");
    }
  }
});
client.on(`messageCreate`, Kimo => {
  const args = Kimo.content.trim().split(/ +/g);
  const command = args[0].slice().toLowerCase();

  if (command === prefix + `nr`) {
    const list = ['1163720403437486141', '1163720402867064853']; // الرولات اللي الايداري يقدر يعطيها للعضو

    if (!Kimo.member.roles.cache.has("1163720376803668068"))/* ايدي الرول الادارة اللي تقدر تعطي الرولات*/  return Kimo.reply("ليس لديك صلاحيات لاستخدام الأمر");

    let user = Kimo.mentions.members.first();
        let role = Kimo.mentions.roles.first() || Kimo.guild.roles.cache.find(r => r.name === args.slice(2).join(" ")) || Kimo.guild.roles.cache.get(args[2]);

    if (!user) return Kimo.reply("لم يتم عمل منشن للشخص");
    if (!role) return Kimo.reply("لم يتم عمل منشن للرول");

    let roleaaa = Kimo.guild.roles.cache.find(r => r == role);
    let done = roleaaa.id;
    let aa = (list.some(amr => Kimo.content.toLowerCase().includes(amr)));

    if (aa) {
      user.roles.add(done).then(() => {
        return Kimo.reply(`**تم إعطاء الرول : <@&${done}> إلى : <@${user.id}>
لا تنسي قرأة القوانين ووضع فيدباك عن : <@${admin.id}>**`);
      }).catch(e => {
        return console.log(`Missing Permissions`);
      });
      const roleslog = Kimo.guild.channels.cache.get('1163720743998197822');
      const admin = Kimo.author;
      roleslog.send(`تم إعطاء رول نادر ⚠️
الإداري: <@${admin.id}>
العضو: <@${user.id}>
الرول: <@&${done}>
التاريخ: <t:${Math.floor(Date.now() / 1000)}:d>`);
      roleslog.send(lineLink);
    } else {
      return Kimo.reply("عفوًا، لا يمكنك إعطاء هذه الرتبة. ليس لديك الصلاحيات اللازمة.");
    }
  }
});





client.on('messageCreate', async (message) => {
  if (message.channel.id === '1163720684376174644') {
    setTimeout(() => {
      message.delete();
    }, 15000);
  }
});




client.on('messageCreate', message => {
  if (message.content.startsWith(prefix + 'بباات')) {

    const filter = m => m.author.id === message.author.id;
        if (message.channel.id !== '1163720684376174644') { 
      return message.reply('روم الطلبات هنا <#1163720684376174644> !');
        }
    message.channel.send(`<@${message.author.id}> **قم بارسال الطلب الان هنا !.**`).then(() => {
      message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
          const request = collected.first().content;

          const dropdown = new Discord.MessageActionRow()
            .addComponents(
              new Discord.MessageSelectMenu()
                .setCustomId('dropdown')
                .setPlaceholder('اختر نوع الطلب الخاص بك')
                .addOptions([
                  {
                    label: 'منتج',
                    emoji : '🛒',
                    description: 'لجعل طلبك يذهب الي روم طلبات المنتجات',
                    value: '1163720687266041896',
                  },
                  {
                    label: 'تصاميم',
                    emoji: '🖌️' ,
                    description: 'لجعل طلبك يذهب الي روم طلبات التصاميم',
                    value: '1163720689048617010',
                  },
                  {
                    label: 'برمجه',
                    emoji: '💻',
                    description: 'لجعل طلبك يذهب الي روم طلبات البرمجيات',
                    value: '1163720690726338620',
                  }
                ])
            );
          const embed7 = new Discord.MessageEmbed()
                   .setTitle('**نظام الطلبات**')
.setDescription(`**برجاء اختيار 
منتج 🛒 : سيتم ارسال طلبك الي روم طلبات المنتجات
 تصميم 🖌️ : سيتم إرسال طلبك الي روم طلبات التصاميم
برمجه 💻 : سيتم إرسال طلبك الي روم طلبات البرمجه**

**الطلب الخاص بك :**
\`\`\`${request} \`\`\``)
.setFooter(`#- Alx S 🎃`)


          message.channel.send({ content: `**<@${message.author.id}> مرحبا يرجي اختيار نوع طلبك .**`, components: [dropdown], embeds: [embed7]})
            .then(sentMessage => {
              const collector = sentMessage.createMessageComponentCollector({ filter: i => i.isSelectMenu() });

              collector.on('collect', interaction => {
                sentMessage.delete();

                const selectedOption = interaction.values[0];
                const selectedOptionLabel = interaction.component.label;
                const selectedOptionDescription = interaction.component.description;
                const selectedOptionChannel = interaction.guild.channels.cache.get(selectedOption);

                const targetChannel = selectedOptionChannel;
                const senderMention = interaction.user.toString();

                const optionEmbed = new Discord.MessageEmbed()
                  .setTitle('طلب جديد !')
                  .setDescription(`**صاحب الطلب**: ${senderMention}\n\n**الطلب**: 
\`\`\`${request}\`\`\``)
.setFooter(`#-Alx S 🎃`);
targetChannel.send(`<@&${sellermention}>`)
  
                targetChannel.send({ embeds: [optionEmbed]})
                  targetChannel.send(lineLink)
                  .then(() => {
                    message.reply('تم إرسال طلبك بنجاح!').then(sentMsg => {
                      setTimeout(() => {
                        sentMsg.delete();
                      }, 3000);
                  });
              });
              });
            });
    })
        
        .catch(() => {
          message.channel.send('لم ترسل طلبك في الوقت المحدد !.');
        });
    });
  }
});
    




    













/////////////
  

client.on('messageCreate', async (message) => {
  if (message.content.startsWith(prefix + 'cr')) {
    const mentionedUser = message.mentions.users.first();
    const userID = message.content.split(' ')[1];
    
    if (!mentionedUser && !userID) {
      message.channel.send('يجب عليك وضع منشن للشخص المراد صنع الروم له أو وضع الايدي الخاص به.');
      return;
    }
    
    const allowedRole = message.guild.roles.cache.find(role => role.name === 'र PO | Head Admin ₰');
    
    if (!message.member.roles.cache.has(allowedRole.id)) {
      message.channel.send('يجب أن تكون من طاقم الادارة الهيد استاف');
      return;
    }

    const member = mentionedUser ? message.guild.members.cache.get(mentionedUser.id) : message.guild.members.cache.get(userID);
    if (!member) {
      message.channel.send('لم يتم العثور على العضو المحدد.');
      return;
    }
    message.channel.send('**تم صنع الروم بنجاح ✅**')
    
    const channel = await message.guild.channels.create('☆・' + member.displayName, {
      type: 'text',
      parent: '1213591139530047508',
      permissionOverwrites: [
        {
          id: member.id,
          allow: ['SEND_MESSAGES'],
        },
        {
          id: message.guild.roles.everyone,
          deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
        },
      ],
    });

    const createdTimestamp = new Date().toLocaleString();
    const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleString();
    const embedMessage = new MessageEmbed()
      .setTitle('# ~ Haland Private')
      .setDescription(`**تم صنع الروم بنجاح ✅\n\nتم صنع الروم بواسطة الإداري: <@${message.author.id}>\nالعضو صاحب الروم: <@${member.id}>\n\nتم صنع الروم في: ${createdTimestamp}\n\nتاريخ انتهاء الروم: ${expirationDate}**`);

    await channel.send({ embeds: [embedMessage]})
      await channel.send(`${lineLink}`);

    const admin = message.author;
    const roomMention = channel.toString();
    const roomCreationMessage = `**تم إنشاء روم جديد بواسطة ${admin}.\nمالك الروم : <@${member.id}>\n\nمنشن للروم : ${roomMention}\n\nتم صنع الروم في: ${createdTimestamp}\nتاريخ انتهاء الروم: ${expirationDate}**`;
    
    const logChannel = message.guild.channels.cache.get('1152541117313728562');
    if (logChannel) {
      logChannel.send(roomCreationMessage)
  await logChannel.send(`${lineLink}`);
    }
  }
});


setTimeout(() => {
      channel.permissionOverwrites.edit(member.id, { SEND_MESSAGES: false });
      const expirationEmbed = new MessageEmbed()
        .setTitle('انتهت صلاحية الروم ⚠️')
        .setDescription(`**لقد انتهت صلاحية الروم الخاص بك في: ${expirationDate}\nحتي تستطيع النشر بها مجددا يرجي فتح تكت وتجديد الروم**`)
        setFooter(`# ~ POINT S`);
      channel.send({ embeds: [expirationEmbed] });
    }, 7 * 24 * 60 * 60 * 1000);


client.on('messageCreate', message => {
  if (message.content.startsWith(prefix + 'rn')) {
    if (!message.member.roles.cache.has(discorsLeader)) {
      return message.reply('ليس لديك صلاحية !');
    }

    const user = message.mentions.users.first();
    const targetChannel = message.mentions.channels.first();

    if (!user || !targetChannel) {
      return message.reply('يرجى منشن العضو والروم بشكل صحيح!');
    }
const startDateString = new Date().toLocaleString();
    const endDateString = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleString();
    targetChannel.permissionOverwrites.create(user.id, { SEND_MESSAGES: true })
      .then(permission => {
        const startDate = new Date();
        const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);

        const startDateString = startDate.toLocaleString();
        const endDateString = endDate.toLocaleString();

        permission.edit({ SEND_MESSAGES: false }, `تم انتهاء صلاحية الكتابة في الروم في ${endDateString}`)
          .then(() => {
            message.reply(`تم تجديد الروم للعضو : ${user} 
الروم : ${targetChannel} `);

            const admin = message.author;
            

            const embed = new Discord.MessageEmbed()
              .setTitle('تم تجديد الروم !')
              .setDescription(`
العضو صاحب الروم : ${user}

وقت الانتهاء : ${endDateString}

وقت صنع الروم : ${startDateString}

المسؤول : ${admin}.`)
              .setColor('#00ff00');

            targetChannel.send({ embeds: [embed] })
              targetChannel.send(lineLink)
              .catch(error => {
                console.error(error);
              });
          })
          .catch(error => {
            console.error(error);
            message.reply('حدث خطأ أثناء تعيين صلاحية الكتابة!');
          });
      });

    const logChannelId = '1152541117313728562';
    const logChannel = message.guild.channels.cache.get(logChannelId);
    const admin = message.author;
    if (logChannel) {
      const logEmbed = new Discord.MessageEmbed()  
        .setTitle('تم تحديث الروم')
        .setDescription(`تم تحديث الروم : ${targetChannel} 
        
العضو صاحب الروم : ${user}

وقت الانتهاء : ${endDateString}

وقت صنع الروم : ${startDateString}

المسؤول : ${admin}.`)
        .setColor('#00ff00');

      logChannel.send({ embeds: [logEmbed] })
        logChannel.send(lineLink)
        .catch(error => {
          console.error(error);
        });
    }
  }
  
});

setTimeout(() => {
      channel.permissionOverwrites.edit(member.id, { SEND_MESSAGES: false });
      const expirationEmbed = new MessageEmbed()
        .setTitle('انتهت صلاحية الروم ⚠️')
        .setDescription(`**لقد انتهت صلاحية الروم الخاص بك في: ${expirationDate}\nحتي تستطيع النشر بها مجددا يرجي فتح تكت وتجديد الروم**`)
        setFooter(`# ~ POINT S`);
      channel.send({ embeds: [expirationEmbed] });
    }, 7 * 24 * 60 * 60 * 1000);
//////////////















client.on("messageCreate", async message => {
if(message.content.startsWith(prefix+"setstatus")) { 
 const comp = new MessageActionRow()
 function newButton(style,customId,label){let styles = {
   azrq:"PRIMARY",rmade: "SECONDARY", 
   akdr:"SUCCESS",a7mr: "DANGER"}    
   let btn = new MessageButton().setStyle(styles[style])                        
   .setCustomId(customId).setLabel(label) 
   comp.addComponents(btn)           
   return btn;             
   }    
        let eme={
         description:"🟢 | online \n 🟡 | idle\n🔴 | dnd  "
        }
        newButton("rmade","onlinestatus","🟢")
        newButton("rmade","idlestatus","🟡")
        newButton("rmade","dndstatus","🔴")
        const sendstatu= await message.channel.send({embeds:[eme],components:[comp]})
        let filter = m => m.user.id === message.member.id;
        const c = sendstatu.createMessageComponentCollector({filter})
        c.on('collect',async(int)=>{
         if(int.isButton()) { 
            if(int.customId === 'onlinestatus') { 
                 await client.user.setStatus('online')
                 int.message.delete();
                 message.channel.send('**تم تعيين حالة البوت : 🟢**')
            } else if(int.customId === 'idlestatus') { 
             await client.user.setStatus('idle')
             int.message.delete();
             message.channel.send('**تم تعيين حالة البوت : 🟡**')
            } else if(int.customId === 'dndstatus') { 
             await client.user.setStatus('dnd')
             int.message.delete();
             message.channel.send('**تم تعيين حالة البوت : 🔴**')
            } 
         }
        })
    }
})



let autotax = ['1163720679783407707'];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(autotax.includes(message.channel.id)){

  var args = message.content.split(' ').slice(0).join(' ')
if(!args) return;
  
if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    
    let embed = new MessageEmbed()
      
.setAuthor(`ضرايب البروبوت`, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   
      
.addFields([
    {
    name: `المبلغ بالضريبة : `,
    value: `${tax}`
},
  {
    name: `قيمة الضريبة : `, 
    value: `${tax2}`
  }
])
      .setImage(lineLink)
        .setColor(message.guild.me.displayColor)
  .setTimestamp()
    
   message.reply({embeds: [embed]}).catch((err) => {
   console.log(err.message)
   });    
  }
}); 

///////////////

let autoline_channel = ['999945178670444595','999839417420218418','999839419647401984','999839418607218708','999839416199675934','999839420549169222','1145596879523041290','1163720672216883291','1176674570929963131','1176675973492658176'] // ايدي الرومات

client.on(`messageCreate`, async message => {
        if(message.channel.type === "DM"|| message.author.bot) return
        if(autoline_channel.includes(message.channel.id)) {
                message.channel.send({files : [lineLink]})
        }
})

///////////////

client.on('messageCreate', async (message) => {
  if (message.content === prefix + 'ping') {
    const member = message.member;
    const allowedRole = message.guild.roles.cache.find(role => role.name === '♛ || Discord Staff :');
    
    if (member.roles.cache.has(allowedRole.id)) {
     
      message.channel.sendTyping()


				const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId("1")
					.setLabel(`PONG!`)
					.setStyle('SUCCESS')
					.setDisabled(true)
					.setEmoji("😉")
			);
   let circles = {
      supa: "🤯",
      zap: "⚡",
      green: "🟢",
      yellow: "🟡",
      red: "🔴",
      ew: "💢"
  }

 let ping = client.ws.ping

    let embed = new Discord.MessageEmbed()
        .setTitle('🏓 Pong!')
        .setDescription(`${ping <= 20 ? circles.supa : ping <= 40 ? circles.zap : ping <= 150 ? circles.green : ping <= 300 ? circles.yellow : ping <= 750 ? circles.red : cirles.ew} | ${ping} ms`)
        .setColor('YELLOW')
        .setThumbnail("https://media.discordapp.net/attachments/866865312112967710/877406174658576404/11d800c7b4c405d96e8e412163727a89.png")
        .setFooter(`Status: ${ping <= 20 ? "Extremely good" : ping <= 40 ? "Very good" : ping <= 150 ? "good" : ping <= 300 ? "bad" : ping <= 750 ? "very bad" : "Extremely bad"}!`);
				message.reply(`wait ....`).then(msg => {  msg.edit({content: ` ` , embeds: [embed] , components: [row]})});
    } else {
      message.channel.send('أنت لا تمتلك الرتبة المسموحة لاستخدام هذا الأمر.');
    }
  }
});

///////////////
 
client.on("messageCreate", message => {
  if (message.content == prefix + "tyty") {

    if (message.member.permissions.has("ADMINISTRATOR")) {
      let embed = new Discord.MessageEmbed()
        .setDescription("**Choose to delete Ticket/ClosedTicket\n\nticket- \`:\` ✅\nclosed- \`:\` ❌**")
        .setColor("RANDOM")
      let row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
          .setLabel("ticket-")
          .setStyle("PRIMARY")
          .setCustomId("ticket"),
        new Discord.MessageButton()
          .setLabel("closed-")
          .setStyle("DANGER")
          .setCustomId("closed")
      )
      message.reply({ embeds: [embed], components: [row] }).then(m => {
        db.set(`m_${message.guild.id}`, m.id)
      })
    }
  }
});

client.on("interactionCreate", interaction => {
  if (interaction.isButton()) {
    if (interaction.customId == "ticket") {

      let message = db.get(`m_${interaction.guild.id}`)
      let m = interaction.channel.messages.cache.find(r => r.id == message)
      m.edit({ content: "** ✅ | The \"ticket-\" rooms have been successfully deleted .**", components: [], embeds: [] })

      interaction.guild.channels.cache.forEach(channel => {
        if (channel.name.startsWith("ticket-")) {
          channel.delete()
        }
      });
    }

    if (interaction.customId == "closed") {

      let message = db.get(`m_${interaction.guild.id}`)
      let m = interaction.channel.messages.cache.find(r => r.id == message)
      m.edit({ content: "** ✅ | The \"closed-\" rooms have been successfully deleted .**", components: [], embeds: [] })

      interaction.guild.channels.cache.forEach(channel => {
        if (channel.name.startsWith("closed-")) {
          channel.delete()
        }
      });
    }

  }
})
         

   

const obfuscator = require('javascript-obfuscator');

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ob') {
    if (!args.length) {
      return message.reply('Send Code to obfuscator and check dm');
    }
   message.delete()



    const code = args.join(' ');

    try {
      const obfuscatedCode = obfuscator.obfuscate(code).getObfuscatedCode();

      const user = await client.users.fetch(message.author.id);
      user.send(`Obfuscated code:\n\`\`\`js\n${obfuscatedCode}\`\`\`\nDont forget to rate Kimo`);
    } catch (err) {
      const user = await client.users.fetch(message.author.id);
      user.send('Erorr Please Check This Code , Check Dm');
    }
  }
});

     
    
                   


    

///////////////


client.on('messageCreate', async message => {
  if (message.content.startsWith(prefix + 'تشهير') && message.member.roles.cache.has(OfficialRole)) {
message.channel.send(`> __**الدلائل المطلوبه للتشهير بالنصاب وهي كالأتي**__ :

> ** \`-\` دليل اتفاق بينكم علي السلعه ( طلب من النصاب شراء السلعه )**
> ** \`-\` دليل انه نصب عليك ( بلكك او صار ما يرد )**
> ** \`-\` دليل تحويل الكرديت للنصاب ( من موقع بروبوت او الروم الي حولت فيه للشخص )**

**يفضل دليل التحويل من موقع بروبوت**
https://probot.io/transactions`)
  
  }});

///////////////
client.on('messageCreate', async message => {
  if (message.content.startsWith(prefix + 'قيمني') && message.member.roles.cache.has(discordStaff)) {
message.channel.send(` **كان معاك الاداري** <@${message.author.id}>
  **يرجئ تقييمي هنا** <#1143572724963352576>
  `)
  
  }});

///////////////



///////////////





      
///////////////

client.on('shardError', error => {
  console.error('A websocket connection encountered an error:', error);
});
client.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  const developer = client.users.cache.get(developerId);
  if (developer) {
    developer.send(`خطأ :\n\`\`\`${reason}\`\`\``)
      .catch(console.error);
  }
});
process.on('uncaughtException', error => {
  console.error('Uncaught Exception:', error);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

///////////////

client.on("messageCreate", async message => {
if(message.author.bot || !message.guild) return;
    if (message.content.startsWith(prefix + 'embed') || (message.content.startsWith(prefix + 'e'))) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
  return message.reply("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**"); 
}
if(!message.guild.me.permissions.has('ADMINISTRATOR')) {
  return message.reply("**للأسف انا لا امتلك صلاحية `ADMINISTRATOR`**");
}
      await message.channel.sendTyping();
let args = message.content.split(' ').slice(1).join(' ')
if (!args) return message.reply('**يرجى وضع النص أولاً .**')
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setDescription(`${args}`) 
   .setColor("EA3648") 
let attach = message.attachments.first();
if (attach) {
    embed.setImage(attach.proxyURL)
}
    message.channel.send({embeds: [embed]});
      await message.channel.stopTyping();
    }})

///////////////

client.on("messageCreate" , async message => {  
if(message.content.startsWith(prefix + "say")) {
if(!message.member.permissions.has("ADMINISTRATOR"))
if(!message.guild.me.permissions.has('ADMINISTRATOR')) {
  return message.reply("**للأسف انا لا امتلك صلاحية `ADMINISTRATOR`**");
          }
  await message.channel.sendTyping();
        let args = message.content.split(" ").slice(1).join(" ")
        if(!args) return message.reply("**يرجى وضع النص أولاً .**")
          message.delete()
          message.channel.send(`${args}`)
  await message.channel.stopTyping();
        }})


///////////////
let manshor;
let member;

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "منشور")) {
    if (message.member.roles.cache.some(r=> r.id == discorsLeader)) {

if(message.content.startsWith(prefix + "منشورات")) return false;
  
member = message.mentions.members.first()
      if (!member) return message.reply("** يرجى منشن صاحب المنشور أولاً !**")
manshor = message.content.split(" ").slice(2).join(" ");
  if (!manshor) return message.reply("** يرجى وضع المنشور أولاً !**")

let embed = new Discord.MessageEmbed()
      .setTitle(`** إختر نوع المنشن :**`)
      .setDescription(`** يرجى إختيار نوع المشنن المناسب : \`here\` أو \`everyone\`\n المنشور :\n\`${manshor}\`**`)
      .setColor("EA3648")
  let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("here")
        .setCustomId("menthere1")
        .setStyle("SECONDARY")
    )
  .addComponents(
   new Discord.MessageButton()
        .setLabel("everyone")
        .setCustomId("menteve1")
        .setStyle("SECONDARY")
    )

  message.reply({ embeds: [embed], components: [row] })
            }}});

client.on("interactionCreate", async interaction => {
  if (!interaction.isButton()) return;

 if (interaction.customId === "menthere1") {
    if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
    const message = await interaction.channel.messages.fetch(interaction.message.id); 

const heremanshor = `${manshor}\n@here`

    
let embed2 = new Discord.MessageEmbed()
      .setTitle(`** هل انت متأكد من إرسال المنشور ؟**`)
  .setDescription(`** يرجى الإستجابة مع الأزرار بـ \`إرسال\` أو \`إلغاء\` ..\n المنشور :\n\`${heremanshor}\n\nتواصل مع : ${member}\`**`)
      .setColor("EA3648")
  let row2 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("إرسال")
        .setCustomId("completeid1")
        .setStyle("SUCCESS")
    )
  .addComponents(
   new Discord.MessageButton()
        .setLabel("إلغاء")
        .setCustomId("cancelid1")
        .setStyle("DANGER")
    )
    
    message.edit({ embeds: [embed2], components: [row2] });
      } else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
    }
  } else if (interaction.customId === "menteve1") {
    if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
    const message = await interaction.channel.messages.fetch(interaction.message.id); 

const evemanshor = `${manshor}\n@everyone`

    
let embed2 = new Discord.MessageEmbed()
      .setTitle(`** هل انت متأكد من إرسال المنشور ؟**`)
  .setDescription(`** يرجى الإستجابة مع الأزرار بـ \`إرسال\` أو \`إلغاء\` ..\n المنشور :\n\`${evemanshor}\n\nتواصل مع : ${member}\`**`)
      .setColor("EA3648")
  let row2 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("إرسال")
        .setCustomId("completeid5")
        .setStyle("SUCCESS")
    )
  .addComponents(
   new Discord.MessageButton()
        .setLabel("إلغاء")
        .setCustomId("cancelid5")
        .setStyle("DANGER")
    )
    
    message.edit({ embeds: [embed2], components: [row2] });
      } else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
    }
  }
});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "cancelid1") {
if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
  
let embed3 = new Discord.MessageEmbed()
  .setColor(`EA3648`)
  .setDescription(`** تم إلغاء إرسال هذا المنشور .
 بواسطة :
${interaction.member}
**`)

message.edit({ embeds: [embed3], components: [] });
} else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
}
}});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "cancelid5") {
if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
  
let embed3 = new Discord.MessageEmbed()
  .setColor(`EA3648`)
  .setDescription(`** تم إلغاء إرسال هذا المنشور .
 بواسطة :
${interaction.member}
**`)

message.edit({ embeds: [embed3], components: [] });
} else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
}
}});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "completeid1") {
if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
const now = new Date();
  const ManshoratChannel = client.channels.cache.get('1213592288383602729');
  const ManshoratLog = interaction.guild.channels.cache.get('1213592288383602729');

  const memhere = `${member}`
  const manshorhere = `${manshor}\n\nتواصل مع : ${memhere}\n@here منشور مدفوع ليس لنا علاقه ب الي يصير بينكم `
  
let embed5 = new Discord.MessageEmbed()
  .setColor(`EA3648`)
  .setDescription(`** تم إرسال هذا المنشور إلى ${ManshoratChannel}
 بواسطة :
${interaction.member}
**`)

message.edit({ embeds: [embed5], components: [] });

  await ManshoratChannel.send(`${manshorhere}`);
await ManshoratChannel.send(`${lineLink}`)

await ManshoratLog.send(`** المنشور :\n\`${manshor}\`\n المنشن :\nhere\n المشرف المسؤول :\n${interaction.member}\n صاحب المنشور :\n${memhere}\n تاريخ المنشور : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
  await ManshoratLog.send(`${lineLink}`)
  
} else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
}
}});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "completeid5") {
if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
const now = new Date();
  const ManshoratChannel2 = client.channels.cache.get('1213592288383602729');
  const ManshoratLog2 = interaction.guild.channels.cache.get('1213592288383602729');

  const memeve = `${member}`
  const manshoreve = `${manshor}\n\nتواصل مع : ${memeve}\n@everyone`
  
let embed5 = new Discord.MessageEmbed()
  .setColor(`EA3648`)
  .setDescription(`** تم إرسال هذا المنشور إلى ${ManshoratChannel2}
 بواسطة :
${interaction.member}
**`)

message.edit({ embeds: [embed5], components: [] });

  await ManshoratChannel2.send(`${manshoreve}`);
await ManshoratChannel2.send(`${lineLink}`)

await ManshoratLog2.send(`** المنشور :\n\`${manshor}\`\n المنشن :\neveryone\n المشرف المسؤول :\n${interaction.member}\n صاحب المنشور :\n${memeve}\n تاريخ المنشور : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
  await ManshoratLog2.send(`${lineLink}`)
  
} else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
}
}});

/////////////// 

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "اعلان")) {
    if (message.member.roles.cache.some(r=> r.id == discorsLeader)) {

if(message.content.startsWith(prefix + "اعلانات")) return false;
  
member = message.mentions.members.first()
      if (!member) return message.reply("** يرجى منشن صاحب الاعلان أولاً !**")
manshor = message.content.split(" ").slice(2).join(" ");
  if (!manshor) return message.reply("** يرجى وضع الاعلان أولاً !**")

let embed = new Discord.MessageEmbed()
      .setTitle(`** إختر نوع المنشن :**`)
      .setDescription(`** يرجى إختيار نوع المشنن المناسب : \`here\` أو \`everyone\`\nالاعلان :\n\`${manshor}\`**`)
      .setColor("EA3648")
  let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("here")
        .setCustomId("adhere")
        .setStyle("SECONDARY")
    )
  .addComponents(
   new Discord.MessageButton()
        .setLabel("everyone")
        .setCustomId("adeve")
        .setStyle("SECONDARY")
    )

  message.reply({ embeds: [embed], components: [row] })
            }}});

client.on("interactionCreate", async interaction => {
  if (!interaction.isButton()) return;

 if (interaction.customId === "adhere") {
    if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
    const message = await interaction.channel.messages.fetch(interaction.message.id); 

const heremanshor = `@here\n${manshor}`

    
let embed2 = new Discord.MessageEmbed()
      .setTitle(`** هل انت متأكد من إرسال الاعلان ؟**`)
  .setDescription(`** يرجى الإستجابة مع الأزرار بـ \`إرسال\` أو \`إلغاء\` ..\n الاعلان :\n\`${heremanshor}**`)
      .setColor("EA3648")
  let row2 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("إرسال")
        .setCustomId("adhcompleteid")
        .setStyle("SUCCESS")
    )
  .addComponents(
   new Discord.MessageButton()
        .setLabel("إلغاء")
        .setCustomId("adhcancelid")
        .setStyle("DANGER")
    )
    
    message.edit({ embeds: [embed2], components: [row2] });
      } else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
    }
  } else if (interaction.customId === "adeve") {
    if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
    const message = await interaction.channel.messages.fetch(interaction.message.id); 

const evemanshor = `@everyone\n${manshor}`

    
let embed2 = new Discord.MessageEmbed()
      .setTitle(`** هل انت متأكد من إرسال الاعلان ؟**`)
  .setDescription(`** يرجى الإستجابة مع الأزرار بـ \`إرسال\` أو \`إلغاء\` ..\n الاعلان :\n\`${evemanshor}**`)
      .setColor("EA3648")
  let row2 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("إرسال")
        .setCustomId("adecompleteid")
        .setStyle("SUCCESS")
    )
  .addComponents(
   new Discord.MessageButton()
        .setLabel("إلغاء")
        .setCustomId("adecancelid")
        .setStyle("DANGER")
    )
    
    message.edit({ embeds: [embed2], components: [row2] });
      } else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
    }
  }
});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "adhcancelid") {
if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
  
let embed3 = new Discord.MessageEmbed()
  .setColor(`EA3648`)
  .setDescription(`** تم إلغاء إرسال هذا الاعلان .
 بواسطة :
${interaction.member}
**`)

message.edit({ embeds: [embed3], components: [] });
} else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
}
}});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "adecancelid") {
if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
  
let embed3 = new Discord.MessageEmbed()
  .setColor(`EA3648`)
  .setDescription(`** تم إلغاء إرسال هذا الاعلان .
 بواسطة :
${interaction.member}
**`)

message.edit({ embeds: [embed3], components: [] });
} else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
}
}});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "adhcompleteid") {
if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
const now = new Date();
  const adChannel = client.channels.cache.get('1216385511120437309');
  const adLog = interaction.guild.channels.cache.get('1216385511120437309');

  const memhere = `${member}`
  const manshorhere = `@here\n${manshor}\nاعلان مدفوع فقط تبي مثله حياك <#1143583321960501248>`
  
let embed5 = new Discord.MessageEmbed()
  .setColor(`EA3648`)
  .setDescription(`** تم إرسال هذا الاعلان إلى ${adChannel}
 بواسطة :
${interaction.member}
**`)

message.edit({ embeds: [embed5], components: [] });

  await adChannel.send(`${manshorhere}`);
await adChannel.send(`${lineLink}`)

await adLog.send(`** الاعلان :\n\`${manshor}\`\n المنشن :\nhere\n المشرف المسؤول :\n${interaction.member}\n صاحب الاعلان :\n${memhere}\n تاريخ الاعلان : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
  await adLog.send(`${lineLink}`)
  
} else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
}
}});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "adecompleteid") {
if (interaction.member.roles.cache.some((role) => role.id === discorsLeader) || interaction.member.permissions.has('ADMINISTRATOR')) {
const message = await interaction.channel.messages.fetch(interaction.message.id);
const now = new Date();
  const adChannel2 = client.channels.cache.get('1216385511120437309');
  const adLog2 = interaction.guild.channels.cache.get('1216385511120437309');

  const memeve = `${member}`
  const manshoreve = `@everyone\n${manshor}\nاعلان مدفوع فقط تبي مثله حياك <#1143583321960501248>`
  
let embed5 = new Discord.MessageEmbed()
  .setColor(`EA3648`)
  .setDescription(`** تم إرسال هذا الاعلان إلي ${adChannel2}
 بواسطة :
${interaction.member}
**`)

message.edit({ embeds: [embed5], components: [] });

  await adChannel2.send(`${manshoreve}`);
await adChannel2.send(`${lineLink}`)

await adLog2.send(`** الاعلان :\n\`${manshor}\`\n المنشن :\neveryone\n المشرف المسؤول :\n${interaction.member}\n صاحب الاعلان :\n${memeve}\n تاريخ الاعلان : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
  await adLog2.send(`${lineLink}`)
  
} else {
      interaction.reply({ content: `** لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
}
}});



///////////////

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "staff-role")) {
    if (message.member.permissions.has("ADMINISTRATOR")) {

      let r = message.content.split(" ").slice(1).join(" ")
      let role = message.guild.roles.cache.find(r => r.id == r)
      if (!r) {
        if (!role) {
          if (isNaN(r)) {
            message.reply("> **Error : Please put the rank ID**")
          }
        }
      }
      db.set(`role_${message.guild.id}`, r)
      message.reply(`> **تم تعيين رتبة <@&${r}> مستخدم لـ زر الكلايم .**`)
    }
  }
});

client.on("channelCreate", channel => {
  if (channel.name.startsWith("ticket-")) {
    let embed = new Discord.MessageEmbed()
      .setDescription("**إضغط على الزر لتصبح مسؤول التذكرة**")
      .setColor("EA3648")
    let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("Claim")
        .setCustomId("idk")
        .setStyle("SECONDARY")
    )
    setTimeout(() => {
      channel.send({ embeds: [embed], components: [row] }).then(m => db.set(`message_${channel.id}`, m.id))

    }, 1000);
  }
});

client.on('interactionCreate', async interaction => {
    var member;
    let role = interaction.guild.roles.cache.find(role => role.id === "1152236106973196370"); // ايدي رول اللى يستلم التكت
    await interaction.deferUpdate();
    if(interaction.isButton){
    
        if(interaction.customId === `idk`){
          if(interaction.member.roles.cache.some(role => role.id === "1152236106973196370")) // حط هنا ايدي الرتبة اللى تستلم التكت
            {
            await interaction.message.delete();
        db.add(`weekuser_${interaction.member.id}`, 1)
        db.add(`alluser_${interaction.member.id}`, 1)
          const embed = new Discord.MessageEmbed()
          .setColor("DARK_PURPLE")
          .setDescription(`**لقد تم استلام التكت من قبل <@${interaction.user.id}>**`)
          const product = new MessageActionRow()
          .addComponents(
              new MessageButton()
                  .setCustomId('idk1')
                  .setLabel('ترك التكت')
                  .setStyle('DANGER'),
      
          )
          

          interaction.channel.send({ embeds: [embed], components: [product]});
          const everyone = interaction.guild.roles.cache.find(r => r.name === "DISCORD STAFF");
          let l1 = interaction.user;
           let l = l1
           const filter = i => i.customId === 'idk1' && i.user.id === interaction.member.id;

           const collector = interaction.channel.createMessageComponentCollector({filter});

           collector.on('collect', async i => {
        
            if (i.customId === 'idk1') {
              
            if(interaction.member.roles.cache.some(role => role.id === "1152236106973196370"))
              {
                  await i.message.delete();
                const embed = new Discord.MessageEmbed()
                .setColor("DARK_PURPLE")
                .setDescription(`**لقد تم ترك التكت من قبل <@${interaction.user.id}>**`);
                const product = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('idk')
                        .setLabel('استلام')
                        .setStyle('SUCCESS'),
            
                )
               interaction.channel.send({ content: `${role}` , embeds: [embed], components: [product]});
                const everyone = interaction.guild.roles.cache.find(r => r.name === "DISCORD STAFF");
                        db.subtract(`weekuser_${interaction.member.id}`, 1)
        db.subtract(`alluser_${interaction.member.id}`, 1) 
            
                
                interaction.channel.permissionOverwrites.delete(interaction.member.id)
                const unclaim = "UnClaimed"
                  interaction.channel.permissionOverwrites.edit(interaction.member.id,{SEND_MESSAGES: true})
           
interaction.channel.setName("ticket-" + interaction.user.username);                interaction.channel.permissionOverwrites.edit(role,{SEND_MESSAGES: true})
                 interaction.channel.setName("ticket-غير-مستلم")
                collector.stop();
                }else{
                  interaction.followUp({ 
                      content: ` كخ يا بابا`,
                      ephemeral: true 
                      
                    })
                    
                  return;
              }
              
              
            
            }
            
          });
          interaction.channel.permissionOverwrites.edit(interaction.member.id,{SEND_MESSAGES: true})
           
          interaction.channel.setName("ticket-" + interaction.user.username);
          interaction.channel.permissionOverwrites.edit('999839375020011541',{SEND_MESSAGES: false})
          interaction.channel.permissionOverwrites.edit('999839375020011541',{VIEW_CHANNEL: true})
          }else{
            interaction.followUp({ 
                content: `ماشفتك تستخدم الزر ؟`,
                ephemeral: true 
              })
            return;
        }
        return;
        }


    }
});


client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "points") || message.content.startsWith(prefix + "نقاط") || message.content.startsWith(prefix + "نقط")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)

      var points = db.get(`weekuser_${user.id}`)
      var weekwarns = db.get(`weekwarns_${user.id}`)
      var allpoints = db.get(`alluser_${user.id}`)
      var allwarns = db.get(`allwarns_${user.id}`)
      var allmute = db.get(`muteall_${user.id}`)
      var weekmute = db.get(`muteweek_${user.id}`)
      if(!points) {
         points = 0
      }
      if(!weekwarns) {
         weekwarns = 0
      }
      if(!allpoints) {
         allpoints = 0
      } 
      if(!allwarns) {
         allwarns = 0
      }
      if(!allmute) {
        allmute = 0
      }
      if(!weekmute) {
        weekmute = 0
      }
  
      message.reply(`**${message.member.user}:**\n     \n>  **مجموع النقاط : \`${points + weekwarns + weekmute}\`**\n \n >  **عدد التكتات : \`${points}\`**\n>  **عدد التحذيرات : \`${weekwarns}\`**\n>  **عدد الميوتات : \`${weekmute}\`** \n** **`)
    }
    if (!user) {
      var points = db.get(`weekuser_${message.member.id}`)
      var weekwarns = db.get(`weekwarns_${message.member.id}`)
      var allpoints = db.get(`alluser_${message.member.id}`)
      var allwarns = db.get(`allwarns_${message.member.id}`)
      var allmute = db.get(`muteall_${message.member.id}`)
      var weekmute = db.get(`muteweek_${message.member.id}`)
      if(!points) {
         points = 0
      }
      if(!weekwarns) {
         weekwarns = 0
      }
      if(!allpoints) {
         allpoints = 0
      } 
      if(!allwarns) {
         allwarns = 0
      }
      if(!allmute) {
        allmute = 0
      }
      if(!weekmute) {
        weekmute = 0
      }

let rowtpreply = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("All")
        .setCustomId("pall")
        .setStyle("SECONDARY")
        .setDisabled(false)
    )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("Week")
        .setCustomId("wall")
        .setStyle("SECONDARY")
        .setDisabled(true)
    )
              
  
  await message.reply({ content: `**${message.member.user}:**\n     \n>  **مجموع النقاط : \`${points + weekwarns + weekmute}\`**\n \n >  **عدد التكتات : \`${points}\`**\n>  **عدد التحذيرات : \`${weekwarns}\`**\n>  **عدد الميوتات : \`${weekmute}\`** \n** **`, components: [rowtpreply] });
            }
        }
    })



client.on("interactionCreate" , async interaction => {
if(interaction.customId == "pall") {
const message = await interaction.channel.messages.fetch(interaction.message.id);
        var points = db.get(`weekuser_${interaction.user.id}`)
      var weekwarns = db.get(`weekwarns_${interaction.user.id}`)
      var allpoints = db.get(`alluser_${interaction.user.id}`)
      var allwarns = db.get(`allwarns_${interaction.user.id}`)
      var allmute = db.get(`muteall_${interaction.user.id}`)
      var weekmute = db.get(`muteweek_${interaction.user.id}`)
      if(!points) {
         points = 0
      }
      if(!weekwarns) {
         weekwarns = 0
      }
      if(!allpoints) {
         allpoints = 0
      } 
      if(!allwarns) {
         allwarns = 0
      }
      if(!allmute) {
        allmute = 0
      }
      if(!weekmute) {
        weekmute = 0
      }

let rowtpreply = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("All")
        .setCustomId("pall")
        .setStyle("SECONDARY")
        .setDisabled(true)
    )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("Week")
        .setCustomId("wall")
        .setStyle("SECONDARY")
        .setDisabled(false)
    )
       await message.edit({ content: `**<@${interaction.user.id}>:**\n     \n>  **مجموع النقاط : \`${allpoints + allwarns + allmute}\`**\n \n >  **عدد التكتات : \`${allpoints}\`**\n>  **عدد التحذيرات : \`${allwarns}\`**\n>  **عدد الميوتات : \`${allmute}\`** \n** **`, components: [rowtpreply] });
            }

    })

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "wall") {
const message = await interaction.channel.messages.fetch(interaction.message.id);
        var points = db.get(`weekuser_${interaction.user.id}`)
      var weekwarns = db.get(`weekwarns_${interaction.user.id}`)
      var allpoints = db.get(`alluser_${interaction.user.id}`)
      var allwarns = db.get(`allwarns_${interaction.user.id}`)
      var allmute = db.get(`muteall_${interaction.user.id}`)
      var weekmute = db.get(`muteweek_${interaction.user.id}`)
      if(!points) {
         points = 0
      }
      if(!weekwarns) {
         weekwarns = 0
      }
      if(!allpoints) {
         allpoints = 0
      } 
      if(!allwarns) {
         allwarns = 0
      }
      if(!allmute) {
        allmute = 0
      }
      if(!weekmute) {
        weekmute = 0
      }

let rowtpreply = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("All")
        .setCustomId("pall")
        .setStyle("SECONDARY")
        .setDisabled(false)
    )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("Week")
        .setCustomId("wall")
        .setStyle("SECONDARY")
        .setDisabled(true)
    )
       await message.edit({ content: `**<@${interaction.user.id}>:**\n     \n>  **مجموع النقاط : \`${points + weekwarns + weekmute}\`**\n \n >  **عدد التكتات : \`${points}\`**\n>  **عدد التحذيرات : \`${weekwarns}\`**\n>  **عدد الميوتات : \`${weekmute}\`**  \n** **`, components: [rowtpreply] });
            }

    })

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mutes") || message.content.startsWith(prefix + "ميوتات")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      var mutes = db.get(`muteweek_${user.id}`)
      var allmutes = db.get(`muteall_${user.id}`)
      if(!mutes) {
        mutes = 0
      }
      if(!allmutes) {
        allmutes = 0
      }
      let embed2 = new Discord.MessageEmbed()
        .setTitle(`${member.user.tag}, ميوتات`)
        .setDescription(`> **جميع الميوتات : \`${allmutes}\`**\n> **ميوتات الاسبوع : \`${mutes}\`**`)
        .setColor(`EA3648`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] })
    }
    if (!user) {
      var mutes = db.get(`muteweek_${message.member.id}`)
      var allmutes = db.get(`muteall_${message.member.id}`)
      if(!mutes) {
        mutes = 0
      }
      if(!allmutes) {
        allmutes = 0
      }
      let embed4 = new Discord.MessageEmbed()
        .setTitle(`${message.member.user.tag}, ميوتات`)
        .setDescription(`> **ميوتات الاسبوع : \`${mutes}\`**\n> **جميع الميوتات : \`${allmutes}\`**`)
        .setColor(`EA3648`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })

      message.reply({ embeds: [embed4] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "ticket(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1214996059257053204)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`weekuser_${user.id}`, args2)
      await db.add(`alluser_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} ticket points to ${user}**`)
        .setColor("EA3648")
      message.reply({ embeds: [embed] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allticket(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1214996059257053204)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`alluser_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} ticket points to ${user}**`)
        .setColor("EA3648")
      message.reply({ embeds: [embed] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mute(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1214996059257053204)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`muteweek_${user.id}`, args2)
      await db.add(`muteall_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} mute points to ${user}**`)
        .setColor("EA3648")
      message.reply({ embeds: [embed] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allmute(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1214996059257053204)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`muteall_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} mute points to ${user}**`)
        .setColor("EA3648")
      message.reply({ embeds: [embed] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allwarn(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1214996059257053204)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`allwarns_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} warn points to ${user}**`)
        .setColor("EA3648")
      message.reply({ embeds: [embed] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "ticket(-)")) {
    if (message.member.roles.cache.some(r=> r.id == 1214996059257053204)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`weekuser_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`alluser_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`weekuser_${user.id}`, args2)
await db.subtract(`alluser_${user.id}`, args2)
      
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done removed ${args2} ticket points from ${user}**`)
        .setColor("EA3648")
      message.reply({ embeds: [embed] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warn(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1214996059257053204)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`weekwarns_${user.id}`, args2)
      await db.add(`allwarns_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done added ${args2} warn points to ${user}**`)
        .setColor("EA3648")
      message.reply({ embeds: [embed] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warn(-)")) {
    if (message.member.roles.cache.some(r=> r.id == 1152059017074573402)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`weekwarns_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`allwarns_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`weekwarns_${user.id}`, args2)
      await db.subtract(`allwarns_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done removed ${args2} warn points from ${user}**`)
        .setColor("EA3648")
      message.reply({ embeds: [embed] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mute(-)")) {
    if (message.member.roles.cache.some(r=> r.id == 1152059017074573402)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`muteweek_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`muteall_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`muteweek_${user.id}`, args2)
      await db.subtract(`muteall_${user.id}`, args2)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**Done removed ${args2} mute points from ${user}**`)
        .setColor("EA3648")
      message.reply({ embeds: [embed] })
    }
  }
});




client.on("messageCreate", message => {
  if (message.content == prefix + "claim") {

    if (message.member.permissions.has("ADMINISTRATOR")) {


      let embed = new Discord.MessageEmbed()
        .setDescription("**إضغط على الزر لتصبح مسؤول التذكرة**")
        .setColor("EA3648")
      let row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
          .setLabel("Claim")
          .setCustomId("idk")
          .setStyle("SECONDARY")
      )
      message.delete()
      message.channel.send({ embeds: [embed], components: [row] }).then(m => db.set(`message_${message.channel.id}`, m.id))
    }
  }

});

///////////////

client.on("messageCreate" , message => {
      if(message.content.startsWith("$تحويل")) {
message.reply(`** التحويل فقط لـ <@${bankid}> .**`);
      }});

///////////////





///////////////

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('$r')) {
    const roles = message.mentions.roles.first() || message.guild.roles.cache.find((x) => x.id == message.content.split(' ')[1]) || message.guild.roles.cache.find((x) => x.name == message.content.split(' ').slice(1).join(' '));
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      message.reply({ content: '**انت لا تمتلك صلاحيات `Administrator` !**' });
      return;
    }

    const members = roles.members.map((e) => ` <@${e.user.id}>`);
    const membersCount = roles.members.size;

    const MAX_LENGTH = 2000;
    const chunks = [];
    let currentChunk = '';

    for (const member of members) {
      if (currentChunk.length + member.length + 1 <= MAX_LENGTH) {
        currentChunk += `${member}\n`;
      } else {
        chunks.push(currentChunk);
        currentChunk = `${member}\n`;
      }
    }

    if (currentChunk) {
      chunks.push(currentChunk);
    }

    for (let i = 0; i < chunks.length; i++) {
      const content = i === chunks.length - 1 ? `**${chunks[i]}\nعددهم : \`${membersCount}\`**` : `**${chunks[i]}**`;
      await message.reply({ content });
    }
  }
});

///////////////

setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3 * 1000 * 60);


const warnWork = `1219770431150751844`
client.on("messageCreate" , message => {
  if(message.content.startsWith(prefix + "تحذير")) {
    if(message.content.startsWith(prefix + "تحذيرات")) return false;
    const wait = require('node:timers/promises').setTimeout;
    if (warnWork.includes(message.channel.id)) {
    
    let madri = `(=)`
    let channel = client.channels.cache.get('1152062589195522048');
    let warn2 = client.channels.cache.get('1219770584976588903');

    let s1 = message.guild.roles.cache.find(r => r.name == "Warn 50%");
    let s2 = message.guild.roles.cache.find(r => r.name == "Warn 100%");
      
    let perfect = message.guild.roles.cache.find(r=>r.name == "🜲 || Angel S :")
    let gold = message.guild.roles.cache.find(r=>r.name == "🜲 || Great S :")
    let great = message.guild.roles.cache.find(r=>r.name == "🜲 || Perfect S :")
    let epic = message.guild.roles.cache.find(r=>r.name == "🜲 || Excellent S :")
    let normal = message.guild.roles.cache.find(r=>r.name == "🜲 || Good S :")
    let designer = message.guild.roles.cache.find(r=>r.name == "🜲 || Designer S :")
    let developer = message.guild.roles.cache.find(r=>r.name == "🜲 || Developer :")
    let vip = message.guild.roles.cache.find(r=>r.name == "⾕ || Vip S :")
    let vip1 = message.guild.roles.cache.find(r=>r.name == "⾕ || Alx S")  
      
    let args = message.content.split(" ")
    let user = message.mentions.members.first() || message.guild.members.cache.find(r=>r.id ==      args[1])
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!user) return message.reply("** يرجى وضع منشن الشخص أولاً !**")
    
    if(!reason) return message.reply("**  يرجى وضع السبب أولاً !**")
    if(!message.attachments.size) return message.reply("** يرجى وضع الدليل أولاً !**")
    if(!user.roles.cache.some(r=>r.name == "Warn 50%")) {
          message.reply(`** تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
    channel.send({content:`** الشخص : ${user}\n\n الإداري : ${message.member}\n\n نوع التحذير : يحدو الاداري\n\n السبب : ${reason}\n\n الدليل :**` , files:attachmentFiles})
      channel.send(`${lineLink}`);
    warn2.send({content:`:warning: **تحذير** \n ** الشخص : ${user}\n الإداري : ${message.member}\n نوع التحذير : يحدو الاداري\n السبب : لمعرفة السبب يرجى يفتح تكت <#1143583321960501248>**`})
      warn2.send(`${lineLink}`);    
      user.roles.add([s1])
      
    }
    if(user.roles.cache.some(r=>r.name == "Warn 50%")) {
      if(!user.roles.cache.some(r=>r.name == "Warn 100%")) {
      message.reply(`** تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
    channel.send({content:`** الشخص : ${user}\n\n الإداري : ${message.member}\n\n نوع التحذير : يحدو الاداري\n\n السبب : ${reason}\n\n الدليل :**` , files:attachmentFiles})
      channel.send(`${lineLink}`);
    warn2.send({content:`:warning: **تحذير** \n ** الشخص : ${user}\n الإداري : ${message.member}\n نوع التحذير : يحدو الاداري\n السبب : لمعرفة السبب يرجى يفتح تكت <#1188439748524646421>**`})
      warn2.send(`${lineLink}`);    
      user.roles.add([s2])
      
    }
    if(user.roles.cache.some(r=>r.name == "Warn 100%")) {
      user.roles.remove([s1,s2,perfect,gold,great,epic,normal,designer,developer,vip,vip1])

                message.reply(`** تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
    warn2.send({content:`:warning: **تحذير** \n ** الشخص : ${user}\n الإداري : ${message.member}\n نوع التحذير : يحدو الاداري\n السبب : لمعرفة السبب يرجى يفتح تكت <#1188439748524646421>**`})
          channel.send({content:`** الشخص : ${user}\n\n الإداري : ${message.member}\n\n نوع التحذير : يحدو الاداري\n\n السبب : ${reason}\n\n الدليل :**` , files:attachmentFiles})
      channel.send(`${lineLink}`);
    }
    if(reason.includes(`(=)`)) {
                message.reply(`** تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
  channel.send({content:`** الشخص : ${user}\n\n الإداري : ${message.member}\n\n نوع التحذير : يحدو الاداري\n\n السبب : ${reason}\n\n الدليل :**` , files:attachmentFiles})
      channel.send(`${lineLink}`);
    warn2.send({content:`:warning: **تحذير** \n ** الشخص : ${user}\n الإداري : ${message.member}\n نوع التحذير : يحدو الاداري\n السبب : لمعرفة السبب يرجى يفتح تكت <#1188439748524646421>**`})
      warn2.send(`${lineLink}`);    
      user.roles.remove([s1,s2,perfect,gold,great,epic,normal,designer,developer,vip,vip1])
      
    }
    }
          }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warns") || message.content.startsWith(prefix + "تحذيرات")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      var warns = db.get(`weekwarns_${user.id}`)
      var allwarns = db.get(`allwarns_${user.id}`)
      if(!warns) {
        warns = 0
      }
      if(!allwarns) {
        allwarns = 0
      }

      message.reply(`> **جميع التحذيرات \`${allwarns}\`**\n> **تحذيرات الاسبوع : \`${warns}\`**`)
    }
    if (!user) {
      var warns = db.get(`weekwarns_${message.member.id}`)
      var allwarns = db.get(`allwarns_${message.member.id}`)
      if(!warns) {
        warns = 0
      }
      if(!allwarns) {
        allwarns = 0
      }

      message.reply(` **تحذيرات الاسبوع : \`${warns}\`**\n> **جميع التحذيرات \`${allwarns}\`**`)
    }
  }
});

////////

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('$repoints')) {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            try {
            const memberList = await message.guild.members.fetch();
              let usersData = [];

                memberList.forEach((member) => {
                    if (member.roles.cache.has('1214996059257053204')) {
                        var points = db.get(`weekuser_${member.id}`);
                        var weekwarns = db.get(`weekwarns_${member.id}`);
                        var weekmute = db.get(`muteweek_${member.id}`);

                        points = parseInt(points) || 0;
                        weekwarns = parseInt(weekwarns) || 0;
                        weekmute = parseInt(weekmute) || 0;

                        if (points > 0 || weekwarns > 0 || weekmute > 0) {
                            usersData.push({ user: member.user, points, weekwarns, weekmute });
                        }
                    }
                });

                usersData.sort((a, b) => b.points - a.points);

                const embed = new MessageEmbed()
                    .setColor('EA3648')
                    .setTitle('**Top 10 Week :**');

                const topUsers = usersData.slice(0, 10);

                topUsers.forEach((user, index) => {
                    embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Week : ${user.points + user.weekwarns + user.weekmute} **`);
                });

                const channel = message.guild.channels.cache.get('1152236106973196370');

                if (channel && channel.isText()) {
                    await channel.send({ embeds: [embed] });
                    await message.reply('**تم إعادة تعيين نقاط الأسبوع بنجاح.**');
                }

                usersData.forEach((user) => {
                    if (user.user.id !== client.user.id) {
                        if (user.points === 0 && user.weekwarns === 0 && user.weekmute === 0) {
                            db.delete(`weekuser_${user.user.id}`);
                            db.delete(`weekwarns_${user.user.id}`);
                            db.delete(`muteweek_${user.user.id}`);
                        } else {
                            db.set(`muteweek_${user.user.id}`, 0);
                          db.set(`weekwarns_${user.user.id}`, 0);
                          db.set(`weekuser_${user.user.id}`, 0);
                        }
                    }
                });

            } catch (error) {
                console.error('حدث خطأ :', error);
            }
        }
    }
});
                        
//////////////



      /////////

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('$top') || message.content.startsWith('$توب')) {
        try {
            const memberList = await message.guild.members.fetch();
            let usersData = [];

            memberList.forEach((member) => {
                if (member.roles.cache.has('1152236106973196370')) {
                    var points = db.get(`alluser_${member.id}`);
                    var weekwarns = db.get(`allwarns_${member.id}`);
                    var weekmute = db.get(`muteall_${member.id}`);

                    points = parseInt(points) || 0;
                    weekwarns = parseInt(weekwarns) || 0;
                    weekmute = parseInt(weekmute) || 0;

                    if (points > 0 || weekwarns > 0 || weekmute > 0) {
                        usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points + weekwarns + weekmute });
                    }
                }
            });

            usersData.sort((a, b) => b.totalPoints - a.totalPoints);

            const embed = new MessageEmbed()
                .setColor('EA3648')
                .setTitle('**Top 10 نقاط**');

            const topUsers = usersData.slice(0, 10);

            if (topUsers.length === 0) {
                embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط .**');
            } else {
                topUsers.forEach((user, index) => {
                    embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Top : ${user.points + user.weekwarns + user.weekmute} **`);
                });
            }

let rowtp = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("All")
        .setCustomId("altop")
        .setStyle("SECONDARY")
        .setDisabled(true)
    )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("Week")
        .setCustomId("wetop")
        .setStyle("SECONDARY")
        .setDisabled(false)
    )
          
            await message.channel.send({ embeds: [embed], components: [rowtp] });
        } catch (error) {
            console.error('حدث خطأ :', error);
        }
    }
});

client.on("interactionCreate" , async interaction => {
if(interaction.customId == "wetop") {
const message = await interaction.channel.messages.fetch(interaction.message.id);

try {
            const memberList = await message.guild.members.fetch();
            let usersData = [];

            memberList.forEach((member) => {
                if (member.roles.cache.has('1152236106973196370')) {
                    var points = db.get(`weekuser_${member.id}`);
                    var weekwarns = db.get(`weekwarns_${member.id}`);
                    var weekmute = db.get(`muteweek_${member.id}`);

                    points = parseInt(points) || 0;
                    weekwarns = parseInt(weekwarns) || 0;
                    weekmute = parseInt(weekmute) || 0;

                    if (points > 0 || weekwarns > 0 || weekmute > 0) {
                        usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points + weekwarns + weekmute });
                    }
                }
            });

            usersData.sort((a, b) => b.totalPoints - a.totalPoints);

            const embed = new MessageEmbed()
                .setColor('EA3648')
                .setTitle('**Top 10 Week :**');

            const topUsers = usersData.slice(0, 10);

            if (topUsers.length === 0) {
                embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط في هذا الإسبوع .**');
            } else {
                topUsers.forEach((user, index) => {
                    embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Week : ${user.points + user.weekwarns + user.weekmute} **`);
                });
            }

let rowtpreply = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("All")
        .setCustomId("altop")
        .setStyle("SECONDARY")
        .setDisabled(false)
    )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("Week")
        .setCustomId("wetop")
        .setStyle("SECONDARY")
        .setDisabled(true)
    )
              
  
  await message.edit({ embeds: [embed], components: [rowtpreply] });
            } catch (error) {
                console.error('حدث خطأ :', error);
            }
        }
    })



client.on("interactionCreate" , async interaction => {
if(interaction.customId == "altop") {
const message = await interaction.channel.messages.fetch(interaction.message.id);

try {
            const memberList = await message.guild.members.fetch();
            let usersData = [];

            memberList.forEach((member) => {
                if (member.roles.cache.has('999954102782005359')) {
                    var points = db.get(`alluser_${member.id}`);
                    var weekwarns = db.get(`allwarns_${member.id}`);
                    var weekmute = db.get(`muteall_${member.id}`);

                    points = parseInt(points) || 0;
                    weekwarns = parseInt(weekwarns) || 0;
                    weekmute = parseInt(weekmute) || 0;

                    if (points > 0 || weekwarns > 0 || weekmute > 0) {
                        usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points });
                    }
                }
            });

            usersData.sort((a, b) => b.totalPoints - a.totalPoints);

            const embed = new MessageEmbed()
                .setColor('EA3648')
                .setTitle('**Top 10 نقاط**');

            const topUsers = usersData.slice(0, 10);

            if (topUsers.length === 0) {
                embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط .**');
            } else {
                topUsers.forEach((user, index) => {
                    embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All نقاط ${user.points + user.weekwarns + user.weekmute} **`);
                });
            }

let rowtpreply = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("All")
        .setCustomId("altop")
        .setStyle("SECONDARY")
        .setDisabled(true)
    )
  .addComponents(
      new Discord.MessageButton()
        .setLabel("Week")
        .setCustomId("wetop")
        .setStyle("SECONDARY")
        .setDisabled(false)
    )
              
  
  await message.edit({ embeds: [embed], components: [rowtpreply] });
            } catch (error) {
                console.error('حدث خطأ :', error);
            }
        }
    })

///////////

let messageCount = 0;

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('$start')) {
        if (!message.member.permissions.has("OWNER SHIP")) return message.reply("**انت لا تمتلك صلاحيات `Administrator` !**");

        try {
            const memberList = await message.guild.members.fetch();

            memberList.forEach(async (member) => {
                if (member.roles.cache.has('1152236106973196370')) {  //discord staff
                    var points = db.get(`weekuser_${member.id}`)
                    var weekwarns = db.get(`weekwarns_${member.id}`)
                    var weekmute = db.get(`muteweek_${member.id}`) // استرداد عدد الميوت الأسبوعية
                    points = parseInt(points) || 0;
                    weekwarns = parseInt(weekwarns) || 0;
                    weekmute = parseInt(weekmute) || 0;
                    messageCount++;
                    var roleToAssign = "1152236106973196370"; //discord staff
                    var roleToAssignHighStaff = "1152059017074573402"; 
                   if (!member.roles.cache.some(r => r.id == 1158302520490336296)) {
                        if (points + weekwarns + weekmute >= 60) {
                            roleToAssign = "دبل ترقية";
                        } else if (points + weekwarns + weekmute >= 40 && points + weekwarns + weekmute <= 59) {
                            roleToAssign = "ترقية";
                        } else if (points + weekwarns + weekmute >= 15 && points + weekwarns + weekmute <= 49) {
                            roleToAssign = "سكب";
                        } else if (points + weekwarns + weekmute < 15) {
                            roleToAssign = "تخفيض";
                        }
                    }
                    if (member.roles.cache.some(r => r.id == 1158302520490336296)) {
                        if (points + weekwarns + weekmute >= 80) {
                            roleToAssignHighStaff = "دبل ترقية";
                        } else if (points + weekwarns + weekmute >= 60 && points + weekwarns + weekmute <= 79) {
                            roleToAssignHighStaff = "ترقية";
                        } else if (points + weekwarns + weekmute >= 40 && points + weekwarns + weekmute < 69) {
                            roleToAssignHighStaff = "سكب";
                        }
                      else if (points + weekwarns + weekmute < 20) {
                            roleToAssignHighStaff = "تخفيض";
                        }
                    }
                    let replyMessage = `> ** الإداري : <@${member.user.id}>**\n> ** الإداري رقم : ${messageCount}**\n** عدد التكتات : ${points}\n عدد التحذيرات : ${weekwarns}\n عدد الميوتات : ${weekmute}\n مجموع النقاط الكلي : ${points + weekwarns + weekmute}**`;

                    if (!member.roles.cache.some(r => r.id == 1158302520490336296)) {
                        if (roleToAssign !== "") {
                            replyMessage += `\n** النتيجة : ${roleToAssign}**`;
                        }
                    }
                    if (member.roles.cache.some(r => r.id == 1158302520490336296)) {
                        if (roleToAssignHighStaff !== "") {
                            replyMessage += `\n** النتيجة : ${roleToAssignHighStaff}**`;
                        }
                    }

                    await message.channel.send(replyMessage);
                }
            });
        } catch (error) {
            console.error('خطأ :', error);
        }
    }
});



client.login(process.env.token)