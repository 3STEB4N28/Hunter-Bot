module.exports = [{
	name: "search",
	code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`search\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$awaitMessages[$authorID;20s;$splittext[1],$splittext[2],$splittext[3];$splittext[1],$splittext[2],$splittext[3];Command Timed Out!;]
	**Where do you want to search?**
 Pick a location from below, and type it in the chat.
	
\`$splittext[1]\`, \`$splittext[2]\`, \`$splittext[3]\`
	
	$textSplit[$randomText[tree;car;house]-$randomText[room;bus;sink;bathroom]-$randomText[discord;truck;coat;purse];-]
	$globalCooldown[45s;Wait %time% until searching again!]
$onlyIf[$getServerVar[blacklisted]!=true;{title:Error}
{description:You were blacklisted by $userTag[$getServerVar[blacklistedmod]] for \`$getServerVar[blacklistedreason]\` on $getServerVar[blacklisteddate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$getServerVar[blacklisteds]!=true;{title:Error}
{description:This guild was blacklisted by $userTag[$getServerVar[blacklistedsmod]] for \`$getServerVar[blacklistedsreason]\` on $getServerVar[blacklistedsdate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$onlyIf[$isBot[$authorID]==false;]
	`
}];
