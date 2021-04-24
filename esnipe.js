module.exports = [{
	name: "esnipe",
	aliases: ['es'],
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`esnipe\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

	$title[Edit Snipe]
	$description[Information about the most recently edited message!
	$addField[After;\`$getChannelVar[editmsg;$channelID]\` \n[View Message]($getChannelVar[editmsglink]);no]
	$addField[Before;\`$getChannelVar[beeditmsg;$channelID]\`;no]
	$addField[Author;<@$getChannelVar[editmsgauth;$channelID]> \`$userTag[$getChannelVar[editmsgauth]]\`;no]]
	$color[BLACK]
	$footer[Date: $getChannelVar[editmsgdate;$channelID] | $getVar[botfooter]] 
	
	$onlyIf[$getChannelVar[beeditmsg;$channelID]!=;{title:Error}
	{description:No recently edited message was found!}
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
}, {
	channel: "$channelID",
	code: `
$setChannelVar[editmsg;$message;$channelID]
	$setChannelVar[beeditmsg;$oldMessage;$channelID]
	$setChannelVar[editmsgauth;$authorID;$channelID]
	$setChannelVar[editmsgdate;$month-$day-$year $hour:$minute:$second EST;$channelID]
	$setChannelVar[editmsglink;https://discord.com/channels/$guildID/$channelID/$messageID;$channelID]
	$timezone[America/New_York]`,
	type: "updateCommand"
}];