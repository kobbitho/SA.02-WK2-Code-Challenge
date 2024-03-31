let string = "The Quick Brown Fox"; // change first letters to lower case
// tHE qUICK bROWN fOX

function changeCase(string){
    let result = ""; // declare an empty string
    word = string.split (' ');
    return word.map(i => {
        return i[0].toLowerCase() + (i.slice(1)).toUpperCase()
}).join(" ");
}
console.log (changeCase(string));