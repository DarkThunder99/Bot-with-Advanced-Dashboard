const Command = require('../../structures/Command');
const fetch = require('node-fetch');
const Guild = require('../../database/schemas/Guild');
const { MessageEmbed } = require('discord.js');
module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: '8ball',
        description: 'Ask the 8ball a question',
        category: 'Fun',
        cooldown: 3
      });
    }

    async run(message, args) {
      if(!args[0]) return message.reply('Please ask a question to the 8ball!')
      let replies = [
        "Yes.",
        "No.",
        "Never.",
        "Definitely.",
        "Ask again later.",
        "Imagine asking that lmao",
        "OH HELL NAH!",
        "Of course not",
        "Absolutely!",
        "Ask your mom.",
        "LMAO no.",
        "Uhhh...?"
      ];
      let result = Math.floor((Math.random() * replies.length));
      let question = args.slice().join(" ");

      const ballembed = new MessageEmbed()
      .setAuthor(`🎱 ${message.author.username}, your 8 Ball says...`)
      .setColor("ORANGE")
      .addField("Question:", question)
      .addField("Answer:", replies[result]);

      message.channel.send(ballembed)
  }
}