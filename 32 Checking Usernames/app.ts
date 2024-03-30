let current_users : string [] = [ 'dua', 'farwa', 'hassan', 'abbas', 'farheen', 'shiraz'];
let new_users : string [] = [ 'ali', 'armeena', 'sakina', 'abbas','fizza', 'sakina'];

new_users.forEach((newUser) =>{
    if(
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ) {
  console.log(`${newUser} will need to enter a new username.`);
} else {
    console.log(`${newUser} is available`);

}
});