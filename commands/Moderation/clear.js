module.exports = [{
	name: "clear",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`clear\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$clear[$message]

$deleteIn[5s]
Successfully cleared \`$message\` messages!

$onlyBotPerms[managemessages;{title:Error}
{description:The bot is missing the following permission \`MANAGE_MESSAGES\`}]
$onlyPerms[managemessages;{title:Error}
{description:You're missing the following permission \`MANAGE_MESSAGES\`}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$isNumber[$message[1]]==true;{title:Error}
{description:You need to provide a valid number!}
{footer:$getVar[botfooter]}
{color:BLACK}]
$argsCheck[>1;{title:Error}
{description:You're missing the following arguments \`Amount\`}
{footer:$getVar[botfooter]}
{color:BLACK}]
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
