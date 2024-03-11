// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

// Define interface for magician
interface Magician {
    name: string;
}

// Original array of magicians
let magicians: Magician[] = [
    { name: "Merlin" },
    { name: "Gandalf" },
    { name: "Harry Houdini" }
];

// Function to display magicians
function show_magicians(magicians: Magician[]): void {
    console.log("List of Magicians:");
    magicians.forEach(magician => {
        console.log(magician.name);
    });
}

// Function to modify magicians by adding "the Great" to each name
function make_great(magicians: Magician[]): void {
    magicians.forEach(magician => {
        magician.name = "the Great " + magician.name;
    });
}

// Calling show_magicians before modification
console.log("Before modification:");
show_magicians(magicians);

// Calling make_great to modify the array of magicians
make_great(magicians);

// Calling show_magicians after modification
console.log("\nAfter modification:");
show_magicians(magicians);