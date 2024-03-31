let string = "The Quick Brown Fox"; // change first letters to lower case
// tHE qUICK bROWN fOX

function changeCase(string){
    let result = ""; // declare an empty string
    word = string.split (' ');// use .split to separate the words of the string
    return word.map(i => {
        return i[0].toLowerCase() + (i.slice(1)).toUpperCase()
}).join(" ");// use.map to apply the .toUpperCase and .toLowerCase
}
console.log (changeCase(string));//load the result in the console