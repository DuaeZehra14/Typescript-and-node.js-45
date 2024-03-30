// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

// Explain & TIP: Utilizing rest parameters allows 
// functions to accept an indefinite number of arguments, 
// useful for handling lists of data like sandwich ingredients.


function make_sandwich(...items: string[]):void

 {
    console.log("Sandwich Summary:")
    if(items.length === 0){
        console.log("The list is empty please order some sandwiches.")
    }
else{
    items.forEach((item,i)=>{
        console.log(` ${i+1}.${item}`)
    })}
}
console.log("\n")
make_sandwich("ketchup", "garlic");
make_sandwich("onion", "sauce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
