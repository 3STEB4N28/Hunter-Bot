module.exports = [{
	name: "kick",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`kick\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

	$kick[$findUser[$message[1]];$messageSlice[1]]
	$reply[$messageID;{title:Kick}
	{description:\`$userTag[$findUser[$message[1]]]\` was kicked for \`$messageSlice[1]\`}
	{footer:$getVar[botfooter]}
	{color:BLACK}]
	
	$onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]<$rolePosition[$highestRole[$authorID]];{title:Error}
	{description:The given user has a higher role than you!}
	{footer:$getVar[botfooter]}
	{color:BLACK}]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{title:Error}
	{description:The bot's highest role is lower than the given user's highest role!}
	{footer:$getVar[botfooter]}
	{color:BLACK}]
	$argsCheck[>2;{title:Error}
	{description:You're missing the following arguments \`User, Reason\`}
	{footer:$getVar[botfooter]}
	{color:BLACK}]
	$onlyPerms[kick;{title:Error}
	{description:You do not have the \`KICK_MEMBERS\` permission!}
	{footer:$getVar[botfooter]}
	{color:BLACK}]
	$onlyBotPerms[kick;{title:Error}
	{description:I do not have the \`KICK_MEMBERS\` permission!}
	{footer:$getVar[botfooter]}
	{color:BLACK}]
	$onlyIf[$findUser[$message[1];no]!=undefined;{title:Error}
	{description:I could'nt find that user in the server!}
	{footer:$getVar[botfooter]}
	{color:BLACK}]
	$onlyIf[$authorID!=$findUser[$message[1];no];{title:Error}
	{description:You can't kick yourself!}
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
	$onlyIf[$isBot[$authorID]==false;]`
}];
