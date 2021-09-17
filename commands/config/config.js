const Command = require('../../structures/Command');
const Guild = require('../../database/schemas/Guild');
const { MessageEmbed } = require('discord.js');
const domain = require("../../config.js");

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'settings',
        aliases: [ 'cfg'],
        description: 'Show\'s the current settings for this guild',
        category: 'Config',
        guildOnly: true,
        userPermission: ['MANAGE_GUILD'],
      });
    }

    async run(message, args) {
      const settings = await Guild.findOne({
        guildId: message.guild.id,
      });
      const guildDB = await Guild.findOne({
        guildId: message.guild.id
    });


      const language = require(`../../data/language/${guildDB.language}.json`)
      await message.channel.send(new MessageEmbed()
      .setColor(message.guild.me.displayHexColor)
      .setTitle(`${language.serversettings1}`)
      .addField(`Main Settings`, `[\`Click here\`](${domain.domain}/dashboard/${message.guild.id})`, true)
      .addField(`Welcome & Leave`, `[\`Click here\`](${domain.domain}/dashboard/${message.guild.id}/welcome)`, true)
      .addField(`Logging`, `[\`Click here\`](${domain.domain}/dashboard/${message.guild.id}/logging)`, true)
      .addField(`Autorole`, `[\`Click here\`](${domain.domain}/dashboard/${message.guild.id}/autorole)`, true)
      .addField(`Alt Detector`, `[\`Click here\`](${domain.domain}/dashboard/${message.guild.id}/altdetector)`, true)
      .addField(`Tickets`, `[\`Click here\`](${domain.domain}/dashboard/${message.guild.id}/tickets)`, true)
      .addField(`Suggestions`, `[\`Click here\`](${domain.domain}/dashboard/${message.guild.id}/Suggestions)`, true)
      .addField(`Server Reports`, `[\`Click here\`](${domain.domain}/dashboard/${message.guild.id}/reports)`, true)
      .addField(`Automod`, `[\`Click here\`](${domain.domain}/dashboard/${message.guild.id}/automod)`, true)

      .setFooter(`${message.guild.name}`)

      
      )
      
    }
};