// let magicians: string[] = ["Alice", "David", "Chris"];
// function show_magicians(magicians: string[]) {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// // show_magicians(magicians);
// function make_great(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + " the Great"
//     }
// };
// function make_great2(magicians: string[]): string[] {
//     let greatMagicians = [];
//     magicians.forEach(magician => {
//         greatMagicians.push(`${magician} 'the Great' `);
//     });
//     // return greatMagicians2;
// }
// let greatMagicians3 = make_great(magicians.slice()); // Creates a new modified array
// console.log("Original magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Great magicians:");
// // show_magicians(greatMagicians);
var magicians = ["Nova", "Andy", "Luis", "Alexay"];
function show_magician(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var i = magician_1[_i];
        console.log(i);
    }
}
function make_great(magicians) {
    var greatMagician = magicians.map(function (magician) { return "THe Great ".concat(magician); });
    return (greatMagician);
}
var NamesofGreatMagician = make_great(magicians);
console.log("Orignal Magicians:");
show_magician(magicians);
console.log("\nThe great Magicians:");
show_magician(NamesofGreatMagician);
