const {PermissionOverwrites, ButtonInteraction, EmbedBuilder, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle, Embed, PermissionFlagsBits} = require("discord.js")
const wait = require('node:timers/promises').setTimeout;
const config = require("../Configuration/configuration.json")
module.exports = {
  /**
     * 
     * @param {ButtonInteraction} interaction 
     * @param {Client} client 
     */
    execute: async (interaction, client) => {
        if (interaction.member.roles.cache.some(r => r.id === config.brigadnik)) {
            interaction.reply({content: `Již jsi mezi <@&${config.brigadnik}>!`, ephemeral: true})
        } else {
            interaction.member.roles.add(config.brigadnik)
            interaction.reply({content: `Byl jsi zařazen mezi <@&${config.brigadnik}>!`, ephemeral: true})
        }
    }
}