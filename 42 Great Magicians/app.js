// / Question 42: Great Magicians: Add "the Great" to magician names.
// Explain & TIP: Modifying array contents within a function demonstrates
// //  how functions can change data. This shows the: string[]) {
//     for (let i = 0; i < magici impact
//   of passing arrays by reference.
// function make_great(magicians: string[]):void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + " the Great";
//     }
// }
// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// const magician : string [] = ['Andy','Nora' ,'hailey']
// show_magicians(magician)
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
var magicians2 = ['Andy', 'Nora', 'hailey'];
make_great(magicians2);
show_magicians(magicians2);
