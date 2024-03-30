//lower case
let personName: string="Mamma"
console.log("lowercase", personName.toLowerCase());

//uppercase
console.log("uppercase", personName.toUpperCase());

// Title case
console.log("titlecase:",personName.replace(/\bw/g,c=> c.toUpperCase()));