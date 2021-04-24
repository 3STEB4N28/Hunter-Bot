const logs = `$channelSendMessage[$getvar[ecologs];
{title:Economy Logs}
{description:\`\`\`\n$userTag[$authorID] gained $splitText[1]$getVar[ecosign] from search command!\`\`\`}
{footer:The user's balance is now $sum[$getGlobalUserVar[Money];$splittext[1]]$getVar[ecosign]}
{timestamp:ms}
{color:BLACK}
{thumbnail:$userAvatar[$authorID]}]`
const cmdsl = `
$channelSendMessage[$getVar[cmdslogs];]
`
module.exports = [{
	name: "tree",
	code: `${logs}
	$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$splittext[1]];$authorID]
	
	$reply[$messageID;You looked up in the **tree** and found **$splitText[1]**$getVar[ecosign]!;no]
	
	$textSplit[$random[20;50]-;-]`,
	type: "awaitedCommand",
}, {
	name: "car",
	code: `${logs}
	$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$splittext[1]];$authorID]
	
	$reply[$messageID;You looked inside your **Tesla Model $randomText[Y;S;X] 2021** and found **$splitText[1]**$getVar[ecosign]!;no]
	
	$textSplit[$random[20;50]-;-]`,
	type: "awaitedCommand"
}, {
	name: "house",
	code: `${logs}
	$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$splittext[1]];$authorID]
	
	$reply[$messageID;You went into your house's kitchen and found **$splitText[1]**$getVar[ecosign]!;no]
	
	$textSplit[$random[20;50]-;-]`,
	type: "awaitedCommand"
}, {
	name: "room",
	code: `${logs}
	$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$splittext[1]];$authorID]
	
	$reply[$messageID;You found **$splitText[1]**$getVar[ecosign] under your bed!;no]
	
	$textSplit[$random[20;50]-;-]`,
	type: "awaitedCommand"
}, {
	name: "bus",
	code: `${logs}
	$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$splittext[1]];$authorID]
	
	$reply[$messageID;You looked inside the bus' luggage section and found **$splitText[1]**$getVar[ecosign]!;no]
	
	$textSplit[$random[20;50]-;-]`,
	type: "awaitedCommand"
}, {
	name: "sink",
	code: `${logs}
	$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$splittext[1]];$authorID]
	
	$reply[$messageID;You cleaned the sink tubes and found **$splitText[1]**$getVar[ecosign]!;no]
	
	$textSplit[$random[20;50]-;-]`,
	type: "awaitedCommand"
}, {
	name: "bathroom",
	code: `${logs}
	$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$splittext[1]];$authorID]
	
	$reply[$messageID;The bathroom at your house was so dirty that you gained **$splitText[1]**$getVar[ecosign] by beating the world record!;no]
	
	$textSplit[$random[20;50]-;-]`,
	type: "awaitedCommand"
}, {
	name: "discord",
	code: `${logs}
	$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$splittext[1]];$authorID]
	
	$reply[$messageID;You searched in your dms and found **$splitText[1]**$getVar[ecosign]!;no]
	
	$textSplit[$random[20;50]-;-]`,
	type: "awaitedCommand"
}, {
	name: "truck",
	code: `${logs}
	$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$splittext[1]];$authorID]
	
	$reply[$messageID;You drove the **Tesla Semi Truck** to Hunter's Lounge and gained **$splitText[1]**$getVar[ecosign]!;no]
	
	$textSplit[$random[20;50]-;-]`,
	type: "awaitedCommand"
}, {
	name: "coat",
	code: `${logs}
	$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$splittext[1]];$authorID]
	
	$reply[$messageID;Yoy found **$splitText[1]**$getVar[ecosign] inside your coat's pocket!;no]
	
	$textSplit[$random[20;50]-;-]`,
	type: "awaitedCommand"
}, {
	name: "purse",
	code: `${logs}
	$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$splittext[1]];$authorID]
	
	$reply[$messageID;You looked into your mom's purse and found **$splitText[1]**$getVar[ecosign]! Hold on, did you just stealed from your own mom- smh.;no]
	
	$textSplit[$random[20;50]-;-]`,
	type: "awaitedCommand"
}];
