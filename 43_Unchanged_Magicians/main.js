// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Original array of magicians
var magicians = [
    { name: "Merlin" },
    { name: "Gandalf" },
    { name: "Harry Houdini" }
];
// Function to display magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    magicians.forEach(function (magician) {
        console.log(magician.name);
    });
}
// Function to modify magicians by adding "the Great" to each name
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) {
        return { name: "the Great " + magician.name };
    });
    return greatMagicians;
}
// Creating a copy of the original array of magicians
var magiciansCopy = magicians.map(function (magician) { return (__assign({}, magician)); });
// Calling make_great with the copy of the array
var greatMagicians = make_great(magiciansCopy);
// Calling show_magicians with the original array and the modified array
console.log("\nOriginal Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
