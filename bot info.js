module.exports = [{
	name: "bot",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`bot info\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$title[Bot Information]
	$addField[Client;
	\`\`\`
	Owner       :: $userTag[$botOwnerID]
	ID          :: $clientID
	Latency     :: $botPing MS 
	Uptime      :: $uptime
	Servers     :: $replaceText[$numberSeparator[$serverCount;,];69;6️⃣9️⃣]
	Users       :: $replaceText[$numberSeparator[$allMembersCount;,];69;6️⃣9️⃣]
	Channels    :: $replaceText[$numberSeparator[$allChannelsCount;,];69;6️⃣9️⃣]
	Commands    :: $replaceText[$numberSeparator[$commandsCount;,];69;6️⃣9️⃣]\`\`\`
	;yes]
	$addField[Packages/Versions;
	\`\`\`
	Node.js     :: $getObjectProperty[nodev]
	Discord.js  :: v$getObjectProperty[discorddv]
	DBD.js(Lite):: v$packageVersion
 Client      :: v4.0.0\`\`\`;yes]
	$addField[Hosting Information;\`\`\`
	CPU Usage   :: $cpu
	CPU Model   :: $djsEval[require ('os').cpus()[0].model;yes]
	CPU Platform:: $djsEval[require ('os').platform();yes]
	RAM Usage   :: $ram/512 MB
	Memory Usage:: $roundTenth[$djsEval[process.memoryUsage().rss / 1024 / 1024;yes];2]/1024 MB\`\`\`;yes]
	$djsEval[d.object.nodev = process.version
	d.object.discorddv = require('discord.js').version
	$createObject[{}]]
    $footer[$getVar[botfooter]]
	$color[BLACK]
	
	$onlyIf[$message[1]==info;]
	$onlyIf[$getServerVar[blacklisted]!=true;{title:Error}
{description:You were blacklisted by $userTag[$getServerVar[blacklistedmod]] for \`$getServerVar[blacklistedreason]\` on $getServerVar[blacklisteddate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$getServerVar[blacklisteds]!=true;{title:Error}
{description:This guild was blacklisted by $userTag[$getServerVar[blacklistedsmod]] for \`$getServerVar[blacklistedsreason]\` on $getServerVar[blacklistedsdate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
   $onlyIf[$isBot[$authorID]==false;] `
}]