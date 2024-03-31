function arrayGenerator (num1, num2){
    let arr =[];// declare an empty array
    for (let i = num1; i <= num2; i++){ // use for loop to loop through the array.
        arr.push(i); // use push to add 7 to the end of the array
    }
    return arr;
}
console.log(arrayGenerator(-3,7));// show the array in the terminal