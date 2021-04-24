module.exports = [{
	name: "blacklist",
	aliases: ["bl"],
	code: `$setGlobalUserVar[blacklisted;true;$findUser[$message[1];no]]
	$setGlobalUserVar[blacklistedReason;$messageSlice[1];$findUser[$message[1];no]]
	$setGlobalUserVar[blacklistedDate;$month/$day/$year $hour:$minute:$second;$findUser[$message[1];no]]
	$setGlobalUserVar[blacklistedMod;$authorID;$findUser[$message[1];no]]
	
	$reply[$messageID;{title:User Blacklisted}
	{description:\`$userTag[$findUser[$message[1];no]]\` has been successfully blacklisted from using the bot for \`$messageSlice[1]\`}
	{color:BLACK}]
	
	$sendDM[$findUser[$message[1];no];{title:You have been blacklisted!}
	{description:You have been blacklisted from using the bot by $userTag[$authorID] for \`$messageSlice[1]\`!}
	{footer:If you belive this was an error, please join my support server and open a ticket to appeal!}
	{color:BLACK}]
	
	$argsCheck[>2;{title:Error}
	{description:You're missing the following arguments \`User, Reason\`!}
	{color:BLACK}]
	$onlyIf[$getGlobalUserVar[devTeamMember;$findUser[$message[1]]]==false;{title:Error}
	{description:The provided user is a Developer Team Member!}
	{color:BLACK}]
	$onlyIf[$findUser[$message[1];no]!=undefined;{title:Error}
	{description:I could'nt find the provided user!}
	{color:BLACK}]
	$onlyIf[$getGlobalUserVar[devTeamMember;$authorID]==true;{title:Error}
	{description:You are not part of the Developer Team!}
	{color:BLACK}]`
}]