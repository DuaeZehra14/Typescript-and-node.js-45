"use strict";
let car = 'subaru';
let age = 18;
letnumbers: [] = [1, 2, 3, 4];
// 'string tests'
// Test 1 : Equality (True)
console.log("Is cars == 'subaru'? I predict True.");
console.log(car == 'subaru'); //true (case-insensitive)
// Test 2 : Strict Equality (False)
console.log("Is cars === 'subaru'? I predict False.");
console.log(car === 'subaru'); // False case-sensitive
// Test 3 : Inequality  (true)
console.log("Is cars != 'Toyoto'? I predict True.");
console.log(car != 'Toyoto'); //true
// Test 4 :  Strict inequality comparision (false)
console.log("Is cars !== 'subaru'? I predict false.");
console.log(car !== 'subaru'); //false
// Test 5 : Lowercase conversion (true)
console.log("Is car == car.toLowerCase()== 'subaru? I predict true.");
console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)
// Test 6 : Lowercase conversion (False)
console.log("Is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); // False(orignal value remains uppercase)
//'Numercial Tests'
// Test 7 :Equality (true)
console.log('Is age == 18 ? I predict True.');
console.log(age == 18); //True
// Test 8 :Equality (false)
console.log('Is age != 28 ? I predict True.');
console.log(age != 28); //True
// Test 9: Greater than (False)
console.log('Is age >18 ? I predict false.');
console.log(age > 18); //False
// Test 10: Less than or equal (True)
console.log('Is age <=18 ? I predict True.');
console.log(age <= 18); //True
//Test 11: AND (True)
console.log("Is age > 17 && age < 30? I preedict True.");
console.log(age > 17 && age < 30); // true (both condition met)
//Test 12: OR (False)
console.log("Is age > 30 || age < 9? I preedict False.");
console.log(age > 30 || age < 9); // false (neither condition met)
//Test 13 : In array (True)
console.log("Is 2 in []? I predict True.");
console.log(2 in []); //true (checks for index existence)
//Test 14 : not in array (False)
console.log("Is 5 not in numbers? I predict False.");
console.log(5 in []);
false; // negation of "in" operator)
