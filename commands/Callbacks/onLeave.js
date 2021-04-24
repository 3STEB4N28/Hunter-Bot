module.exports = [{
    channel: "$getServerVar[leavec]",
    code: `$title[User Left]
$description[<@$authorID> $getServerVar[leavemsg]]
$footer[$getServerVar[leavefooter]]
$color[BLACK]
$onlyIf[$getServerVar[leavec]!=;]
$onlyIf[$getServerVar[welcomer]==on;]`,
    type: "leaveCommand"
}]
