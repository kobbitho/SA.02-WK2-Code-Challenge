function arrayGenerator (num1, num2){
    let arr =[];
    for (let i = num1; i <= num2; i++){
        arr.push(i);
    }
    return arr;
}
console.log(arrayGenerator(3,7));