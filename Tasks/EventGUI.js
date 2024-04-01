const { Client, Message, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

let wait = async (ms) => await new Promise(r => setTimeout(r,ms));
const config = require("../Configuration/configuration.json")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Maximum je zahrnuto a minimum je zahrnuto
  }

module.exports = {
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     * @param {Message} message
     * * @param {number} id
     */
    async execute(message, id, client) {
        if (id == 1)
        {
            client.user.setStatus("online")
            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nPátrací tým dokončuje akci a dorazí během příštích 4 minut, ostatní týmy se připravte, brzy bude první hromada skládky!`)
            let time = await getRandomInt(60,240)
            await wait(time * 1000)

            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("b001")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:amethyst:852294961658724394>"),

                new ButtonBuilder()
                .setCustomId("b002")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:copper:852294351496544296>"),

                new ButtonBuilder()
                .setCustomId("b003")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setEmoji("<:flower_poppy:872975537495216219>"),

                new ButtonBuilder()
                .setCustomId("b004")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:snout_armour_trim:1223286239210504362>"),

                new ButtonBuilder()
                .setCustomId("b005")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:redstone_dust:691841117012099164>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("b006")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:flower_torchflower:1132394458214846634>"),

                new ButtonBuilder()
                .setCustomId("b007")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:diamond:1223286327718711447>"),

                new ButtonBuilder()
                .setCustomId("b008")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:bread:1223282955858739271>"),

                new ButtonBuilder()
                .setCustomId("b009")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("4x")
                .setEmoji("<:copper:852294351496544296>"),

                new ButtonBuilder()
                .setCustomId("b010")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:flower_poppy:872975537495216219>"),

            )

            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({content: `<@&${config.brigadnik}>\nVýborně, pátrací jednotka přijela na místo a vyložila náklad z smetiště o váze 8.3 tun skládky, Druhý tým se může dát směle do práce!`, components: [ar1, ar2]})
            client.user.setStatus("idle")
            return
        }















        if (id == 2)
        {
            client.user.setStatus("online")
            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nPo odjezdu první hlídky, odjela během několika desítek minut kolona dalších pátracích týmů vyjíždět na různá smetiště nakládat hromady skládky a vykladát na examinaci! Další hromada zde bude během 3 minut!`)
            let time = await getRandomInt(50,150)
            await wait(time * 1000)

            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("c101")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:apple:1223285148649394236>"),

                new ButtonBuilder()
                .setCustomId("c102")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:emerald:590539774365007912>"),

                new ButtonBuilder()
                .setCustomId("c103")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:diamond_axe:631758299649540097>"),

                new ButtonBuilder()
                .setCustomId("c104")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:beacon:1223285144086118490>"),

                new ButtonBuilder()
                .setCustomId("c105")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:shulker_box:1223285142471311460>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("c106")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:bread:1223282955858739271>"),

                new ButtonBuilder()
                .setCustomId("c107")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:pigstep:883441805666975826>"),

                new ButtonBuilder()
                .setCustomId("c108")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:flower_tulip_red:872975537746882651>"),

                new ButtonBuilder()
                .setCustomId("c109")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:eye_armour_trim:1223285188390555668>"),

                new ButtonBuilder()
                .setCustomId("c110")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:mc_egg:838877398010560522>"),

            )

            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({content: `<@&${config.brigadnik}>\nDruhá pátrací skupina se s nákladem vrátila na místo vykládku a akce prohledávání začíná.`, components: [ar1, ar2]})
            client.user.setStatus("idle")
            return
        }





























        if (id == 3)
        {
            client.user.setStatus("online")
            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nPátrací tým Detektivů našel cenné staré výtisky **📜 Rudého práva z dob K. Gottwalda** a posádka nákladních transportérů si během cesty všimla i nebezpečných přibližujících se aut, tudíž na místo vyjíždí i hlídka přidružená k detektivům - transport cenných starých výtisku se může prodloužit až do několika dalších minut, doufejme, že nebudou přepadeni!`)
            let time = await getRandomInt(100,180)
            await wait(time * 1000)

            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nCenné staré výtisky 📜 **Rudého práva z dob Klementa Gottwalda** byly neúprosně ukradeny západními imperialisty od přibližujících se aut a byly nám odcizeny tyto vozy **Tatra 111 S3** v počtu 4x a 2x **Trabant 601** hlídek, které na místě smutečně nepřežily.\n\n\Konec je zároveň smutečním převozem, kde jejich poslední převážka v historii měla rekordních 10.3 tun a obsahovala mnoho cenných věcí, včetně **Rudého práva K. G.**, které se podařilo zachránit. Vykládka započne každým okamžikem.`)
            let time1 = await getRandomInt(60,120)
            await wait(time1 * 1000)

            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("d201")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("🔖"),

                new ButtonBuilder()
                .setCustomId("d202")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:diamond_block:1223285153980481739>"),

                new ButtonBuilder()
                .setCustomId("d203")
                .setLabel("2x")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("🗞"),

                new ButtonBuilder()
                .setCustomId("d204")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:emerald_block:1223285204953858241>"),

                new ButtonBuilder()
                .setCustomId("d205")
                .setLabel("3x")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:redstone_block:1223286081449889862>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("d206")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:ward_armour_trim:1223285777379758100>"),

                new ButtonBuilder()
                .setCustomId("d207")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("📰"),

                new ButtonBuilder()
                .setCustomId("d208")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:copper:852294351496544296>"),

                new ButtonBuilder()
                .setCustomId("d209")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("📕"),

                new ButtonBuilder()
                .setCustomId("d210")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setEmoji("<:diamond:1223286327718711447>"),

            )

            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({content: `<@&${config.brigadnik}>\nNa místo vykládky přijel se svým nákladem třetí tým detektivů i s cennými výstisky rudého práva.`, components: [ar1, ar2]})
            client.user.setStatus("idle")
            return
        }














        


        if (id == 4)
        {
            client.user.setStatus("online")
            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nNa místo vykládky úspěšně dorazil čtvrtý pátrací tým a spolu s ním také další hromada k prohledání. Za chvíli započne vykládka.`)
            let time = await getRandomInt(100,180)
            await wait(time * 1000)

            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("e301")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:diamond_pickaxe:309458671925198848>"),

                new ButtonBuilder()
                .setCustomId("e302")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:wild_armour_trim:1223285180282966106>"),

                new ButtonBuilder()
                .setCustomId("e303")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("4x")
                .setEmoji("<:gold:590724618386538516>"),

                new ButtonBuilder()
                .setCustomId("e304")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:iron:590724451566485546>"),

                new ButtonBuilder()
                .setCustomId("e305")
                .setLabel("2x")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:mc_cookie:309467336274870274>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("e306")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setEmoji("<:Horn:1223307214127763466>"),

                new ButtonBuilder()
                .setCustomId("e307")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:flower_cyan_flower:872975537721725008>"),

                new ButtonBuilder()
                .setCustomId("e308")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:rib_armour_trim:1223285184380538982>"),

                new ButtonBuilder()
                .setCustomId("e309")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:coal:631754680753717258>"),

                new ButtonBuilder()
                .setCustomId("e310")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:mc_potato:631744909409386506>"),

            )

            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({content: `<@&${config.brigadnik}>\nPátrací tým dorazil na místo vykládky bez sebemenších problémů. Celý plán roztřídění smetí zatím plníme na 130%. Směle do práce, soudruzi!`, components: [ar1, ar2]})
            client.user.setStatus("idle")
            return
        }


































        if (id == 5)
        {
            client.user.setStatus("online")
            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nPátý pátrací tým přivezl hromadu skládky ze zahrádkářských kolonií, vykládka bude brzy zahájena.`)
            let time = await getRandomInt(100,180)
            await wait(time * 1000)

            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("f401")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:blueorchid:1223741981377958080>"),

                new ButtonBuilder()
                .setCustomId("f402")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:corn_flower:1223742098017095720>"),

                new ButtonBuilder()
                .setCustomId("f403")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setEmoji("<:dandelion:1223741988483104829>"),

                new ButtonBuilder()
                .setCustomId("f404")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:azure_bluet:1223741982946496564>"),

                new ButtonBuilder()
                .setCustomId("f405")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:poppy:1223741990018093066>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("f406")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:tulip_white:1223741979574407318>"),

                new ButtonBuilder()
                .setCustomId("f407")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:tulip_pink:1223741986343751792>"),

                new ButtonBuilder()
                .setCustomId("f408")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:tulip_orange:1223741984271761459>"),

                new ButtonBuilder()
                .setCustomId("f409")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:nametag:1223742053184442458>"),

                new ButtonBuilder()
                .setCustomId("f410")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<a:mc_lantern:1223742051674226808>"),

            )

            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({content: `<@&${config.brigadnik}>\nVykládka byla zahájena, můžete se pustit do práce.`, components: [ar1, ar2]})
            client.user.setStatus("idle")
            return
        }





















        if (id == 6)
        {
            client.user.setStatus("online")
            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nPátrací tým dokončuje akci a dorazí během příštích 4 minut, ostatní týmy se připravte, brzy bude první hromada skládky!`)
            let time = await getRandomInt(60,240)
            await wait(time * 1000)

            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("g501")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:netherite_block:1223991915612213249>"),

                new ButtonBuilder()
                .setCustomId("g502")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setEmoji("<:calcite:1223991930661244928>"),

                new ButtonBuilder()
                .setCustomId("g503")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:netherite_sword:1223992318248616037>"),

                new ButtonBuilder()
                .setCustomId("g504")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:dripstone:1223991941440606208>"),

                new ButtonBuilder()
                .setCustomId("g505")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:netherite_pickaxe:1223992314574143571>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("g506")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:amethyst:1223992322438463540>"),

                new ButtonBuilder()
                .setCustomId("g507")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:sea_lantern:1223991909521821847>"),

                new ButtonBuilder()
                .setCustomId("g508")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:copper_block:1223992324485546046>"),

                new ButtonBuilder()
                .setCustomId("g509")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("5x")
                .setEmoji("<:deepslate:1223991956061818921>"),

                new ButtonBuilder()
                .setCustomId("g510")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:netherite_shovel:1223992313211256902>"),

            )

            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({content: `<@&${config.brigadnik}>\nVýborně, pátrací jednotka přijela na místo a vyložila náklad z smetiště o váze 8.3 tun skládky, Druhý tým se může dát směle do práce!`, components: [ar1, ar2]})
            client.user.setStatus("idle")
            return
        }












        if (id == 7)
        {
            client.user.setStatus("online")
            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send(`<@&${config.brigadnik}>\nVážení soudruzi, díky Vaší usilovné práci už zbývá jen jedna hromada skládky k vytřídění. Bude pátracím týmem dovezena za několik minut a obsahuje mnoho cenných artefaktů.`)
            let time = await getRandomInt(60,240)
            await wait(time * 1000)

            const ar1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("h601")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:Technoblade:1224017754319884488>"),

                new ButtonBuilder()
                .setCustomId("h602")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:raw_porkchop:1224017751350317146>"),

                new ButtonBuilder()
                .setCustomId("h603")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("4x")
                .setEmoji("<:carrot:1224017747030315068>"),

                new ButtonBuilder()
                .setCustomId("h604")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:book_n_quill:1224017482222800948>"),

                new ButtonBuilder()
                .setCustomId("h605")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:egg:1224017749966061568>"),

            )




            const ar2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("h606")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:ruby:1224017485536432178>"),

                new ButtonBuilder()
                .setCustomId("h607")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:sugar_cane:1224017753019777176>"),

                new ButtonBuilder()
                .setCustomId("h608")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("2x")
                .setEmoji("<:cookie:1224017481006321776>"),

                new ButtonBuilder()
                .setCustomId("h609")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("<:KSC:1224020865986072727>"),

                new ButtonBuilder()
                .setCustomId("h610")
                .setStyle(ButtonStyle.Secondary)
                .setLabel("3x")
                .setEmoji("<:milk:1224017486761033884>"),

            )

            message.client.guilds.cache.get(config.guild_id).channels.cache.get(config.channel_id).send({content: `<@&${config.brigadnik}>\nVýborně, pátrací jednotka přijela na místo a vyložila náklad z smetiště o váze 8.3 tun skládky, Druhý tým se může dát směle do práce!`, components: [ar1, ar2]})
            client.user.setStatus("idle")
            return
        }
        
        //message.channel.send("Smítko #" + id.toString())
    }
}