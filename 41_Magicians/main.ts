// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let magicians : string[] = ["abc", "bcd", "cde", "def"]

function show_magicians(listMagicians:string[]){
    listMagicians.forEach(magician => console.log(`${magician}`))
}

show_magicians(magicians)

// completed