module.exports = [{
	name: "hourly",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`hourly\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]	

	$reply[$messageID;{title:Hourly Reward}
	{description:50$getVar[ecosign] have been deposited in your wallet along with a hourly box!}
	{color:BLACK};no]
	
	$globalCooldown[1h;Heya, you'll be able to collect your hourly reward in %time%!]
	$onlyIf[$isBot[$authorID]==false;]`
}, {
	name: "daily",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`daily\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

	$reply[$messageID;{title:Daily Reward}
	{description:250$getVar[ecosign] have been deposited in your wallet along with a daily box!}
	{color:BLACK};no]
	
	$globalCooldown[24h;Heya, you'll be able to collect your daily reward in %time%!]
	$onlyIf[$isBot[$authorID]==false;]`
}, {
	name: "weekly",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`weekly\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

	$reply[$messageID;{title:Weekly Reward}
	{description:500$getVar[ecosign] have been deposited in your wallet along with a weekly box!}
	{color:BLACK};no]
	
	$globalCooldown[1w;Heya, you'll be able to collect your weekly reward in %time%!]
	$onlyIf[$isBot[$authorID]==true;]`
}, {
	name: "monthly",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`monthly\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

	$reply[$messageID;{title:Monthly Reward}
	{description:1,250$getVar[ecosign] have been deposited in your wallet along with a hourly case, daily case, weekly case, and a monthly box!}
	{color:BLACK};no]
	
	$globalCooldown[31d;Heya, you'll be able to collect your monthly reward in %time%!]
	$onlyIf[$isBot[$authorID]==false;]`
}]