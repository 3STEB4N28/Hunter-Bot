module.exports = [{
	name: "derror",
	code: `$reply[$messageID;{title:Error}
	{description:Module is already disabled!}
	{color:BLACK};no]`,
	type: "awaitedCommand"
}, {
	name: "eerror",
	code: `$reply[$messageID;{title:Error}
	{description:Module is already enabled!}
	{color:BLACK};no]`,
	type: "awaitedCommand"
}, {
	name: "ruleserror",
	code: `$reply[$messageID;{title:Error}
	{description:You first need to agree to our rules, run \`$getServerVar[prefix]rules\` to read and accept them!}
	{color:BLACK};no]`,
	type: "awaitedCommand"
}, {
	name: "catoffe",
	code: `$reply[$messageID;{title:Error}
	{description:The module is disabled! Tell a Moderator or Admin to enable it!}
	{color:BLACK};no]`,
	type: "awaitedCommand"
}, {
	name: "berror",
	code: `$reply[$messageID;{title:Error}
	{description:You are blacklisted from usign the bot!
	
	You were blacklisted by $userTag[$getGlobalUserVar[blacklistedMod]] on \`$getGlobalUserVar[blacklistedDate]\` for \`$getGlobalUserVar[blacklistedReason]\`}
	{color:BLACK};no]`,
	type: "awaitedCommand"
}, {
	name: "bserror",
	code: `$reply[$messageID;{title:Error}
	{description:This server is blacklisted from using the bot!
	
	This guild was blacklisted by $userTag[$getGlobalUserVar[blacklistedsMod]] on \`$getGlobalUserVar[blacklistedsDate]\` for \`$getGlobalUserVar[blacklistedsReason]\`}
	{color:BLACK};no]`,
	type: "awaitedCommand"
}];