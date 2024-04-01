const { Message, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js")
const config = require("../Configuration/configuration.json")
let wait = async (ms) => await new Promise(r => setTimeout(r,ms));
module.exports = {
    /**
     * 
     * @param {Message} msg 
     * @param {Client} client 
     */
    execute: async(message, id, client) => {
        if (id == 1)
        {
            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("b001")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:amethyst:852294961658724394>"),

                new ButtonBuilder()
                .setCustomId("b002")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:copper:852294351496544296>"),

                new ButtonBuilder()
                .setCustomId("b003")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setDisabled(true)
                .setEmoji("<:flower_poppy:872975537495216219>"),

                new ButtonBuilder()
                .setCustomId("b004")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:snout_armour_trim:1223286239210504362>"),

                new ButtonBuilder()
                .setCustomId("b005")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:redstone_dust:691841117012099164>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("b006")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:flower_torchflower:1132394458214846634>"),

                new ButtonBuilder()
                .setCustomId("b007")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:diamond:1223286327718711447>"),

                new ButtonBuilder()
                .setCustomId("b008")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:bread:1223282955858739271>"),

                new ButtonBuilder()
                .setCustomId("b009")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("4x")
                .setDisabled(true)
                .setEmoji("<:copper:852294351496544296>"),

                new ButtonBuilder()
                .setCustomId("b010")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:flower_poppy:872975537495216219>"),

            )

            let msg = client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).messages.cache.get(message)
            msg.edit({components: [ar1,ar2]})

            msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nDíky Vaší usilovné práci se podařilo celou hromadu smetí prohledat. Děkujeme za odevzdání nalezených předmětů, za které byly přiděleny příslušné body. Během následujících maximálně 45 minut přijede další hromada smetí.`)
        let database = await require("./Database").loadDatabase()
        database.data.sort((a, b) => b.score - a.score); // Seřadí databázi sestupně podle skóre

        let e = new EmbedBuilder()
        .setTitle("Výsledky nejlepšího třídiče za sezónu")
        .setDescription("▧▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▨\n\nČest práci, soudruzi zde máte vyhlášení jak moc velcí soudruzi jste byli a děkujeme za věrnost a odměny jsou přijatelné za vaší odvedenou práci a službu.")
        .setColor("#943030")
        .setThumbnail("https://i.imgur.com/iPJJ7nr.png")
        .addFields(
            {
                name: "🥇 ⇒ 1. místo",
                value: `<@${database.data[0].id}>\n${database.data[0].score} bodů`,
                inline: true
            },
            {
                name: "🥈 ⇒ 2. místo",
                value: `<@${database.data[1].id}>\n${database.data[1].score} bodů`,
                inline: true
            },
            {
                name: "🥉 ⇒ 3. místo",
                value: `<@${database.data[2].id}>\n${database.data[2].score} bodů`,
                inline: true
            }
        )

        msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({embeds: [e]})

        for (let i = 0; i < Math.min(3, database.data.length); i++) {
            // Provádění akce pro prvních 5 položek
            console.log(`Akce pro položku s ID ${database.data[i].id} a skóre ${database.data[i].score}`);
          }
        }
































        if (id == 2)
        {
            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("b101")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:apple:1223285148649394236>"),

                new ButtonBuilder()
                .setCustomId("b102")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:emerald:590539774365007912>"),

                new ButtonBuilder()
                .setCustomId("b103")
                .setDisabled(true)
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:diamond_axe:631758299649540097>"),

                new ButtonBuilder()
                .setCustomId("b104")
                .setDisabled(true)
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:beacon:1223285144086118490>"),

                new ButtonBuilder()
                .setCustomId("b105")
                .setDisabled(true)
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:shulker_box:1223285142471311460>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("b106")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setLabel("3x")
                .setEmoji("<:bread:1223282955858739271>"),

                new ButtonBuilder()
                .setCustomId("b107")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:pigstep:883441805666975826>"),

                new ButtonBuilder()
                .setCustomId("b108")
                .setDisabled(true)
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:flower_tulip_red:872975537746882651>"),

                new ButtonBuilder()
                .setCustomId("b109")
                .setDisabled(true)
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:eye_armour_trim:1223285188390555668>"),

                new ButtonBuilder()
                .setCustomId("b110")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:mc_egg:838877398010560522>"),

            )

            let msg = client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).messages.cache.get(message)
            msg.edit({components: [ar1,ar2]})

            msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nDíky Vaší usilovné práci se podařilo celou hromadu smetí prohledat. Děkujeme za odevzdání nalezených předmětů, za které byly přiděleny příslušné body. Během následujících maximálně 45 minut přijede další hromada smetí.`)
        let database = await require("./Database").loadDatabase()
        database.data.sort((a, b) => b.score - a.score); // Seřadí databázi sestupně podle skóre

        let e = new EmbedBuilder()
        .setTitle("Výsledky nejlepšího třídiče za sezónu")
        .setDescription("▧▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▨\n\nČest práci, soudruzi zde máte vyhlášení jak moc velcí soudruzi jste byli a děkujeme za věrnost a odměny jsou přijatelné za vaší odvedenou práci a službu.")
        .setColor("#943030")
        .setThumbnail("https://i.imgur.com/iPJJ7nr.png")
        .addFields(
            {
                name: "🥇 ⇒ 1. místo",
                value: `<@${database.data[0].id}>\n${database.data[0].score} bodů`,
                inline: true
            },
            {
                name: "🥈 ⇒ 2. místo",
                value: `<@${database.data[1].id}>\n${database.data[1].score} bodů`,
                inline: true
            },
            {
                name: "🥉 ⇒ 3. místo",
                value: `<@${database.data[2].id}>\n${database.data[2].score} bodů`,
                inline: true
            }
        )

        msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({embeds: [e]})

        for (let i = 0; i < Math.min(3, database.data.length); i++) {
            // Provádění akce pro prvních 5 položek
            console.log(`Akce pro položku s ID ${database.data[i].id} a skóre ${database.data[i].score}`);
          }
        }
















        if (id == 3)
        {
            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("d201")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("🔖"),

                new ButtonBuilder()
                .setCustomId("d202")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:diamond_block:1223285153980481739>"),

                new ButtonBuilder()
                .setCustomId("d203")
                .setLabel("2x")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("🗞"),

                new ButtonBuilder()
                .setCustomId("d204")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:emerald_block:1223285204953858241>"),

                new ButtonBuilder()
                .setCustomId("d205")
                .setLabel("3x")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:redstone_block:1223286081449889862>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("d206")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:ward_armour_trim:1223285777379758100>"),

                new ButtonBuilder()
                .setCustomId("d207")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("📰"),

                new ButtonBuilder()
                .setCustomId("d208")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:copper:852294351496544296>"),

                new ButtonBuilder()
                .setCustomId("d209")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("📕"),

                new ButtonBuilder()
                .setCustomId("d210")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setDisabled(true)
                .setEmoji("<:diamond:1223286327718711447>"),

            )

            let msg = client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).messages.cache.get(message)
            msg.edit({components: [ar1,ar2]})

            msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nDíky Vaší usilovné práci se podařilo celou hromadu smetí prohledat. Děkujeme za odevzdání nalezených předmětů, za které byly přiděleny příslušné body. Během následujících maximálně 45 minut přijede další hromada smetí.`)
        let database = await require("./Database").loadDatabase()
        database.data.sort((a, b) => b.score - a.score); // Seřadí databázi sestupně podle skóre

        let e = new EmbedBuilder()
        .setTitle("Výsledky nejlepšího třídiče za sezónu")
        .setDescription("▧▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▨\n\nČest práci, soudruzi zde máte vyhlášení jak moc velcí soudruzi jste byli a děkujeme za věrnost a odměny jsou přijatelné za vaší odvedenou práci a službu.")
        .setColor("#943030")
        .setThumbnail("https://i.imgur.com/iPJJ7nr.png")
        .addFields(
            {
                name: "🥇 ⇒ 1. místo",
                value: `<@${database.data[0].id}>\n${database.data[0].score} bodů`,
                inline: true
            },
            {
                name: "🥈 ⇒ 2. místo",
                value: `<@${database.data[1].id}>\n${database.data[1].score} bodů`,
                inline: true
            },
            {
                name: "🥉 ⇒ 3. místo",
                value: `<@${database.data[2].id}>\n${database.data[2].score} bodů`,
                inline: true
            }
        )

        msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({embeds: [e]})

        for (let i = 0; i < Math.min(3, database.data.length); i++) {
            // Provádění akce pro prvních 5 položek
            console.log(`Akce pro položku s ID ${database.data[i].id} a skóre ${database.data[i].score}`);
          }
        }



























        if (id == 4)
        {
            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("e301")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:diamond_pickaxe:309458671925198848>"),

                new ButtonBuilder()
                .setCustomId("e302")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:wild_armour_trim:1223285180282966106>"),

                new ButtonBuilder()
                .setCustomId("e303")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("4x")
                .setDisabled(true)
                .setEmoji("<:gold:590724618386538516>"),

                new ButtonBuilder()
                .setCustomId("e304")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:iron:590724451566485546>"),

                new ButtonBuilder()
                .setCustomId("e305")
                .setLabel("2x")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:mc_cookie:309467336274870274>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("e306")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setDisabled(true)
                .setEmoji("<:Horn:1223307214127763466>"),

                new ButtonBuilder()
                .setCustomId("e307")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:flower_cyan_flower:872975537721725008>"),

                new ButtonBuilder()
                .setCustomId("e308")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:rib_armour_trim:1223285184380538982>"),

                new ButtonBuilder()
                .setCustomId("e309")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:coal:631754680753717258>"),

                new ButtonBuilder()
                .setCustomId("e310")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:mc_potato:631744909409386506>"),

            )

            let msg = client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).messages.cache.get(message)
            msg.edit({components: [ar1,ar2]})

            msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nDíky Vaší usilovné práci se podařilo celou hromadu smetí prohledat. Děkujeme za odevzdání nalezených předmětů, za které byly přiděleny příslušné body. Během následujících maximálně 45 minut přijede další hromada smetí.`)
        let database = await require("./Database").loadDatabase()
        database.data.sort((a, b) => b.score - a.score); // Seřadí databázi sestupně podle skóre

        let e = new EmbedBuilder()
        .setTitle("Výsledky nejlepšího třídiče za sezónu")
        .setDescription("▧▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▨\n\nČest práci, soudruzi zde máte vyhlášení jak moc velcí soudruzi jste byli a děkujeme za věrnost a odměny jsou přijatelné za vaší odvedenou práci a službu.")
        .setColor("#943030")
        .setThumbnail("https://i.imgur.com/iPJJ7nr.png")
        .addFields(
            {
                name: "🥇 ⇒ 1. místo",
                value: `<@${database.data[0].id}>\n${database.data[0].score} bodů`,
                inline: true
            },
            {
                name: "🥈 ⇒ 2. místo",
                value: `<@${database.data[1].id}>\n${database.data[1].score} bodů`,
                inline: true
            },
            {
                name: "🥉 ⇒ 3. místo",
                value: `<@${database.data[2].id}>\n${database.data[2].score} bodů`,
                inline: true
            }
        )

        msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({embeds: [e]})

        for (let i = 0; i < Math.min(3, database.data.length); i++) {
            // Provádění akce pro prvních 5 položek
            console.log(`Akce pro položku s ID ${database.data[i].id} a skóre ${database.data[i].score}`);
          }
        }



















        if (id == 5)
        {
            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("f401")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:blueorchid:1223741981377958080>"),

                new ButtonBuilder()
                .setCustomId("f402")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:corn_flower:1223742098017095720>"),

                new ButtonBuilder()
                .setCustomId("f403")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setDisabled(true)
                .setEmoji("<:dandelion:1223741988483104829>"),

                new ButtonBuilder()
                .setCustomId("f404")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:azure_bluet:1223741982946496564>"),

                new ButtonBuilder()
                .setCustomId("f405")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:poppy:1223741990018093066>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("f406")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:tulip_white:1223741979574407318>"),

                new ButtonBuilder()
                .setCustomId("f407")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:tulip_pink:1223741986343751792>"),

                new ButtonBuilder()
                .setCustomId("f408")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:tulip_orange:1223741984271761459>"),

                new ButtonBuilder()
                .setCustomId("f409")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:nametag:1223742053184442458>"),

                new ButtonBuilder()
                .setCustomId("f410")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<a:mc_lantern:1223742051674226808>"),

            )

            let msg = client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).messages.cache.get(message)
            msg.edit({components: [ar1,ar2]})

            msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nDíky Vaší usilovné práci se podařilo celou hromadu smetí prohledat. Děkujeme za odevzdání nalezených předmětů, za které byly přiděleny příslušné body. Během následujících maximálně 45 minut přijede další hromada smetí.`)
        let database = await require("./Database").loadDatabase()
        database.data.sort((a, b) => b.score - a.score); // Seřadí databázi sestupně podle skóre

        let e = new EmbedBuilder()
        .setTitle("Výsledky nejlepšího třídiče za sezónu")
        .setDescription("▧▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▨\n\nČest práci, soudruzi zde máte vyhlášení jak moc velcí soudruzi jste byli a děkujeme za věrnost a odměny jsou přijatelné za vaší odvedenou práci a službu.")
        .setColor("#943030")
        .setThumbnail("https://i.imgur.com/iPJJ7nr.png")
        .addFields(
            {
                name: "🥇 ⇒ 1. místo",
                value: `<@${database.data[0].id}>\n${database.data[0].score} bodů`,
                inline: true
            },
            {
                name: "🥈 ⇒ 2. místo",
                value: `<@${database.data[1].id}>\n${database.data[1].score} bodů`,
                inline: true
            },
            {
                name: "🥉 ⇒ 3. místo",
                value: `<@${database.data[2].id}>\n${database.data[2].score} bodů`,
                inline: true
            }
        )

        msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({embeds: [e]})

        for (let i = 0; i < Math.min(3, database.data.length); i++) {
            // Provádění akce pro prvních 5 položek
            console.log(`Akce pro položku s ID ${database.data[i].id} a skóre ${database.data[i].score}`);
          }
        }






















        if (id == 6)
        {
            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("g501")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:netherite_block:1223991915612213249>"),

                new ButtonBuilder()
                .setCustomId("g502")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setDisabled(true)
                .setEmoji("<:calcite:1223991930661244928>"),

                new ButtonBuilder()
                .setCustomId("g503")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:netherite_sword:1223992318248616037>"),

                new ButtonBuilder()
                .setCustomId("g504")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:dripstone:1223991941440606208>"),

                new ButtonBuilder()
                .setCustomId("g505")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:netherite_pickaxe:1223992314574143571>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("g506")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:amethyst:1223992322438463540>"),

                new ButtonBuilder()
                .setCustomId("g507")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:sea_lantern:1223991909521821847>"),

                new ButtonBuilder()
                .setCustomId("g508")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:copper_block:1223992324485546046>"),

                new ButtonBuilder()
                .setCustomId("g509")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setDisabled(true)
                .setEmoji("<:deepslate:1223991956061818921>"),

                new ButtonBuilder()
                .setCustomId("g510")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:netherite_shovel:1223992313211256902>"),

            )

            let msg = client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).messages.cache.get(message)
            msg.edit({components: [ar1,ar2]})

            msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nDíky Vaší usilovné práci se podařilo celou hromadu smetí prohledat. Děkujeme za odevzdání nalezených předmětů, za které byly přiděleny příslušné body. Během následujících maximálně 45 minut přijede další hromada smetí.`)
        let database = await require("./Database").loadDatabase()
        database.data.sort((a, b) => b.score - a.score); // Seřadí databázi sestupně podle skóre

        let e = new EmbedBuilder()
        .setTitle("Výsledky nejlepšího třídiče za sezónu")
        .setDescription("▧▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▨\n\nČest práci, soudruzi zde máte vyhlášení jak moc velcí soudruzi jste byli a děkujeme za věrnost a odměny jsou přijatelné za vaší odvedenou práci a službu.")
        .setColor("#943030")
        .setThumbnail("https://i.imgur.com/iPJJ7nr.png")
        .addFields(
            {
                name: "🥇 ⇒ 1. místo",
                value: `<@${database.data[0].id}>\n${database.data[0].score} bodů`,
                inline: true
            },
            {
                name: "🥈 ⇒ 2. místo",
                value: `<@${database.data[1].id}>\n${database.data[1].score} bodů`,
                inline: true
            },
            {
                name: "🥉 ⇒ 3. místo",
                value: `<@${database.data[2].id}>\n${database.data[2].score} bodů`,
                inline: true
            }
        )

        msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({embeds: [e]})

        for (let i = 0; i < Math.min(3, database.data.length); i++) {
            // Provádění akce pro prvních 5 položek
            console.log(`Akce pro položku s ID ${database.data[i].id} a skóre ${database.data[i].score}`);
          }
        }


































        if (id == 7)
        {
            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("h601")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:Technoblade:1224017754319884488>"),

                new ButtonBuilder()
                .setCustomId("h602")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:raw_porkchop:1224017751350317146>"),

                new ButtonBuilder()
                .setCustomId("h603")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("4x")
                .setDisabled(true)
                .setEmoji("<:carrot:1224017747030315068>"),

                new ButtonBuilder()
                .setCustomId("h604")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:book_n_quill:1224017482222800948>"),

                new ButtonBuilder()
                .setCustomId("h605")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:egg:1224017749966061568>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("h606")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:ruby:1224017485536432178>"),

                new ButtonBuilder()
                .setCustomId("h607")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:sugar_cane:1224017753019777176>"),

                new ButtonBuilder()
                .setCustomId("h608")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setDisabled(true)
                .setEmoji("<:cookie:1224017481006321776>"),

                new ButtonBuilder()
                .setCustomId("h609")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
                .setEmoji("<:KSC:1224020865986072727>"),

                new ButtonBuilder()
                .setCustomId("h610")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setDisabled(true)
                .setEmoji("<:milk:1224017486761033884>"),

            )

            let msg = client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).messages.cache.get(message)
            msg.edit({components: [ar1,ar2]})

            msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nDíky Vaší usilovné práci se podařilo celou hromadu smetí prohledat. Děkujeme za odevzdání nalezených předmětů, za které byly přiděleny příslušné body. Děkujeme za účast na eventu. Bodování oznámíme do 10 minut (neprve body přepočítáme).`)
            await wait(480000)
        let database = await require("./Database").loadDatabase()
        database.data.sort((a, b) => b.score - a.score); // Seřadí databázi sestupně podle skóre

        let e = new EmbedBuilder()
        .setTitle("Výsledky nejlepšího třídiče eventu")
        .setDescription("▧▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▨\n\nČest práci, soudruzi zde máte vyhlášení jak moc velcí soudruzi jste byli a děkujeme za věrnost a odměny jsou přijatelné za vaší odvedenou práci a službu.")
        .setColor("#943030")
        .setThumbnail("https://i.imgur.com/iPJJ7nr.png")
        .addFields(
            {
                name: "🥇 ⇒ 1. místo",
                value: `<@${database.data[0].id}>\n${database.data[0].score} bodů`,
                inline: true
            },
            {
                name: "🥈 ⇒ 2. místo",
                value: `<@${database.data[1].id}>\n${database.data[1].score} bodů`,
                inline: true
            },
            {
                name: "🥉 ⇒ 3. místo",
                value: `<@${database.data[2].id}>\n${database.data[2].score} bodů`,
                inline: true
            }
        )

        msg.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({content: `<@&${config.brigadnik}>\nDěkujeme za účast na dnešním speciálním eventu. Všechny umístěné žádáme, aby si vytvořili ticket. Odměna bude přidělena ihned po spuštění serveru.\nJeště jednou všem děkujeme!\n\nZa celý ÚV KSČ se poroučím, uvidíme se někdy příště!`, embeds: [e]})

        for (let i = 0; i < Math.min(3, database.data.length); i++) {
            // Provádění akce pro prvních 5 položek
            console.log(`Akce pro položku s ID ${database.data[i].id} a skóre ${database.data[i].score}`);
          }
        }
    }
}