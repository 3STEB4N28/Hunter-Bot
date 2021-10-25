const config = require("./config")
const Discord = require("discord.js");
const client = new Discord.Client();
const Statcord = require("statcord.js");
/*const statcord = new Statcord.Client({
    client,
    key: config.statkey,
    postCpuStatistics: true,
    postMemStatistics: true,
    postNetworkStatistics: true,
});*/
const aoi = require("aoi.js-light");
const bot = new aoi.Bot({
	sharding: false,
	shardAmount: 2,
	mobile: true,
	token: config.token,
	prefix: [config.prefix1, config.prefix2, config.prefix3],
});

/*
const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/votes", function (request, response) {
	//https://discord.com/api/webhooks/id/token
    const webhook1 = new Discord.WebhookClient("public-webhook-id", "public-webhook-token");
    const webhook2 = new Discord.WebhookClient("private-webhook-id","private-webhook-token"); 
    let auth = request.headers.authorization
    let req = request.body
  response.sendStatus(200) // Tells the website that sent the POST request that everything was OK
  if (auth === "top.gg") {
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
  
  else if (auth === "infinitybotlist") {
      console.log(`[IBL] ${req.userID} just voted for ${req.botID}`) //userID
      let embed = new Discord.MessageEmbed()
      .setTitle(`Vote Received`)
      .setURL(`https://infinitybotlist.com/bots/${req.bot}`)
      .setDescription(`<@!${req.userID}> Thanks for voting me on **Infinity Bot List**! 
      
This helps me grow and get more user's to know me!`)
      .setColor("BLACK")

      webhook1.send(embed)
      webhook2.send(`${req.userID} ibl`)
  } 
  
  else if (auth === "discordlabs") {
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
  
   else if (auth === "topcord") {
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
  
   else if (auth === "astrobotlist") {
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
  
   else if (auth === "bladebotlist") {
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
  
   else if (auth === "botsfordiscord") {
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
  
   else if (auth === "discordbotlist") {
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

   else if (auth === "discordboats") {
       console.log(`[DBOATS] ${req.user.id} voted for ${req.bot.id}`)
   }
  
  else if (auth === "voidbots") {
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
});*/

let id = "your-bots-client-id-here"

/*
client.on('ready', () => {
    statcord.autopost();
    const blapi = require("blapi");
    const apiKeys = {
        // Add other bot lists as needed
	    "top.gg": config.topgg,
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
});*/

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
	ecologs: "Economy logs channel id here",
	logschannel: "",
	botfooter: "©2021 Hunter Bot Development Team",
	
	Money: 0,
	Bank: 0,
	job: "Not Selected!",
	jobmulti: 1,
	whrs: 0,
	ecosign: "🔹",
    	
	botlastmsgid: "",
	upvote: 0,
	downvote: 0,
	upvotes: 0,
	downvotes: 0,
	cmdsused: 22172,
        statsmsg: "a status messae id that the bot will edit with the current statistics of it",
        usercmdsused: 0,
	cmdslogs: "the commands logs channel",
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
      text: "$numberSeparator[$serverCount;,] Servers! | $numberSeparator[$allMembersCount] Users!",
      type: "WATCHING",
      time: 10
});

bot.loopCommand({
    channel: "status channel id",
    code: `$log[Statistics updated on Hunter's Lounge!]
    $editMessage[$getVar[statsmsg];{title:$userTag[$clientid]'s Statistics}
    {description:Current statistics of the bot!}
    {field:Current Version:\`v1.0.0\`:no}
    {field:Next Version: \`v2.0.0\`:no}
    {field:Current Language:\`Aoi.js-light v$packageVersion\`:no}
    {field:Total Servers:\`$numberSeparator[$serverCount]\`:no}
    {field:Total Users:\`$numberSeparator[$allMembersCount]\`:no}
    {field:Total Channels:\`$numberSeparator[$allChannelsCount]\`:no}
    {field:Total Commands Used:\`$numberSeparator[$getVar[cmdsused]]\`:no}
    {color:BLACK}
    {footer:Last updated at $month $dayth $year $hour-$minute EST}
    $timezone[America/New_York]
    ]
    `,
    executeOnStartup: true,
    every: 600000
});

client.login(config.token);
