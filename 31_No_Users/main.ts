// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users: string[] = ["danish", "usman", "umar", "admin", "huzaifa"]

if (users.length == 0) {
    console.log("The list is empty")
} else {
    console.log("We are going to empty the list")
}

while (users.length != 0) {
    users.pop()
}

console.log(`\nNow the list has been emptied, i.e. list length=${users.length}`)

// completed