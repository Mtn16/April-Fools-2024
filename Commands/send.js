const {Client, ChatInputCommandInteraction, PermissionFlagsBits, ApplicationCommandOptionType} = require("discord.js")
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: {
        name: 'send',
	    description: "Odešle zprávu jako bot",
        dm_permission: false,
        options: [
            {
                name: "message",
                description: "Text zprávy",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: "channel",
                description: "ID kanálu (pokud je jiný než aktuální)",
                type: ApplicationCommandOptionType.String,
                required: false,
            },
            {
                name: "reply",
                description: "ID zprávy (pokud má bot odpovědět) - Musí být v tomto / zvoleném kanálu!",
                type: ApplicationCommandOptionType.String,
                required: false,
            }
        ]
    },
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client
     * @param {import("discord.js").Channel} channel
     */
    execute: async(interaction, client) => {
        if (interaction.member.permissions.has(PermissionFlagsBits.Administrator))
        {
            const message = interaction.options.getString("message")
            let channel = interaction.options.getString("channel")
            if(interaction.options.getString("channel") == null) {
                channel = interaction.channel.id
            }
            const reply = interaction.options.getString("reply")
            if(reply) {
                interaction.guild.channels.cache.get(channel).messages.cache.get(reply).reply(message)
            } else {
                interaction.guild.channels.cache.get(channel).send(message)
            }
            interaction.reply({content: "📗 Zpráva odeslána", ephemeral: true})
        } else {
            interaction.reply({content: "📕 Nedostatečná oprávnění", ephemeral: true})
        }
        
    }
}