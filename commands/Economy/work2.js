module.exports = [{
	name: "work",
	code: `
	$if[$getGlobalUserVar[whrs;$authorID]==100]

$setGlobalUserVar[jobmulti;1.25;$authorID]

$elseif[$getGlobalUserVar[whrs;$authorID]==150]

$setGlobalUserVar[jobmulti;1.75;$authorID]

$endelseif

$elseif[$getGlobalUserVar[whrs;$authorID]==200]

$setGlobalUserVar[jobmulti;2.5;$authorID]

$endelseif
$endif

$onlyIf[$getGlobalUserVar[job;$authorID]==taxi;]
$onlyIf[$message[1]!=list;]
$onlyIf[$isBot[$authorID]==false;]
	`
}, {
	name: "work",
	code: `
	$if[$getGlobalUserVar[whrs;$authorID]==100]

$setGlobalUserVar[jobmulti;1.25;$authorID]

$elseif[$getGlobalUserVar[whrs;$authorID]==150]

$setGlobalUserVar[jobmulti;1.75;$authorID]

$endelseif

$elseif[$getGlobalUserVar[whrs;$authorID]==200]

$setGlobalUserVar[jobmulti;2.5;$authorID]

$endelseif
$endif

$onlyIf[$getGlobalUserVar[job;$authorID]==police;]
$onlyIf[$message[1]!=list;]
$onlyIf[$isBot[$authorID]==false;]
	`
}, {
	name: "work",
	code: `
	$if[$getGlobalUserVar[whrs;$authorID]==100]

$setGlobalUserVar[jobmulti;1.25;$authorID]

$elseif[$getGlobalUserVar[whrs;$authorID]==150]

$setGlobalUserVar[jobmulti;2;$authorID]

$endelseif

$elseif[$getGlobalUserVar[whrs;$authorID]==200]

$setGlobalUserVar[jobmulti;3.75;$authorID]

$endelseif
$endif

$onlyIf[$getGlobalUserVar[job;$authorID]==nurse;]
$onlyIf[$message[1]!=list;]
$onlyIf[$isBot[$authorID]==false;]
	`
}];
