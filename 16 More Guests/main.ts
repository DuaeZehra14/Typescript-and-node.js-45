let guest_list : string [] = ['farwa','fizza', 'armeena', 'sakina', 'warda'];
// for (let i=0; i<guest_list.length; i++){
//     console.log('Respected Madam ' + guest_list[i] + ' , \nYou all are invited tomoroow on dinner, \nThank You\n' );
// }
let not_present : string= 'warda';
let new_guest : string = 'sameen';
guest_list[4] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Madam ' + guest_list[i] + ' ,\nYou all are invited tomorrow on dinner , \nThank You\n');

}
console.log(`Madam. ${not_present}'will not coming tomorrow.` );    
guest_list.unshift('maha','noor','laiba');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Madam ' + guest_list[i] + ' ,\nYou all are invited tomorrow on dinner We found a big dinner  table so, we are invited 3 more guests. \nThank You\n');

}