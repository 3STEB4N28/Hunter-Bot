module.exports = [{
	name: "settings",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`settings\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

	$reply[$messageID;{title:Server Settings}
	{description:Current guild settings and preferences}
	{field:Prefix:<@!$clientID>, $getServerVar[prefix]:no}
	{field:Economy:$replaceText[$replaceText[$getServerVar[economy];on;$customEmoji[hbon]];off;$customEmoji[hboff]]:no}
	{field:Fun:$replaceText[$replaceText[$getServerVar[fun];on;$customEmoji[hbon]];off;$customEmoji[hboff]]:no}
	{field:Miscellaneous:$replaceText[$replaceText[$getServerVar[misc];on;$customEmoji[hbon]];off;$customEmoji[hboff]]:no}
	{field:Moderation:$replaceText[$replaceText[$getServerVar[moderation];on;$customEmoji[hbon]];off;$customEmoji[hboff]]:no}
	{field:Welcomer:$replaceText[$replaceText[$getServerVar[welcomer];on;$customEmoji[hbon]];off;$customEmoji[hboff]]:no}
	{field:Moderation Logs:$replaceText[$replaceText[$getServerVar[logsst];on;$customEmoji[hbon]];off;$customEmoji[hboff]]:no}
	{field:Moderation Logs Channel:$replaceText[$getServerVar[logschannel];no;Not settled yet!]:no}
	{color:BLACK};no]
	`
}]