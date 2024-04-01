const chalk = require("chalk");
const config = require("../Configuration/configuration.json")
const {Client, ActivityType, PresenceUpdateStatus, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, ActionRow} = require("discord.js")
module.exports = {
    name: 'ready',
    once: true, // Pokud je true, event se zachytí pouze jednou
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(args, client) {
        console.log(chalk.greenBright("[✔] ") + chalk.white("Bot is ready!"));
        client.user.setPresence({
            activities: [
            {
                name: config.activity,
                type: ActivityType.Custom,
                state: config.activity
            }]
        })
        client.user.setStatus("idle")

        const button = new ButtonBuilder()
        .setCustomId("setup_account")
        .setStyle(ButtonStyle.Secondary)
        .setLabel("Ověřit účet")

        const row = new ActionRowBuilder()
        .addComponents(button)

        //client.guilds.cache.get(config.guild_id).channels.cache.get("1219363840072880259").send({components: [row]})
    },
};