//Queston:43

const magicians: string[] =["Nova","Andy","Luis","Alexay"];


function show_magician(magician : string[]) : void {
    for(const i of magician){
        console.log(i)
    }
}

function make_great(magicians: string[]): string []{
    const greatMagician : string [] = magicians.map(magician => `THe Great ${magician}`)

return(greatMagician)
}

     const NamesofGreatMagician: string [] = make_great(magicians)

     console.log("Orignal Magicians:")
     show_magician(magicians)
     console.log("\nThe great Magicians:")
     show_magician(NamesofGreatMagician)


























