const Command = require('../../structures/Command');
const Guild = require('../../database/schemas/Guild');
const configg = require("../../config")
const Discord = require('discord.js')
module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'support',
        description: `Sends you Bot's Support server`,
        category: 'Utility',
        cooldown: 3
      });
    }

    async run(message) {
     const guildDB = await Guild.findOne({
        guildId: message.guild.id
      });
    
      const language = require(`../../data/language/${guildDB.language}.json`)
      
      const embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setDescription(`${language.support}(${configg.support_server_link}) ${message.client.emoji.success}`);

      await message.channel.send(embed)  
    }
};