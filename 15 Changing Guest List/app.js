var guest_list = ['farwa', 'fizza', 'armeena', 'sakina', 'warda'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ' , \nYou all are invited tomoroow on dinner, \nThank You\n');
}
var not_present = 'warda';
var new_guest = 'sameen';
guest_list[4] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ' ,\nYou all are invited tomorrow on dinner , \nThank You\n');
}
console.log("Madam. ".concat(not_present, "'will not coming tomorrow."));
