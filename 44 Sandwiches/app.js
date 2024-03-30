// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
// Explain & TIP: Utilizing rest parameters allows 
// functions to accept an indefinite number of arguments, 
// useful for handling lists of data like sandwich ingredients.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("The list is empty please order some sandwiches.");
    }
    else {
        items.forEach(function (item, i) {
            console.log(" ".concat(i + 1, ".").concat(item));
        });
    }
}
console.log("\n");
make_sandwich("ketchup", "garlic");
make_sandwich("onion", "sauce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
