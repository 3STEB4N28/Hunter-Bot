module.exports = ({
	name: "deposit",
	aliases: ["dep"],
	code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`deposit\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$wait[10s]

$setGlobalUserVar[Money;$math[$getGlobalUserVar[Money;$authorID]-$replaceText[$message;all;$getGlobalUserVar[Money;$authorID]]];$authorID]
	$setGlobalUserVar[Bank;$math[$getGlobalUserVar[Bank;$authorID]+$replaceText[$message;all;$getGlobalUserVar[Money;$authorID]]];$authorID]
	
	$reply[$messageID;{title:Deposit}
	{description: Successfully deposited $numberSeparator[$replaceText[$message;all;$getGlobalUserVar[Money;$authorID]];,]$getVar[ecosign] into your bank!}
	{color:BLACK
	};no]
	
	$onlyIf[$getGlobalUserVar[Money]>0;{title:Error}
	{description:You only have 0$getVar[ecosign] in your wallet!}
	{color:BLACK}]
	$onlyIf[$getGlobalUserVar[Money;$authorID]>=$replaceText[$message;all;$getGlobalUserVar[Money]];{title:Error}
	{description:You do not have enough money to deposit!}
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
	`
})