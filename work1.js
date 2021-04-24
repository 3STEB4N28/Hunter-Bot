const logs = `$channelSendMessage[$getVar[ecologs];
{title:Economy Logs}
{description:\`\`\`\n$userTag[$authorID] gained $multi[20;$getGlobalUserVar[jobmulti]]$getVar[ecosign] from work command!\`\`\`}
{footer:The user's balance is now $sum[$getGlobalUserVar[Money];$multi[20;$getGlobalUserVar[jobmulti]]]$getVar[ecosign]}
{timestamp:ms}
{color:BLACK}
{thumbnail:$userAvatar[$authorID]}
]
`
module.exports = [{
	name: "work",
	aliases: ['job', 'jobs'],
	code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`work list\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$awaitMessages[$authorID;30s;1,2,3,4,5,6;taxi,police,nurse,firefighter,pilot,coder;Command timedout]
$wait[4s]
	$reply[$messageID;{title:Jobs}{description:These are the currently available jobs you can select to start gaining money!

Please wait 5 seconds before typing the number of the job you'll like!}
	{field:1. - Taxi Driver:\`20$getVar[ecosign] - hour | Start Salary.
50$getVar[ecosign] - hour | End Salary.\`:no}
	{field:2. - Police Officer:\`20$getVar[ecosign] - hour | Start Salary.
50$getVar[ecosign] - hour | End Salary.\`:no}
	{field:3. - Nurse:\`20$getVar[ecosign] - hour | Start Salary.
75$getVar[ecosign] - hour | End Salary.\`:no}
	{field:4. - Fire Fighter:\`20$getVar[ecosign] - hour | Start Salary. 
50$getVar[ecosign] - hour | End Salary.\`:no}
	{field:5. - Airline Pilot:\`20$getVar[ecosign] - hour | Start Salary.
40$getVar[ecosign] - hour | End Salary.\`:no}
	{field:6. - Developer/Coder:\`20$getVar[ecosign] - hour | Start Salary.
60$getVar[ecosign] - hour | End Salary.\`:no}
{color:BLACK}{footer:$getVar[botfooter]};no]
	$onlyIf[$getGlobalUserVar[job]==Not Selected!;Heya, seems like you already have a job, resign from your current job to select a new one!]
	$onlyIf[$message[1]==list;]
$onlyIf[$getServerVar[blacklisted]!=true;{title:Error}
{description:You were blacklisted by $userTag[$getServerVar[blacklistedmod]] for \`$getServerVar[blacklistedreason]\` on $getServerVar[blacklisteddate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$getServerVar[blacklisteds]!=true;{title:Error}
{description:This guild was blacklisted by $userTag[$getServerVar[blacklistedsmod]] for \`$getServerVar[blacklistedsreason]\` on $getServerVar[blacklistedsdate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$onlyIf[$isBot[$authorID]==false;]`
}, {
	name: "work",
	code: `${logs}
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`work\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$setGlobalUserVar[whrs;$sum[$getGlobalUserVar[whrs];1];$authorid]
	$setGlobalUserVar[Money;$sum[$multi[20;$getGlobalUserVar[jobmulti]];$getGlobalUserVar[Money]];$authorid]
	$if[$getGlobalUserVar[job;$authorid]==taxi]
	$reply[$messageID;You took **$randomText[Goodlacked123;MegaKnight007;MaxIsDumbLoL;Huñter;BitShelf;Aizakku;MagesticChicen;Fyrlex;System32;bremea;AnishDoesDev;]** to **Hunter Bot's Development Center** and gained **$multi[20;$getGlobalUserVar[jobmulti]]**$getVar[ecosign]!;no]
	
	$elseif[$getGlobalUserVar[job;$authorid]==police]
	$reply[$messageID;You catched **$randomText[MaxIsDumbLoL;BitShelf;bremea;AnishDoesDev]** $randomText[messing up the work command code;not declaring client;messing the command handler] and got **$multi[20;$getGlobalUserVar[jobmulti]]**$getVar[ecosign]!;no]
	$endelseif
	
	$elseif[$getGlobalUserVar[job;$authorid]==nurse]
	$reply[$messageID;**$randomText[3STEB4N28;Fyrlex;bremea;AnishDoesDev]** was found wounded cause of coding too much, but safely you got there in time and saved him. You gained **$multi[20;$getGlobalUserVar[jobmulti]]**$getVar[ecosign]!;no]
	$endelseif
	$endif
	
    $globalCooldown[1h;Heya, you already worked! Wait %time% till working again!]
	$onlyIf[$checkContains[$getGlobalUserVar[job;$authorid];nurse;police;taxi]==true;]
	$onlyIf[$getGlobalUserVar[job;$authorid]!=Not Selected!;{execute:worke}]
	$onlyIf[$message[1]!=list;]
$onlyIf[$getServerVar[blacklisted]!=true;{title:Error}
{description:You were blacklisted by $userTag[$getServerVar[blacklistedmod]] for \`$getServerVar[blacklistedreason]\` on $getServerVar[blacklisteddate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$getServerVar[blacklisteds]!=true;{title:Error}
{description:This guild was blacklisted by $userTag[$getServerVar[blacklistedsmod]] for \`$getServerVar[blacklistedsreason]\` on $getServerVar[blacklistedsdate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$onlyIf[$isBot[$authorID]==false;]`
}, {
	name: "work",
	code: `${logs}
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`work\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]
$setGlobalUserVar[whrs;$sum[$getGlobalUserVar[whrs];1];$authorid]
	$setGlobalUserVar[Money;$sum[$multi[20;$getGlobalUserVar[jobmulti]];$getGlobalUserVar[Money]];$authorID]
	$if[$getGlobalUserVar[job;$authorid]==ff]
	$reply[$messageID;There was a fire at **$randomText[Hunter's Lounge;Hunter Bot Development Center;Hunter's House]**, but you fought it and extinguished it, you gained **$multi[20;$getGlobalUserVar[jobmulti]]**$getVar[ecosign]!;no]
	
	$elseif[$getGlobalUserVar[job;$authorid]==pilot]
	$reply[$messageID;<@$authorid> took off from **$randomText[JFK;LGA;FRG;SAL]** and landed at **HAR**, gaining **$multi[20;$getGlobalUserVar[jobmulti]]**$getVar[ecosign]!;no]
	$endelseif
	
	$elseif[$getGlobalUserVar[job;$authorid]==coder]
    $reply[$messageID;<@$authorid> coded a new endpoint for **3STEB4N28's API**, which gave you **$multi[20;$getGlobalUserVar[jobmulti]]**$getVar[ecosign]!;no]
	$endelseif
	$endif
	
    $globalCooldown[1h;Heya, you already worked! Wait %time% till working again!]
	$onlyIf[$checkContains[$getGlobalUserVar[job;$authorid];coder;pilot;ff]==true;]
	$onlyIf[$message[1]!=list;]
$onlyIf[$getServerVar[blacklisted]!=true;{title:Error}
{description:You were blacklisted by $userTag[$getServerVar[blacklistedmod]] for \`$getServerVar[blacklistedreason]\` on $getServerVar[blacklisteddate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$getServerVar[blacklisteds]!=true;{title:Error}
{description:This guild was blacklisted by $userTag[$getServerVar[blacklistedsmod]] for \`$getServerVar[blacklistedsreason]\` on $getServerVar[blacklistedsdate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$onlyIf[$isBot[$authorID]==false;]`
}];