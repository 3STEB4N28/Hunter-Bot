module.exports = [{
    name: "snipe",
    code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`snipe\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$title[$userTag[$getChannelVar[delmsgauth]]]
$description[$getChannelVar[delmsg]]
$footer[Date: $getChannelVar[delmsgdate] | $getVar[botfooter]]
$color[BLACK]

$onlyIf[$getChannelVar[delmsg]!=;{title:Error}
{description:No recently deleted message was found!}
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
$onlyIf[$isBot[$authorID]!=true;]
`
}, {
	channel: "$channelID",
	code: `

  $setChannelVar[delmsgauth;$authorID]
  $setChannelVar[delmsg;$message]
  $setChannelVar[delmsgdate;$month-$day-$year $hour:$minute:$second EST]
  
  $timezone[America/New_York]`,
	type: "deletedCommand"
}];