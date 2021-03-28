const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const Statcord = require("statcord.js");
const statcord = new Statcord.Client({
    client,
    key:config.statkey,
    postCpuStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    postMemStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    postNetworkStatistics: true, /* Whether to post memory statistics or not, defaults to true */
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

const dbdExpress = require("dbd.express");
const Dashboard = new dbdExpress(bot);
Dashboard.API({
    port:4458,
    useSecureProtocol:true,
    authorizationKey:"Bearer root@1234"
});
Dashboard.createUI();

//Callbacks, command handler and some commands

bot.loadCommands("./commands/");

bot.botJoinCommand({
    channel: "794570132470366208", //the channel where <code> will be sent to
    code: `$title[Bot Added]
    $description[**Invite Link**
    $getServerInvite
    
    **Name**
    $serverName
    
    **Owner**
    $usertag[$ownerID]
   
   **Members Count**
   $membersCount
    ]
    $color[BLACK]

$djsEval[const fs = require('fs');

fs.access('/home/container/db/warnings/$guildID.json', (err) => {
    if (err) {
       fs.writeFile("/home/container/db/warnings/$guildID.json", '{}', function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New db successfully created for $guildID")
  }
})
    } else {
        console.log("$guildID is already registered.");
    }
});]
    ` //message sent to <channel>
});
//bot.onGuildJoin(); //callback itself

bot.botLeaveCommand({//command
    channel: "794570415023849473",//the channel where <code> will be sent to
    code: `Bot removed from $serverName`//message sent to <channel>
});
//bot.onGuildLeave(); //callback itself

/*bot.readyCommand({
    channel: "802775876420894780",
    code: `$description[Bot online!
    Ping: $ping MS
    Servers: $numberSeparator[$serverCount]
    Users: $numberSeparator[$allMembersCount]
    ]
    $color[BLACK]`
});

bot.deletedCommand({
    channel: "$channelID",
    code: `$setChannelVar[deletedMessage;$message;$channelID]
    $setChannelVar[deletedMessageAuthor;$authorID;$channelID]
    $setChannelVar[deletedMessageAuthorIcon;$authorAvatar;$channelID]
    $setChannelVar[deletedMessageDate;$month-$day-$year, $hour:$minute:$second;$channelID]
    `
});
bot.onMessageDelete();

bot.updateCommand({
    channel: "$channelID",
    code: `$setChannelVar[beforeEditedMessage;$oldMessage;$channelID]
    $setChannelVar[editedMessage;$message;$channelID]
    $setChannelVar[editedMessageAuthor;$authorID;$channelID]
    $setChannelVar[editedMessageAuthorIcon;$authorAvatar;$channelID]
    $setChannelVar[editedMessageDate;$month-$day-$year, $hour:$minute:$second;$channelID]`
});
bot.onMessageUpdate();

bot.command({
    name: "snipe",
    aliases: ['s'],
    description: "See the recently deleted message!",
    usage: "snipe",
    permission: "MANAGE_MESSAGES",
    code: `
    $author[$userTag[$getChannelVar[deletedMessageAuthor]]]
    $description[$getChannelVar[deletedMessage]]
   $thumbnail[$getChannelVar[deletedMessageAuthorIcon]]
    $color[BLACK] 
  $footer[$getChannelVar[deletedMessageDate]]
    
    $channelSendMessage[$getVar[cmdslogs];$username[$authorID]#$discriminator[$authorID] Used command \`snipe\` in server: $serverName[$guildID]]

$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
    
    $onlyIf[$getGlobalUserVar[blacklisted;$authorID]!=true;You’re blacklisted from using the bot!]
 $onlyIf[$getServerVar[blacklisteds]!=true;This guild is blacklisted from using the bot!]`
});

bot.command({
    name: "esnipe",
    aliases: ['es'],
    description: "See the recently edited message!",
   usage: "esnipe",
   permission: "MANAGE_MESSAGES",
    code: `$author[$userTag[$getChannelVar[editedMessageAuthor]]]
    $description[$addField[After;\`$getChannelVar[editedMessage]\`]
    $addField[Before;\`$getChannelVar[beforeEditedMessage]\`]]
    $thumbnail[$getChannelVar[editedMessageAuthorIcon]]
    $footer[$getChannelVar[editedMessageDate]]
    $color[BLACK]
    $onlyIf[$hasPerms[$authorID;managemessages]=true;You need the \`MANAGE_MESSAGES\` permission!]
   $onlyIf[$getGlobalUserVar[blacklisted;$authorID]!=true;You’re blacklisted from using the bot!]

$onlyIf[$getServerVar[blacklisteds]!=true;This guild is blacklisted from using the bot!]

$channelSendMessage[$getVar[cmdslogs];$username[$authorID]#$discriminator[$authorID] Used command \`esnipe\` in server: $serverName[$guildID]]

$setVar[cmdsused;$sum[$getVar[cmdsused];1]]`
});*/
/*bot.onJoined();
bot.onLeave();*/

//Variables

bot.variables({
//settings
    prefix: "h!",
    myid: "701292425624420362",
    moderation: "on",
    economy: "on",
    fun: "on",
    music: "on",
    welcomer: "on",
//Economy
    Money: 0,
    Bank: 0,
//Upvote/downvote system
    upvote: 0,
    downvote: 0,
//afk system
    afk: "off",
    afkmsg: "None",
//idk
    premium: false,
//Systems
    cmdsused: 22103,
    cmdslogs: "789270287501492275",
    lang: "en",
    blacklisted: false,
    blacklisteds: false,
//Welcomer
    joinmsg: "Not settled",
    leavemsg: "Not settled",
    joinc: "Not settled",
    leavec: "Not settled",
    wstate: "off",
    joincolor: "RANDOM",
    leavecolor: "RANDOM",
    joinfooter: "Welcome!",
    leavefooter: "Hopefully they come back soon!",
//Warnings system
    warn: 0,
//Snipe system
    deletedMessage: "",
    deletedMessageAuthor: "",
    deletedMessageAuthorIcon: "",
    deletedMessageDate: "",
//Editsnipe system
    editedMessage: "",
    beforeEditedMessage: "",
    editedMessageAuthor: "",
    editedMessageAuthorIcon: "",
    editedMessageDate: "",
    editedMessageLink: "",
});
//Statuses

bot.status({
      text: "$numberSeparator[$serverCount;,] Servers! | $numberSeparator[$allMembersCount] Users!",
      type: "WATCHING",
      time: 10
});

bot.status({
    text: "Expected Downtime!",
    type: "PLAYING",
    time: 15
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
    // Emitted when statcord autopost starts
    console.log("Started autopost"); 
});
statcord.on("post", status => {
    // status = false if the post was successful
    // status = "Error message" or status = Error if there was an error
    if (!status) console.log("Successful post");
    else console.error(status);
});
client.login(config.token)