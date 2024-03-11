// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list,
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.

let peopleInvited = ["Danish", "Usman", "Hamza", "Huzaifa", "Asim"]
console.log("You can invite only two people for dinner!")

while (peopleInvited.length > 2) {
    let guestRemoved = peopleInvited.pop()
    console.log("Sorry Mr. " + guestRemoved + " You can't come!")
}

console.log("\nInviting the remaining two guests")
peopleInvited.forEach(guest => console.log("Hi " + guest + ", Welcome here"))

