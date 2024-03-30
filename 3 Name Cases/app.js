//lower case
var personName = "Mamma";
console.log("lowercase", personName.toLowerCase());
//uppercase
console.log("uppercase", personName.toUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
