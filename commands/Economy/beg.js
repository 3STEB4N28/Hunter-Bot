module.exports = [{
	name: "beg",
	code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`beg\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$wait[10s]

$channelSendMessage[$getVar[ecologs];{title:Economy Logs}
	{description:\`\`\`\n$userTag[$authorID] gained $splittext[1]$getVar[ecosign] from beg command!\`\`\`}
	{color:BLACK}
	{footer:The user's balance is now $sum[$getGlobalUserVar[Money;$authorID];$splittext[1]]$getVar[ecosign]}
	{timestamp:ms}
	{thumbnail:$userAvatar[$authorID]}
]
	$setGlobalUserVar[Money;$sum[$splittext[1];$getGlobalUserVar[Money]];$authorID]
$reply[$messageID;**$randomText[3STEB4N28;MaxIsDumdLoL;AnishDoesDev;bremea;Fyrlex]** donated you **$splittext[1]**$getVar[ecosign]!;no]
	$textSplit[$random[20;50]-;-]
	$globalCooldown[30s;You will be able to use this command again in %time%!]
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
