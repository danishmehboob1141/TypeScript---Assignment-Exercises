// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
// Function to create a sandwich summary
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please select some items.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item));
        });
    }
    console.log("--------------------------------------");
}
// Calling the function with different numbers of arguments
makeSandwich("Bread", "Cheese", "Tomato", "Lettuce");
makeSandwich("Ham", "Mustard");
makeSandwich("Peanut Butter", "Jelly");
