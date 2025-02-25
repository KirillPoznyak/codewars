// DESCRIPTION:

// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).




// SOLUTION (РЕШАЛА ИИШКА, сложная задача для меня была):

const whosOnline = (friends) => {
    let friendsOnlineStatus = {online: [], offline: [], away: []};
    if (friends.length === 0) {
        return {};
    }
    for (let friend of friends) {
        if (friend.status === 'online') {
            if (friend.lastActivity <= 10) {
                friendsOnlineStatus.online.push(friend.username);
            } else {
                friendsOnlineStatus.away.push(friend.username);    
            } 
        } else {
            friendsOnlineStatus.offline.push(friend.username);
        }
    }
    let filteredResult = {};
    if (friendsOnlineStatus.online.length > 0) {
        filteredResult.online = friendsOnlineStatus.online;
    }
    if (friendsOnlineStatus.offline.length > 0) {
        filteredResult.offline = friendsOnlineStatus.offline;
    }
    if (friendsOnlineStatus.away.length > 0) {
        filteredResult.away = friendsOnlineStatus.away;
    }
    return filteredResult;
}