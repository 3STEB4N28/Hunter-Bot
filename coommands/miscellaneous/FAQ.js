module.exports = [{
	name: "faq",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`faq\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

	$reply[$messageID;{title:Frequently Asked Questions}
	{description:Most frequently asked questions and their answer from the developers}
	{field:Is Hunter Bot open source? Where can I get the source code of Hunter Bot?:You can get the source code of the bot [here](https://github.com/3STEB4N28/Hunter-Bot)!:no}
	{field:How can I reset my data on the bot?:You can reset your data on the bot by running \`$getServerVar[prefix]reset\`!:no}
	{field:What bot list can I find Hunter Bot at?:You can run \`$getServerVar[prefix]bot lists\` to find a list of bot lists I am currently at!:no}

	
	{footer:$getVar[botfooter]}
	{color:BLACK};no]
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
}]
