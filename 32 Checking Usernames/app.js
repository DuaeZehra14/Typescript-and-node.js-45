"use strict";
let current_users = ['dua', 'farwa', 'hassan', 'abbas', 'farheen', 'shiraz'];
let new_users = ['ali', 'armeena', 'sakina', 'abbas', 'fizza', 'sakina'];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available`);
    }
});
