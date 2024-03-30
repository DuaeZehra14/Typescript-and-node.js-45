// Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows 
// for the manipulation or display of 
// their contents in a centralized manner.
//  This is useful for handling lists of data.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ['Andy', 'Nora', 'hailey'];
show_magicians(magician);
