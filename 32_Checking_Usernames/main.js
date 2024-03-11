// 32. Checking Usernames: 
// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. 
// Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["eod", "abm", "kne", "shr", "tso", "viu", "qpo"];
var new_users = ["shr", "viu", "eod", "ioq", "amd", "ksh"];
var repeatedUser = "";
for (var i = 0; i < current_users.length; i++) {
    for (var j = 0; j < new_users.length; j++) {
        if (new_users[j] == current_users[i]) {
            console.log("The person needs to enter a new username because this username \"".concat(new_users[j], "\" is already present"));
            repeatedUser = new_users[j];
            break;
        }
    }
    if (current_users[i] == repeatedUser) {
        continue;
    }
    else {
        console.log("The username \"".concat(current_users[i], "\" is not repeated"));
    }
}

// completed