module.exports = ({
	name: "withdraw",
	aliases: ["with"],
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`withdraw\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

	$setGlobalUserVar[Bank;$math[$getGlobalUserVar[Bank]-$replaceText[$message;all;$getGlobalUserVar[Bank]]];$authorID]
	$setGlobalUserVar[Money;$math[$getGlobalUserVar[Money]+$replaceText[$message;all;$getGlobalUserVar[Bank]]];$authorID]
	
	
	$reply[$messageID;{title:Withdraw}
	{description:Successfully withdraw $numberSeparator[$replaceText[$message;all;$getGlobalUserVar[Bank;$authorID]];,]$getVar[ecosign]!}
	{color:BLACK};no]
	
	$onlyIf[$getGlobalUserVar[Bank;$authorID]>0;{title:Error}
	{description:You have 0$getVar[ecosign] in your bank!}
	{color:BLACK}]
	$onlyIf[$getGlobalUserVar[Bank;$authorID]>=$replaceText[$message;all;$getGlobalUserVar[Bank;$authorID]];{title:Error}
	{description:You do not have enough money to withdraw!}
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
})