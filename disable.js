module.exports = [{
	name: "disable",
	aliases: ['d'],
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`disable $message[1]\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$if[$message[1]==economy]
	$setServerVar[economy;off]
	$reply[$messageID;{title:Settings}
	{description:Module \`Economy\` successfully disabled!}
	{footer:Server Settings}
	{color:BLACK};no]
	$onlyIf[$getServerVar[economy]==on;{execute:derror}]
	
	$elseif[$message[1]==fun]
	$setServerVar[fun;off]
	$reply[$messageID;{title:Settings}
	{description:Module \`Fun\` successfully disabled!}
	{color:BLACK};no]
	$onlyIf[$getServerVar[fun]==on;{execute:derror}]
	
	$endelseif
	
	$elseif[$message[1]==miscellaneous]
	$setServerVar[misc;off]
	$reply[$messageID;{title:Settings}
	{description:Module \`Miscellaneous\` successfully disabled!}
	{color:BLACK};no]
	$onlyIf[$getServerVar[misc]==on;{execute:derror}]
	
	$endelseif
	$endif
	$onlyPerms[manageserver;You must have the \`MANAGE_SERVER\` permission to execute this command!]
$onlyIf[$getServerVar[blacklisted]!=true;{title:Error}
{description:You were blacklisted by $userTag[$getServerVar[blacklistedmod]] for \`$getServerVar[blacklistedreason]\` on $getServerVar[blacklisteddate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$getServerVar[blacklisteds]!=true;{title:Error}
{description:This guild was blacklisted by $userTag[$getServerVar[blacklistedsmod]] for \`$getServerVar[blacklistedsreason]\` on $getServerVar[blacklistedsdate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$onlyIf[$checkContains[$message;economy;miscellaneous;fun]==true;]`
}, {
	name: "disable",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`disable $message\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$if[$message[1]==moderation]
	$setServerVar[moderation;off]
	$reply[$messageID;{title:Settings}
	{description:Module \`Moderation\` successfully disabled!}
	{color:BLACK};no]
	$onlyIf[$getServerVar[moderation]==on;{execute:derror}]
	
	$elseif[$message[1]==welcomer]
	$setServerVar[welcomer;off]
	$reply[$messageID;{title:Settings}
	{description:Module \`Welcomer\` successfully disabled!}
	{color:BLACK};no]
	$onlyIf[$getServerVar[welcomer]==on;{execute:derror}]
	
	$endelseif
	$endif
	$onlyPerms[manageserver;You must have the \`MANAGE_SERVER\` permission to execute this command!]
$onlyIf[$getServerVar[blacklisted]!=true;{title:Error}
{description:You were blacklisted by $userTag[$getServerVar[blacklistedmod]] for \`$getServerVar[blacklistedreason]\` on $getServerVar[blacklisteddate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$getServerVar[blacklisteds]!=true;{title:Error}
{description:This guild was blacklisted by $userTag[$getServerVar[blacklistedsmod]] for \`$getServerVar[blacklistedsreason]\` on $getServerVar[blacklistedsdate]}
{footer:$getVar[botfooter]}
{color:BLACK}]


	$onlyIf[$checkContains[$message;moderation;welcomer]==true;]`
}];