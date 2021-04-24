const api = "https://disease.sh/v3/covid-19/all"
module.exports = [{
	name: "covid-19",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`covid-19\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]
$reply[$messageID;{title:COVID-19 Information}
	{description:Today's COVID-19 information}
	{field:Today's recovered:$numberSeparator[$jsonRequest[${api};todayRecovered;Could not get the information.];,]:no}
	{field:Today's new cases:$numberSeparator[$jsonRequest[${api};todayCases;Could not get the information.];,]:no}
	{field:Critical cases:$numberSeparator[$jsonRequest[${api};critical;Could not get the information.];,]:no}
	{field:Total deaths:$numberSeparator[$jsonRequest[${api};deaths;Could not get the information.];,]:no}
	{field:Total cases:$numberSeparator[$jsonRequest[${api};cases;Could not get the information.];,]:no}
	{field:Total tests:$numberSeparator[$jsonRequest[${api};tests;Could not get the information.];,]:no}
	{field:Total recovered:$numberSeparator[$jsonRequest[${api};recovered;Could not get the information.];,]:no}
	{field:Total active:$numberSeparator[$jsonRequest[${api};active;Could not get the information.];,]:no}
	{field:Active per one million:$numberSeparator[$jsonRequest[${api};activePerOneMillion;Could not get the information.];,]:no}
	{field:Recovered per one million:$numberSeparator[$jsonRequest[${api};recoveredPerOneMillion;Could not get the information.];,]:no}
	{field:Critical per one million:$jsonRequest[${api};criticalPerOneMillion;Could not get the information.]:no}
	{field:Total affected countries:$numberSeparator[$jsonRequest[${api};affectedCountries;Could not get the information.];,]:no}
	{footer:Information taken from disease.sh API!}
	{color:BLACK};no]
	$onlyIf[$isBot[$authorID]==false;]
	`
}]