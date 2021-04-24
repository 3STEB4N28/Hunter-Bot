module.exports = [{
	name: "taxi",
	code: `$setGlobalUserVar[job;taxi;$authorid] 
	$editMessage[$botlastmessageid;{title:Job Selected!}
	{description:Great you now will work as a **Taxi Driver**, your start salary is 20$getVar[ecosign]!}
	{color:BLACK}
	{footer:Eventually you will gain more money!}] $deletecommand`,
	type: "awaitedCommand"
}, {
	name: "police",
	code: `$setGlobalUserVar[job;police;$authorid]
$editMessage[$botlastmessageid;{title:Job Selected!}
{description:Great you now will work as **Police Officer**, your start salary is 20$getVar[ecosign]!}
{color:BLACK}
{footer:Eventually you will gain more $getVar[ecosign]!}] $deletecommand`,
   type: "awaitedCommand"
}, {
	name: "nurse",
	code: `$setGlobalUserVar[job;nurse;$authorid]
$editMessage[$botlastmessageid;{title:Job Selected!}
{description:Great you now will work as **Nurse**, your start salary is 20$getVar[ecosign]!}
{color:BLACK}
{footer:Eventually you will gain more $getVar[ecosign]}] $deletecommand`,
    type: "awaitedCommand"
}, {
	name: "firefighter",
	code: `$setGlobalUserVar[job;ff;$authorid]
$editMessage[$botlastmessageid;{title:Job Selected!}
{description:Great you now will work as **Fire Fighter**, your start salary is 20$getVar[ecosign]!}
{color:BLACK}
{footer:Eventually you will gain more $getVar[ecosign]!}] $deletecommand`,
	type: "awaitedCommand"
}, {
	name: "pilot",
	code: `$setGlobalUserVar[job;pilot;$authorid]
$editMessage[$botlastmessageid;{title:Job Selected!}
{description:Great you now will work as **Airline Pilot**, your start salary is 20$getVar[ecosign]!}
{color:BLACK}
{footer:Eventually you will gain more $getVar[ecosign]!}] $deletecommand`,
	type: "awaitedCommand"
}, {
	name: "coder",
	code: `$setGlobalUserVar[job;coder;$authorid]
$editMessage[$botlastmessageid;{title:Job Selected!}
{description:Great you now will work as **Developer**, your start salary is 20$getVar[ecosign]!}
{color:BLACK}
{footer:Eventually you will gain more $getVar[ecosign]!}] $deletecommand`,
	type: "awaitedCommand"
},{
	name: "worke",
	code: `$title[Error]
	$description[You must select a job first!]
	$footer[Use $getServerVar[prefix]work list to select a job!]
	$color[BLACK]`,
	type: "awaitedCommand"
}, {
	name: "ryes",
	code: `$setGlobalUserVar[job;Not Selected!;$authorID]
	$setGlobalUserVar[whrs;0;$authorID]
	$setGlobalUserVar[jobmulti;1;$authorID]
	
	$reply[$messageID;{title:Resign}
	{description:Successfully resigned from your current job!}
	{color:BLACK};no]`,
	type: "awaitedCommand"
}, {
	name: "rno",
	code: `$reply[$messageID;{title:Resign}
	{description:Resignation from current job canceled!}
	{color:BLACK};no]`,
	type: "awaitedCommand"
}];
