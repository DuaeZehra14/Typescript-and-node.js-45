// Magicians: Display magician names from an array.

// Explain & TIP: Passing arrays to functions allows 
// for the manipulation or display of 
// their contents in a centralized manner.
//  This is useful for handling lists of data.


function show_magicians(magicians : string[]) : void {

    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
    }
}

const magician : string [] = ['Andy','Nora' ,'hailey']
show_magicians(magician)






















