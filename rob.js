module.exports = [{
	name: "rob",
	aliases: ['steal'],
	code: `$splittext[1]
	$replaceText[$replaceText[$replaceText[$splittext[1];true;
	$reply[$messageID;**Success**\n\nYou stealed **$round[$math[($getGlobalUserVar[Money;$findUser[$message[1]]]*$random[20;100])/100]]**$getVar[ecosign] from $userTag[$findUser[$message[1]]]!
	;no]]
	;false;gives 500$ to the given user]
	;trse;You failed]
	
	
	$textSplit[$randomText[true;true;true;trse;trse;trse;false;false;false;false]-lol;-]
	
	$onlyIf[$message!=;{title:Error}
	{description:You need to provide a user to rob!}
	{footer:You can use username, user ID or mention the user you want to rob!}
	{color:BLACK}]
	$onlyIf[$getGlobalUserVar[Money;$findUser[$message[1]]]>=100;{title:Error}
	{description:The user does not have at least 100$getVar[ecosign] not worth it bro}
	{color:BLACK}]
	$onlyIf[$findUser[$message[1];no]!=undefined;{title:Error}
	{description:I could'nt find that user in this server!}
	{color:BLACK}]
	$onlyIf[$getGlobalUserVar[Money;$authorID]>=500;{title:Error}
	{description:You must have at least 500$getVar[ecosign] in order to rob someone!}
	{color:BLACK}]
	$onlyIf[$isBot[$authorID]==false;]
	`
}]