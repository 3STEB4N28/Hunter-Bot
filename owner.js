module.exports = [{
	name: "e-eval",
	code: `$title[Eval]
	$description[$addField[Input;\`$message\`;no]
	$addField[Output;\`$eval[$message]\`;no]]
	$color[GRAY]
	$onlyForIDs[$botownerid[;];]`
}, {
	name: "eval",
	code: `$eval[$message]
	$onlyForIDs[$botownerid[;];]`
}, {
	name: "update",
	aliases: 'u',
	code: `$updateCommands Commands updated!
	$onlyForIDs[$botownerid[;];]`
}, {
	name: "add",
	code: `$setGlobalUserVar[devTeamMember;true;$findUser[$message]]
	
	Successfully added $userTag[$findUser[$message]] to the devteam!
	
	$onlyForIDs[$botownerid[;];]`
}, {
	name: "remove",
	code: `$setGlobalUserVar[devTeamMember;false;$findUser[$message]]
	
	Successfully removed $userTag[$findUser[$message]] from the devteam!
	
	$onlyForIDs[$botownerid[;];]`
}];