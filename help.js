module.exports = [{
	name: "help",
	aliases: ['cmds', 'commands', 'helpme'],
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`help\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]

$reactionCollector[$splitText[1];$authorID;5m;1️⃣,2️⃣,3️⃣,4️⃣,5️⃣,6️⃣,🔄;eco,fun,misc,mod,set,welc,home;yes]
	
    $textSplit[$sendMessage[{title:Commands List}
	{description:
	React with the given emojis to see the different commands! \n
	1️⃣: Economy Commands
	2️⃣: Fun Commands
	3️⃣: Miscellaneous Commands
	4️⃣: Moderation Commands
	5️⃣: Settings Commands
	6️⃣: Welcomer Commands
	🔄: Back Home
	}
	{color:BLACK}
    {footer:Please wait 5 seconds before using the reaction menu! | $getVar[botfooter]}
	{image:https://cdn.discordapp.com/attachments/788424623393734656/827237765786632282/image.webp};yes]; ]
	$onlyIf[$getServerVar[blacklisted]!=true;{title:Error}
{description:You were blacklisted by $userTag[$getServerVar[blacklistedmod]] for \`$getServerVar[blacklistedreason]\` on $getServerVar[blacklisteddate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$getServerVar[blacklisteds]!=true;{title:Error}
{description:This guild was blacklisted by $userTag[$getServerVar[blacklistedsmod]] for \`$getServerVar[blacklistedsreason]\` on $getServerVar[blacklistedsdate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
   $onlyIf[$isBot[$authorID]==false;] `
}, {
	name: "home",
	code: `$editMessage[$message[1];{title:Command List}
	{description:
	React with the given emojis to see the different commands! \n
    1️⃣: Economy Commands
    2️⃣: Fun Commands
    3️⃣: Miscellaneous Commands
    4️⃣: Moderation Commands
    5️⃣: Settings Commands
    6️⃣: Welcomer Commands
    🔄: Back Home
	}
	{color:BLACK}
	{image:https://cdn.discordapp.com/attachments/788424623393734656/827237765786632282/image.webp}]`,
	type: "awaitedCommand"
}, {
	name: "eco",
	code: `$editMessage[$message[1];{title:Economy Commands}
	{description:$replaceText[$replaceText[$getVar[ecostatus];on;\`work, work list, search, beg, resign, deposit <amount>, withdraw <amount>\`];off;Category Disabled!]}
	{color:BLACK}
	{image:https://cdn.discordapp.com/attachments/788424623393734656/827237765786632282/image.webp}]`,
	type: "awaitedCommand"
}, {
	name: "fun",
	code: `$editMessage[$message[1];{title:Fun Commands}
	{description:$replaceText[$replaceText[$getVar[funstatus];on;\`encode (base64, binary) <text>, decode (base64, binary) <text>, reverse <text>, logo (chrome, ) <text>\`];off;Category Disabled!]}
	{color:BLACK}
	{image:https://cdn.discordapp.com/attachments/788424623393734656/827237765786632282/image.webp}]`,
	type: "awaitedCommand"
}, {
	name: "misc",
	code: `$editMessage[$message[1];{title:Miscellaneous Commands}
	{description:$replaceText[$replaceText[$getVar[miscstatus];on;\`bot info, help, review <rate>|<message>, covid-19\`];off;Category Disabled!]} 
	{color:BLACK}
	{image:https://cdn.discordapp.com/attachments/788424623393734656/827237765786632282/image.webp}]`,
	type: "awaitedCommand" //user info, server info,
}, {
	name: "mod",
	code: `$editMessage[$message[1];{title:Moderation Commands}
	{description:$replaceText[$replaceText[$getVar[modstatus];on;\`clear <amount>, ban <user> <reason>, kick <user> <reason>, esnipe, snipe\`];off;Category Disabled!]}
	{color:BLACK}
	{image:https://cdn.discordapp.com/attachments/788424623393734656/827237765786632282/image.webp}]`,
	type: "awaitedCommand"
}, {
	name: "set",
	code: `$editMessage[$message[1];{title:Settings Commands}
	{description:\`enable <category>, disable <category>, set prefix <prefix>, \`}
	{color:BLACK}
	{image:https://cdn.discordapp.com/attachments/788424623393734656/827237765786632282/image.webp}]`,
	type: "awaitedCommand"
}, {
	name: "welc",
	code: `$editMessage[$message[1];{title:Welcomer Commands}
	{description:$replaceText[$replaceText[$getVar[welcstatus];on;\`set join channel <channel>, set join message <message>, set join footer <footer>, set leave channel, set leave message, set leave footer\`];off;Category Disabled!]}
	{color:BLACK}
	{image:https://cdn.discordapp.com/attachments/788424623393734656/827237765786632282/image.webp}]`,
	type: "awaitedCommand"
}];