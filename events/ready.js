const muteModel = require('../models/mute');
const Event = require('../structures/Event');
const logger = require('../utils/logger');
const Maintenance = require('../database/schemas/maintenance');
const jsconfig = require("../config");
const config = require("../config")
module.exports = class extends Event {
    async run() {

const maintenance = await Maintenance.findOne({
  maintenance: "maintenance"
})

if(maintenance && maintenance.toggle == "true"){

  

    this.client.user.setPresence({ status: 'dnd' });
    this.client.user.setActivity('Under Maintenance')

  

logger.info(`✅ loaded Maintenance Mode `, { label: 'Status' })
} else {
    const activities = [
      { name: jsconfig.bot_name, type: 'WATCHING' }, 
      { name: `@${jsconfig.bot_name}`, type: 'WATCHING' }
    ];
  

    this.client.user.setPresence({ status: 'online', activity: activities[0] });
  
    let activity = 1;
  

    setInterval(() => {
      activities[2] = { name: `!help | ${this.client.channels.cache.size} channels`, type: 'WATCHING' };
      activities[3] = { name: `no`, type: 'PLAYING' };
      activities[4] = { name: `Roblox`, type: 'PLAYING' };
      activities[5] = { name: `latest COVID-19 news`, type: 'STREAMING', url: 'https://twitch.tv/gfgfgffgfgfgfhf/videos' };
      activities[6] = { name: `YouTube Music`, type: 'LISTENING' };
      activities[7] = { name: `for rule breakers`, type: 'WATCHING' };
      activities[8] = { name: `discord.gg/sound`, type: 'PLAYING' };
      activities[9] = { name: `giveaways`, type: 'WATCHING' };
      activities[10] = { name: `the mods in the closet`, type: 'WATCHING' };
      activities[11] = { name: `Sound's World`, type: 'WATCHING' };
      activities[12] = { name: `the news`, type: 'LISTENING' };
      activities[13] = { name: `#general chat`, type: 'WATCHING' };
      activities[14] = { name: `Sound's World bots`, type: 'LISTENING' };
      activities[15] = { name: `!help | 38 activities`, type: 'WATCHING' };
      activities[16] = { name: `the world burn`, type: 'WATCHING' };
      activities[17] = { name: `🎵 Music #1 [Stereo]`, type: 'LISTENING' };
      activities[18] = { name: `Spotify`, type: 'LISTENING' };
      activities[19] = { name: `Walker walking`, type: 'STREAMING', url: 'https://twitch.tv/gfgfgffgfgfgfhf/videos' };
      activities[20] = { name: `everyone in every server`, type: 'WATCHING' };
      activities[21] = { name: `!help | 38 activities`, type: 'STREAMING', url: 'https://twitch.tv/gfgfgffgfgfgfhf/videos' };
      activities[22] = { name: `on mc.sounddrout.com`, type: 'PLAYING' };
      activities[23] = { name: `!help | ${ this.client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`, type: 'WATCHING' };
      activities[24] = { name: `Minecraft`, type: 'PLAYING' };
      activities[25] = { name: `My school computer working`, type: 'LISTENING' };
      activities[26] = { name: `!help | ${this.client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`, type: 'STREAMING', url: 'https://twitch.tv/gfgfgffgfgfgfhf/videos' };
      activities[27] = { name: `Sound's Utilities so it doesn't go offline`, type: 'LISTENING' };
      activities[28] = { name: `out for staff apps`, type: 'WATCHING' };
      activities[29] = { name: `!help | ${this.client.channels.cache.size} channels`, type: 'STREAMING', url: 'https://twitch.tv/gfgfgffgfgfgfhf/videos' };
      activities[30] = { name: `Embers`, type: 'PLAYING' };
      activities[31] = { name: `!help | ${this.client.guilds.cache.size} servers`, type: 'STREAMING', url: 'https://twitch.tv/gfgfgffgfgfgfhf/videos' };
      activities[32] = { name: `Marble World`, type: 'PLAYING' };
      activities[33] = { name: `BeamNG.drive`, type: 'PLAYING' };
      activities[34] = { name: `Simon Says`, type: 'PLAYING' };
      activities[35] = { name: `!help | ${ this.client.guilds.cache.size} servers`, type: 'WATCHING' };
      activities[36] = { name: `with my dog`, type: 'PLAYING' };
      activities[37] = { name: `everyone`, type: 'WATCHING' };
      activities[38] = { name: `Walker Walking`, type: 'WATCHING' };
    
      let activityresult = Math.floor((Math.random() * activities.length));
      this.client.user.setActivity(activities[activityresult]);
      activity++;
    }, 105000);


			logger.info(`✅ loaded: Bot Status sucessfully `, { label: 'Status' })
      logger.info(`✅ loaded: Dashboard is up and running on port ${config.port}.`, { label: 'Dashboard' })
      logger.info(`❎ Critical error! Error: Fontconfig error: Cannot load default config file.`, { label: 'Error' })

      
  }
}

}



