// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

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
function make_great(magicians: Magician[]): Magician[] {
    const greatMagicians: Magician[] = magicians.map(magician => {
        return { name: "the Great " + magician.name };
    });
    return greatMagicians;
}

// Creating a copy of the original array of magicians
const magiciansCopy: Magician[] = magicians.map(magician => ({ ...magician }));

// Calling make_great with the copy of the array
const greatMagicians: Magician[] = make_great(magiciansCopy);

// Calling show_magicians with the original array and the modified array
console.log("\nOriginal Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);