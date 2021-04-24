module.exports = [{
    channel: "$getServerVar[joinc]",
    code: `$title[User Joined]
$description[<@$authorID> $getServerVar[joinmsg]]
$footer[$getServerVar[joinfooter]]
$color[BLACK]
$onlyIf[$getServerVar[joinc]!=;]
$onlyIf[$getServerVar[welcomer]==on;]`,
    type: "joinCommand"
}]