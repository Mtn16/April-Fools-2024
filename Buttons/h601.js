const {PermissionOverwrites, ButtonInteraction, EmbedBuilder, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle, Embed, PermissionFlagsBits} = require("discord.js")
const wait = require('node:timers/promises').setTimeout;
const Datastore = require("../Tasks/Datastore")
const Database = require("../Tasks/Database")
module.exports = {
  /**
     * 
     * @param {ButtonInteraction} interaction 
     * @param {Client} client 
     */
    execute: async (interaction, client) => {
        if (await Datastore.row6(interaction.customId) == 1) {
          Database.addScore(interaction.user.id, 9)
          Datastore.check(interaction.message.id, 7, client)
          interaction.reply({content: "Úspěšně si našel v hromadě tento využitelný předmět, který se dá později využít na výrobu, pokračuj v hledání!", ephemeral: true})
        } else {
          interaction.reply({content: "Bohužel se zdá, že tohle někdo už vytřídil za tebe, zkus něco jiného a nebo to zkus později při další hromadě skládky.", ephemeral: true})
        }
    }
}