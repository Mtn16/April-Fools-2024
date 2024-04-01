const {Client, Collection, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");
const client = new Client({intents: 3276799});
const fs = require("fs")
const chalk = require("chalk");
const config = require("./Configuration/configuration.json")
//var cron = require('node-cron');
const GetLogger = require("./Tasks/GetLogger.js")
let wait = async (ms) => await new Promise(r => setTimeout(r,ms));

let i = 0

const commandFiles = fs.readdirSync("./Commands").filter(file => file.endsWith('.js'));
const buttonFiles = fs.readdirSync('./Buttons').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./Events').filter(file => file.endsWith('.js'));
const loggerFiles = fs.readdirSync('./Logger').filter(file => file.endsWith('.js'));

//Error logger
process.on('uncaughtException', (error) => {
    fs.appendFileSync("Logs/errors.log", `${new Date().toISOString()}: ${error}\n`);
    GetLogger.error(error)
  });

  const { REST } = require('@discordjs/rest');
  const { Routes } = require('discord-api-types/v9');
  const { readdirSync } = require('fs');


  const commands = [];
  
  for (const file of commandFiles) {
      const command = require(`./Commands/${file}`);
      commands.push(command.data);
  }
  
  const rest = new REST({ version: '9' }).setToken(config.token);
  
  (async () => {
      try {
        console.log(chalk.blueBright("[↻] ") + chalk.white("Started refreshing application (/) commands."));
  
          await rest.put(
              Routes.applicationGuildCommands(config.application_id, config.guild_id),
              { body: commands },
          );
  
          console.log(chalk.greenBright("[✔] ") + chalk.white("Successfully reloaded application (/) commands."));
      } catch (error) {
          console.error(error);
      }
  })();
  
  client.commands = new Collection();
  
  for (const file of commandFiles) {
      const command = require(`./Commands/${file}`);
      client.commands.set(command.data.name, command);
  }
  
  client.on('interactionCreate', async interaction => {
      if (!interaction.isCommand()) return;
  
      const { commandName } = interaction;
      const command = client.commands.get(commandName);
  
      if (!command) return;
  
      try {
          await command.execute(interaction, client);
      } catch (error) {
          console.error(error);
          await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
  });

//Button Handler
client.on("interactionCreate", async (interaction) => {
    if(interaction.isButton())
    {
        if(interaction.customId.includes("Poll-")) return;
        const buttonId = interaction.customId;
        const buttonActionFile = `./Buttons/${buttonId}.js`;
        try {
            const buttonAction = require(buttonActionFile);
            await buttonAction.execute(interaction, client);
        } catch (error) {
            console.error(`Chyba při zpracování akce pro tlačítko ${buttonId}:`, error);
            await interaction.reply({content: ":warning: Došlo k chybě při zpracování tlačítka. Administrátoři byli o chybě informováni.", ephemeral: true});
        }
    }
})

//Select Handler
client.on("interactionCreate", async (interaction) => {
    if(interaction.isAnySelectMenu())
    {
        const selectId = interaction.customId;
        const selectActionFile = `./Select/${selectId}.js`;
        try {
            const selectAction = require(selectActionFile);
            await selectAction.execute(interaction, client);
        } catch (error) {
            console.error(`Chyba při zpracování akce pro menu ${selectId}:`, error);
            await interaction.reply({content: ":warning: Došlo k chybě při zpracování select menu. Administrátoři byli o chybě informováni.", ephemeral: true});
        }
    }
})

//Modal Handler
client.on("interactionCreate", async (interaction) => {
    if(interaction.isModalSubmit())
    {
        const modalId = interaction.customId;
        const modalActionFile = `./Modals/${modalId}.js`;
        try {
            const modalAction = require(modalActionFile);
            await modalAction.execute(interaction, client);
        } catch (error) {
            console.error(`Chyba při zpracování akce pro modal ${modalId}:`, error);
            await interaction.reply({content: ":warning: Došlo k chybě při zpracování modalu. Administrátoři byli o chybě informováni.", ephemeral: true});
        }
    }
})

//Event Handler
for (const file of eventFiles) {
    const event = require(`./Events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}


client.on("messageCreate", (message) => {
    if (!message.member.roles.cache.some(r => r.id === config.budovatel))
    {
        return
    }
    if (message.content == "!announce") {
        i = i + 1
        message.delete()
        require("./Tasks/EventGUI.js").execute(message, i, client)
        return
    }
    if(message.content == "!intro") {
        message.delete()
        const ar = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId("role_claim")
            .setStyle(ButtonStyle.Danger)
            .setLabel("Přidat se k brigádníkům")
        )
        message.channel.send({content: '# Čest práci! \n## Smetiště a zkontrolování obsahu! 🗑︎\n\nOrganizace Družsto Ovozel a.s. žádá primátora města Gottwaldova o pomoc a vyhlášení následujícího:\n\nMagistrát města Gottwaldova vydává **vyhlášku č. 105/1963 Sb.**\n\n*"Pozor města Gottwaldova, organizace Družstvo Ovozel a.s. Vás žádá o pomoc, začali se nám tu šířit hromady smetí, které se povalují po smetištích po celém tomto bájném a mocném městě, ve tvaru minecraftových itemů, a proto hledá brigádníky kteří pomohou tyto věci zkontrolovat a přes veškerou hromadu smetí nalézt cenné a vzácné věci, kde se mezi nimi mohou objevit i cenné staré výtisky Rudého práva z dob Klementa Gottwalda"*\n\nBrigádníci jsou rozděleni do dvou skupin:\n- **detektivové** (__pátrací tým - řízený systémem__)\n- **Laborant** (__examinující tým - řízený, v hlavní funkci hráči__)\n\nPamatujte ale, že každá skladní hromada přinesena, či dovezena od detektivů musí být řádně prohledána a všechny věci musí být zdokumentovány, pokud-li nejsou nemůžete se posunout na další hromadu skládky!\n\nHodně štěstí, týme.\n**Organizace Družsto Ovozel a.s.**', components: [ar]})
    }
    
})



client.login(config.token);
