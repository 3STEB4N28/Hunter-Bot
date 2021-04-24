module.exports = [{
	name: "enable",
	aliases: ['e'],
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`enable $message[1]\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$if[$message[1]==economy]
	$setServerVar[economy;on]
$reply[$messageID;{title:Settings}
{description:Module \`Economy\` successfully enabled!}
{footer:Server Settings}
{color:BLACK};no]
$onlyIf[$getServerVar[economy]==off;{execute:eerror}]
	
	$elseif[$message[1]==fun]
	$setServerVar[fun;on]
$reply[$messageID;{title:Settings}
{description:Module \`Fun\` successfully enabled!}
{footer:Server Settings}
{color:BLACK};no]
$onlyIf[$getServerVar[fun]==off;{execute:eerror}]
$endelseif
	
	$elseif[$message[1]==miscellaneous]
	$setServerVar[misc;on]
$reply[$messageID;{title:Settings}
{description:Module \`Miscellaneous\` successfully enabled!}
{footer:Server Settings}
{color:BLACK};no]
$onlyIf[$getServerVar[misc]==off;{execute:eerror}]
	
	$endelseif
	$endif
$onlyPerms[manageserver;{title:Error}
{description:You need the \`MANAGE_SERVER\` permission to execute this command!}
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
$onlyIf[$checkContains[$message;miscellaneous;fun;economy]==true;]`
}, {
	name: "enable",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`enable $message[1]\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$if[$message[1]==moderation]
$setServerVar[moderation;on]
$reply[$messageID;{title:Settings}
{description:Module \`Moderation\` successfully enabled!}
{footer:Server Settings}
{color:BLACK};no]
$onlyIf[$getServerVar[moderation]==off;{execute:eerror}]

	$elseif[$message[1]==welcomer]
	$setServerVar[welcomer;on]
$reply[$messageID;{title:Settings}
{description:Module \`Welcomer\` successfully enabled!}
{footer:Server Settings}
{color:BLACK};no]
$onlyIf[$getServerVar[welcomer]==off;{execute:eerror}]
	
	$endelseif
	$endif

$onlyPerms[manageserver;{title:Error}
{description:You need the \`MANAGE_SERVER\` permission to execute this command!}
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
$onlyf[$checkContains[$message;moderation;welcomer]==true;]`
}];