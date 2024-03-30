"use strict";
// // Question 40: Album: Create objects for music albums.
// // Explain & TIP: Use functions to return objects. This exercise
// //  practices creating and manipulating objects, and 
// //  introducing optional function parameters.
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "Make First Album"));
console.log(make_album("Artist Two", "Make Second Album"));
console.log(make_album("Artist Three", "Make Third Album"));
