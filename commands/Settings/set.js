module.exports = [{
	name: "set", 
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`set join $message[2]\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$if[$message[1] $message[2]==join channel]
	$setServerVar[joinc;$findServerChannel[$messageSlice[2]]]
	
$title[Settings]
$description[Successfully updated the join channel to <#$findServerChannel[$messageSlice[2]]>!]
$footer[$getVar[botfooter]]
$color[BLACK]

	$onlyIf[$checkContains[$channelPermissionsFor[$findServerChannel[$messageSlice[2]];$clientID];Embed Links]==true;{title:Error}
{description:The bot needs the \`EMBED_LINKS\` permission in that channel!}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$onlyIf[$checkContains[$channelPermissionsFor[$findServerChannel[$messageSlice[2]];$clientID];Send Messages]==true;{title:Error}
{description:The bot needs the \`SEND_MESSAGES\` permission in that channel!}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$onlyIf[$findServerChannel[$messageSlice[2];no]!=undefined;{title:Error}
{description:I could'nt find that channel in this server!}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$argsCheck[>3;{title:Error}
{description:You're missing the following arguments \`Channel\`}
{footer:$getVar[botfooter]}
{color:BLACK}]

	$elseif[$message[1] $message[2]==join message]
$setServerVar[joinmsg;$messageSlice[2]]

$title[Error]
$description[Successfully updated the join message to \`\`\`\n {user} $messageSlice[2]\`\`\`\n]
$footer[$getVar[botfooter]]
$color[BLACK]

$argsCheck[>3;{title:Error}
{description:You're missing the following arguments \`Message\`}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$endelseif

	$elseif[$message[1] $message[2]==join footer]
$setServerVar[joinfooter;$messageSlice[2]]

$title[Error]
$description[Successfully updated the join footer to \`\`\`\n$messageSlice[2]\n\`\`\`]
$footer[$getVar[botfooter]]
$color[BLACK]

$argsCheck[>3;{title:Error}
{description:You're missing the following arguments \`Message\`}
{footer:$getVar[botfooter]}
{color:BLACK}]
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
$onlyIf[$isBot[$authorID]==false;]
	$onlyIf[$message[1]==join;]
	`
}, {
	name: "set",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`set leave $message[2]\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$if[$message[1] $message[2]==leave channel]
	$setServerVar[leavec;$findServerChannel[$messageSlice[2]]]
	
$title[Settings]
$description[Successfully updated the leave channel to <#$findServerChannel[$messageSlice[2]]>!]
$footer[$getVar[botfooter]]
$color[BLACK]

	$onlyIf[$checkContains[$channelPermissionsFor[$findServerChannel[$messageSlice[2]];$clientID];Embed Links]==true;{title:Error}
{description:The bot needs the \`EMBED_LINKS\` permission in that channel!}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$onlyIf[$checkContains[$channelPermissionsFor[$findServerChannel[$messageSlice[2]];$clientID];Send Messages]==true;{title:Error}
{description:The bot needs the \`SEND_MESSAGES\` permission in that channel!}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$onlyIf[$findServerChannel[$messageSlice[2];no]!=undefined;{title:Error}
{description:I could'nt find that channel in this server!}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$argsCheck[>3;{title:Error}
{description:You're missing the following arguments \`Channel\`}
{footer:$getVar[botfooter]}
{color:BLACK}]

	$elseif[$message[1] $message[2]==leave message]
$setServerVar[leavemsg;$messageSlice[2]]

$title[Error]
$description[Successfully updated the leave message to \`\`\`\n{user} $messageSlice[2]\`\`\`\n]
$footer[$getVar[botfooter]]
$color[BLACK]

$argsCheck[>3;{title:Error}
{description:You're missing the following arguments \`Message\`}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$endelseif
	
	$elseif[$message[1] $message[2]==leave footer]
$setServerVar[leavefooter;$messageSlice[2]]

$title[Error]
$description[Successfully updated the leave footer to \`\`\`\n$messageSlice[2]\n\`\`\`]
$footer[$getVar[botfooter]]
$color[BLACK]

$argsCheck[>3;{title:Error}
{description:You're missing the following arguments \`Message\`}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$endelseif
	$endif
$onlyPerms[manageserver;{title:Error}
{description:You need the \`MANAGE_SERVER\` permission to execute this command!}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$isBot[$authorID]==false;]
$onlyIf[$getServerVar[blacklisted]!=true;{title:Error}
{description:You were blacklisted by $userTag[$getServerVar[blacklistedmod]] for \`$getServerVar[blacklistedreason]\` on $getServerVar[blacklisteddate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$getServerVar[blacklisteds]!=true;{title:Error}
{description:This guild was blacklisted by $userTag[$getServerVar[blacklistedsmod]] for \`$getServerVar[blacklistedsreason]\` on $getServerVar[blacklistedsdate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$onlyIf[$message[1]==leave;]`
}, {
    name: "set",
    code: `$setServerVar[prefix;$messageSlice[1]]
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`set prefix\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$title[Settings Commands]
$description[Successfully updated the server prefix to \`\`\`\n$messageSlice[1]\n\`\`\`]
$footer[$getVar[botfooter]]
$color[BLACK]

$onlyPerms[manageserver;{title:Error}
{description:You must have the \`MANAGE_SERVER\` permission to use this command!}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$checkContains[$messageSlice[1];\`]==false;{title:Error}
{description:The prefix must not have the \` character!}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$charCount[$messageSlice[1]]=<4;{title:Error}
{description:The prefix must be smaller than 4 characters!}
{footer:$getVar[botfooter]}
{color:BLACK}]
$argsCheck[>1;{title:Error}
{description:You're missing the following arguments \`Prefix\`}
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
$onlyPerms[manageserver;{title:Error}
{description:You need the \`MANAGE_SERVER\` permission to execute this command!}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$isBot[$authorID]==false;]
$onlyIf[$message[1]==prefix;]`
}]
