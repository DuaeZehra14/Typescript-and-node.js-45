let cars : string = 'subaru';

// Test 1 : Equality comparision (true)
console.log("Is cars == 'subaru'? I predict True.");
console.log (cars == 'subaru'); //true

// Test 2 : Strict Equality comparision (true)
console.log("Is cars === 'subaru'? I predict True.");
console.log (cars === 'subaru'); //true

// Test 3 : Inequality comparision (false)
console.log("Is cars != 'subaru'? I predict True.");
console.log (cars != 'subaru'); //false

// Test 4 :  Strict inequality comparision (false)
console.log("Is cars !== 'subaru'? I predict True.");
console.log (cars !== 'subaru'); //false

// Test 5 : Less than  comparision (false)
console.log(" 5 < 3 ? I predict false.");
console.log (5 < 3); //false

// Test 6 : Greater than  comparision (false)
console.log(" 2 > 9? I predict false.");
console.log (2 > 9); //false

// Test 7 : Less than or euqal  comparision (true)
console.log(" 5 <= 8? I predict true.");
console.log (5 <= 8); //true

// Test 8 : Greater than or euqal  comparision (true)
console.log(" 12 <= 8? I predict true.");
console.log (12 <= 8); //true

// Test 9 : Checking truthiness (true)
console.log("Is cars ? I predict True.");
console.log(cars); // True (non-empty string is truthy)

// Test 10 : Checking falseness (False)
console.log("Is !car ? I predict False.");
console.log(!cars); // False (negation string is truthy)


