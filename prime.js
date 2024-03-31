let numRandom = [1,2,3,4,5,6,7,8,9,10]
//[2,3,5,7]  prime numbers

function primeNumberGenerator(array){
    let result =[]; // declare an empty array
    // use for loop to pass through the values of the array
    for (num of array){
        if ((num %2) !== 0 && (num % 3) !== 0 && num !== 1 || num == 3 || num ==2)
        {result.push(num)}
    }
    return result;
} 
console.log(primeNumberGenerator(numRandom))