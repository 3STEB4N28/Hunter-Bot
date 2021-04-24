module.exports = [{
	name: "balance",
	aliases: ['bal'],
	code: `$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]

$wait[10s]

$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`balance\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$reply[$messageid;{title:$userTag[$findUser[$message[1]]]'s Balance}
	{field:__Wallet__:$numberSeparator[$getGlobalUserVar[Money;$findUser[$message[1]]];,]$getVar[ecosign]:no}
	{field:__Bank__:$numberSeparator[$getGlobalUserVar[Bank;$findUser[$message[1]]];,]$getVar[ecosign]:no}
	{field:__Work Hours__:$numberSeparator[$getGlobalUserVar[whrs;$findUser[$message[1]]];,]:no}
	{field:__Salary__:$multi[20;$getGlobalUserVar[jobmulti;$findUser[$message[1]]]]:no}
	{color:BLACK}
	{thumbnail:$userAvatar[$findUser[$message[1]]]};no]
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
}];;