const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const Statcord = require("statcord.js");
const statcord = new Statcord.Client({
    client,
    key:config.statkey,
    postCpuStatistics: true,
    postMemStatistics: true,
    postNetworkStatistics: true,
});
const dbd = require("dbd.js");
const bot = new dbd.Bot({
    fetchInvites: true,
    sharding: false,
    shardAmount: 2,
    mobile: true,
    token: config.token, 
    prefix: ['$getServerVar[prefix]', '<@755094850113896639>', '<@!755094850113896639>']
});
const DBL = require("dblapi.js");
const dbl = new DBL(config.topggkey);

dbl.on('posted', () => {
    console.log('Server count posted!');
});

dbl.on('error', () => {
    console.log("Oops! ${e}");
});

client.on('ready', () => {
    setInterval(() => {
        
        dbl.postStats(client.guilds.cache.size);
        console.log("Current djs servers " + client.guilds.cache.size);
    }, 240000);
    statcord.autopost();
});
    statcord.on("autopost-start", () => {
    console.log("Started autopost"); 
});
statcord.on("post", status => {
    if (!status) console.log("Successful post");
    else console.error(status);
});

bot.loadCommands("./commands/");

/*bot.readyCommand({
    channel: "802775876420894780",
    code: `$description[Bot online!
    Ping: $ping MS
    Servers: $numberSeparator[$serverCount]
    Users: $numberSeparator[$allMembersCount]
    ]
    $color[BLACK]`
});*/

bot.variables({
    prefix: "h!",
    myid: "701292425624420362",
    moderation: "on",
    economy: "on",
    fun: "on",
    music: "on",
    welcomer: "on",
    Money: 0,
    Bank: 0,
    upvote: 0,
    downvote: 0,
    afk: "off",
    afkmsg: "None",
    premium: false,
    cmdsused: 22103,
    cmdslogs: "789270287501492275",
    blacklisted: false,
    blacklisteds: false,
    joinmsg: "Not settled",
    leavemsg: "Not settled",
    joinc: "Not settled",
    leavec: "Not settled",
    wstate: "off",
    joincolor: "RANDOM",
    leavecolor: "RANDOM",
    joinfooter: "Welcome!",
    leavefooter: "Hopefully they come back soon!",
    warn: 0,
    deletedMessage: "",
    deletedMessageAuthor: "",
    deletedMessageAuthorIcon: "",
    deletedMessageDate: "",
    editedMessage: "",
    beforeEditedMessage: "",
    editedMessageAuthor: "",
    editedMessageAuthorIcon: "",
    editedMessageDate: "",
    editedMessageLink: "",
});

bot.status({
      text: "$numberSeparator[$serverCount;,] Servers! | $numberSeparator[$allMembersCount] Users!",
      type: "WATCHING",
      time: 10
});
client.login(config.token)
