const discord = require("discord.js");
const Command = require('../../structures/Command');
const fetch = require('node-fetch');
const Guild = require('../../database/schemas/Guild');
const User = require('../../database/schemas/User');
const Nickname = require('../../database/schemas/nicknames');
const Usernames = require('../../database/schemas/usernames');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {       
        name: 'bean',
        category: 'Fun',
        description: 'Bean anyone with one shot without knowing anyone xD',
        usage: 'bean <@user> <reason>',
      });
    }
  async run(message, args) {
    
    const member = message.mentions.members.first()
    
    
    if(!args[0]) return message.reply(`Please mention someone to bean!`)
    
    if(!member) return message.reply(`I can't find that user!`)
    
    if(member.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.reply(`They have more power than you`)
    }
    
    if(member.id === message.author.id) return message.reply(`I can't bean you as you are the owner of the server!`)
    
    if(member) {
      let embed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`**${member.user.username}#${member.user.discriminator}** has been **beaned**`)
      
      message.channel.send(embed)
    
    } else {
      return message.reply(`I can't bean them, make sure that my role is above of theirs`)
    }
    return undefined
  }
};