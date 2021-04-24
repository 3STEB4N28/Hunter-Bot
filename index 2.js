const config = require("./config")
const Discord = require("discord.js");
const client = new Discord.Client();
const Statcord = require("statcord.js");
const statcord = new Statcord.Client({
    client,
    key: config.statkey,
    postCpuStatistics: true,
    postMemStatistics: true,
    postNetworkStatistics: true,
});
const dbd = require("dbd.js-lite");
const bot = new dbd.Bot({
    fetchInvites: true,
    sharding: false,
    shardAmount: 2,
    mobile: true,
	token: config.token,
	prefix: [config.prefix1, config.prefix2, config.prefix3],
    autoUpdate: true
});
const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/test", async (req, res) => {
    res.send(`Current ${client.user.tag}'s servers: ${client.guilds.cache.size}`);
    console.log(`Endpoint /test was requested by someone!`)
});

app.get("/status", (req, res) => {
    res.sendStatus(200);
});

app.post("/votes", function (request, response) {
    const webhook1 = new Discord.WebhookClient("798417003727028255", "ml00TMipm_vwda3lvHbNlomdcYTkztk3zeAA0y60XJTTC7bJb7AwC3bJT9glr1zKdTsl");
    const webhook2 = new Discord.WebhookClient("832879832370774046","ildScDou1jnNnF2Xgr0AbjqLp1fsHF99QDKHkMSJSn9Y-hXQBWFTfXk333xzFlAgG9Ds"); 
    let auth = request.headers.authorization
   // console.log(request.body)
    let req = request.body
  response.sendStatus(200) // tells the website that sent the POST request that everything was OK
  if (auth === "topgg1") {
      console.log(`[TOP.GG] ${req.user} just voted for ${req.bot} is weekend: ${req.isWeekend}`)
      let embed = new Discord.MessageEmbed()
      .setTitle(`Vote Received`)
      .setURL(`https://top.gg/bot/${req.bot}`)
      .setDescription(`<@!${req.user}> Thanks for voting me on **Top.gg**! 
      
This helps me grow and get more user's to know me!`)
      .setColor("BLACK")

      webhook1.send(embed)
      webhook2.send(`${req.user} top.gg ${req.isWeekend}`)
  } 
  
  else if (auth === "ibl1") {
      console.log(`[IBL] ${req.userID} just voted for ${req.botID}`) //userID
      let embed = new Discord.MessageEmbed()
      .setTitle(`Vote Received`)
      .setURL(`https://infinitybotlist.com/bots/${req.bot}`)
      .setDescription(`<@!${req.userID}> Thanks for voting me **Infinity Bot List**! 
      
This helps me grow and get more user's to know me!`)
      .setColor("BLACK")

      webhook1.send(embed)
      webhook2.send(`${req.userID} ibl`)
  } 
  
  else if (auth === "dl1") {
      console.log(`[DL] ${req.uid} voted for ${req.bid}`)
      let embed = new Discord.MessageEmbed()
      .setTitle(`Vote Received`)
      .setURL(`https://bots.discordlabs.org/bot/${req.bid}`)
      .setDescription(`<@${req.uid}> Thanks for voting me on **Discord Bot Labs**! 
      
This helps me grow and get more user's to know me!`)
      .setColor("BLACK")

      webhook1.send(embed)
      webhook2.send(`${req.uid} dl`)
  }
  
   else if (auth === "tc1") {
      console.log(`[TC] ${req.User.ClientID} voted for ${req.ClientID}`)
      let embed = new Discord.MessageEmbed()
      .setTitle(`Vote Received`)
      .setURL(`https://topcord.xyz/bot/${req.ClientID}`)
      .setDescription(`<@${req.User.ClientID}> Thanks for voting me on **Top Cord**! 
      
This helps me grow and get more user's to know me!`)
      .setColor("BLACK")

      webhook1.send(embed)
      webhook2.send(`${req.User.ClientID} tc`)
  }
  
   else if (auth === "abl1") {
      console.log(`[ABL] ${req.voted} just voted for ${req.bot} total votes: ${req.totalVotes}`)    
      let embed = new Discord.MessageEmbed()
      .setTitle(`Vote Received`)
      .setURL(`https://botlists.com/bot/${req.bot}`)
      .setDescription(`<@${req.voted}> Thanks for voting me on **Astro Bot List**! 
      
This helps me grow and get more user's to know me!`)
      .setColor("BLACK")

      webhook1.send(embed)
      webhook2.send(`${req.voted} abl`)
  }
  
   else if (auth === "bbl1") {
      console.log(`[BBL] ${req.userid} voted for ${req.botID}`) 
      let embed = new Discord.MessageEmbed()
      .setTitle(`Vote Received`)
      .setURL(`https://bladebotlist.xyz/bot/${req.botID}`)
      .setDescription(`<@${req.userid}> Thanks for voting me on **Blade Bot List**! 
      
This helps me grow and get more user's to know me!`)
      .setColor("BLACK")

      webhook1.send(embed)
      webhook2.send(`${req.userid} bbl`)
  }
  
   else if (auth === "bfd1") {
      console.log(`[BFD] ${req.user} voted for ${req.bot}`)
      let embed = new Discord.MessageEmbed()
      .setTitle(`Vote Received`)
      .setURL(`https://botsfordiscord.com/bot/${req.bot}`)
      .setDescription(`<@${req.user}> Thanks for voting me on **Bots For Discord**! 
      
This helps me grow and get more user's to know me!`)
      .setColor("BLACK")

      webhook1.send(embed)
      webhook2.send(`${req.user} bfd`)
  }
  
   else if (auth === "dbl1") {
      console.log(`[DBL] ${req.id} voted for ${client.user.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle(`Vote Received`)
      .setURL(`https://discordbotlist.com/bots/${client.user.id}`)
      .setDescription(`<@${req.id}> Thanks for voting me on **Discord Bot List**! 
      
This helps me grow and get more user's to know me!`)
      .setColor("BLACK")

      webhook1.send(embed)
      webhook2.send(`${req.id} dbl`)
  }

   else if (auth === "dboats1") {
       console.log(`[DBOATS] ${req.user.id} voted for ${req.bot.id}`)
   }
  
  else if (auth === "vb1") {
      console.log(`[VB] ${req.user} voted for ${req.bot}`) 
      let embed = new Discord.MessageEmbed()
      .setTitle(`Vote Received`)
      .setURL(`https://voidbots.net/bot/${req.bot}`)
      .setDescription(`<@${req.user}> Thanks for voting me on **Void Bots**! 
      
This helps me grow and get more user's to know me!`)
      .setColor("BLACK")

      webhook1.send(embed)
      webhook2.send(`${req.user} vb`)
  }
  
   else if (req.site === "botlist.space") {
      console.log(`[BLS] ${req.user,id} voted for ${req.bot}`)
      let embed = new Discord.MessageEmbed()
      .setTitle(`Vote Received`)
      .setURL(`https://botlist.space/bot/${req.bot}`)
      .setDescription(`<@${req.user.id}> Thanks for voting me on **Bot List.space**! 
      
This helps me grow and get more user's to know me!`)
      .setColor("BLACK")

      webhook1.send(embed)
      webhook2.send(`${req.user.id} bls`)
  }
 
   else {
      console.log(`[UNKNOWN] ${req}`);
  }
});

app.listen(2000, () => {
    console.log("Website + Webhook is up and running");
});

let id = "755094850113896639"

client.on('ready', () => {
    statcord.autopost();
    const blapi = require("blapi");
    const apiKeys = {
        // Add other bot lists as needed
 		"botlist.space": config.blspace,
  		"bladebotlist.xyz": config.bladebl,
  		"blist.xyz": config.blist,
  		"botlists.com": config.botlists,
  		"botsfordiscord.com": config.bfd,
  		"discord-botlist.eu": config.dbleu,
  		"discordbotlist.com": config.dblist,  					
        "discordlistology.com": config.dlo,  					
        "infinitybotlist.com": config.ibl,
  		"voidbots.net": config.voidb,
  		"space-bot-list.xyz": config.sbl, 
        "arcane-center.xyz": config.ac,  						
  		"discordextremelist.xyz": config.del,
  		"botrix.cc": config.btr,
        "fateslist.xyz": config.fateslist,
        "botlists.com": config.abl,

};
blapi.handle(client, apiKeys, 90);

console.log(`Client logged in as ${client.user.tag} current statistics Server Count: ${client.guilds.cache.size} Users Count: ${client.users.cache.size}`)
blapi.setLogging({
    extended: true
});
});
    statcord.on("autopost-start", () => {
    console.log("Started autopost"); 
});
statcord.on("post", status => {
    if (!status) console.log("Successful post");
    else console.error(status);
});

bot.onMessage({
	respondToBots: true
});
bot.onGuildJoin();
bot.onGuildLeave();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.onJoined();
bot.onLeave();


bot.loadCommands("./commands/");

//https://discord.com/api/webhooks/830868134210306079/oE2BqaooBJ_PAb3A3NgLcZExRQK4-kEmJoL1LadDeZ-HlxSOVKqro9WmAe8BSHsfXt5l

bot.variables({
	prefix: "h!",
	economy: "on",
	fun: "on",
	misc: "on",
	moderation: "on",
	welcomer: "on",
	ecostatus: "on",
	funstatus: "on",
	miscstatus: "on",
	modstatus: "on",
	welcstatus: "on",
	logsst: "off",
	logswebhooktoken: "oE2BqaooBJ_PAb3A3NgLcZExRQK4-kEmJoL1LadDeZ-HlxSOVKqro9WmAe8BSHsfXt5l",
	logswebhookid: "830868134210306079",
	ecologs: "829454196771520582",
    logschannel: "",
	botfooter: "©2021 Hunter Bot Development Team",
	
	Money: 0,
	Bank: 0,
	job: "Not Selected!",
	jobmulti: 1,
	whrs: 0,
	ecosign: "🔹",
    teamscount: 0,
	teamBank: 0,
	teamName: "",
	teamMembers: "",
	teamInvite: false,
	teamHP: 100,
	teamLevel: 0,
	teamXP: 0,
	teamXPReq: 100,
	teamOwner: "",
	teamCoOwner: "",
	hourlyBox: 0,
	dailyBox: 0,
	weeklyBox: 0,
	monthlyBox: 0,
	hourlyCase: 0,
	dailyCase: 0,
	weeklyCase: 0,
	monthlyCase: 0,
	votePoints: 0,
	voteBox: 0,
	
	botlastmsgid: "",
	upvote: 0,
	downvote: 0,
	upvotes: 0,
	downvotes: 0,
	cmdsused: 22172,
    statsmsg: "831910034215796746",
    usercmdsused: 0,
	cmdslogs: "829454222067236884",
	blacklisted: false,
	blacklisteds: false,
	blacklistedreason: "",
	blacklistedsreason: "",
	blacklistedsmod: `${id}`,
	blacklistedmod: `${id}`,
	blacklisteddate: "",
	blacklistedsdate: "",
    blacklistedUsers: 0,
    blacklistedServers: 0,
	acceptedRules: false,
    devTeamMember: false,
	
	joinmsg: "Just joined!",
	joinc: "",
	joinfooter: "Please read the rules before chatting!",
	leavemsg: "Just left us!",
	leavec: "",
	leavefooter: "Hopefully they come back soon!",
	
	delmsg: "",
	delmsgauth: "",
	delmsgdate: "",
	
	editmsg: "",
	beeditmsg: "",
	editmsgauth: "",
	editmsgdate: "",
	editmsglink: ""
});

bot.status({
      text: "$numberSeparator[$serverCount;,]/250 Servers! | $numberSeparator[$allMembersCount] Users!",
      type: "WATCHING",
      time: 10
});

/*bot.status({
    text: "V4.0.0 This weekend!",
    type: "PLAYING",
    time: 15
});

bot.status({
    text: "Development mode enabled!",
    type: "WATCHING",
    time: 15
});*/

bot.loopCommand({
	channel: "829454380373114950",
	code: `$editChannel[829454380373114950;$default;Servers Count: $numberSeparator[$serverCount;,];$default;$default;$default;default]`,
	executeOnStartup: true,
	every: 120000 //2 minutes
});
bot.loopCommand({
	channel: "830618658975514676",
	code: `$editChannel[830618658975514676;$default;Users Count: $numberSeparator[$allMembersCount;,];$default;$default;$default;$default]`,
	executeOnStartup: true,
	every: 120000,
});
bot.loopCommand({
    channel: "$findChannel[stats]",
    code: `$log[Statistics updated on Hunter's Lounge!]
    $editMessage[$getVar[statsmsg];{title:$userTag[$clientid]'s Statistics}
    {description:Current statistics of the bot!}
    {field:Current Version:\`v4.0.0\`:no}
    {field:Next Version: \`v5.0.0\`:no}
    {field:Current Language:\`DBD.js-lite v$packageVersion\`:no}
    {field:Next Language:\`Discord.js\`:no}
    {field:Total Servers:\`$numberSeparator[$serverCount]\`:no}
    {field:Total Users:\`$numberSeparator[$allMembersCount]\`:no}
    {field:Total Channels:\`$numberSeparator[$allChannelsCount]\`:no}
    {field:Total Commands Used:\`$numberSeparator[$getVar[cmdsused]]\`:no}
    {field:Total Blacklisted Users:\`$numberSeparator[$getVar[blacklistedUsers]]\`:no}
    {field:Total Blacklisted Servers:\`$numberSeparator[$getVar[blacklistedServers]]\`:no}
    {field:Total Teams:\`$numberSeparator[$getVar[teamscount]]\`:no}
    {color:BLACK}
    {footer:Last updated at $month $dayth $year $hour-$minute EST}
    $timezone[America/New_York]
    ]
    `,
    executeOnStartup: true,
    every: 600000
});

client.login(config.token);
;
