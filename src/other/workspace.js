(function reverseString(){
    let string = 'ajith';
    let reversedString = string.split('').reverse().join('');
    console.log(reversedString);
})();


(function isPalindrome(){
    //let string = 'amma';
    let string = 'ajith'
    let isPalindrome = string.split('').reverse().join('') === string;
    console.log(isPalindrome);
})();

(function arrayFunctions(){
    let testArray =[4, 10, 20, 44, -10, 3];

    let sum = testArray.reduce((temp, num) => temp = temp + num);
    console.log(sum);

    let positiveOnly = testArray.filter(item => item > 0);
    console.log(positiveOnly);

    let mappedArray = testArray.map(item => {
        return item + 20;
    });
    console.log(mappedArray);

    let maxNum = testArray.reduce((current, item) => {
        return item > current ? item: current;
    });
    console.log(maxNum);

    let minNum = testArray.reduce((current, item) => {
        return item < current ? item: current;
    });
    console.log(minNum);

    let evenOnly = testArray.filter(item => item % 2 === 0);
    console.log(evenOnly);

    let oddOnly = testArray.filter(item => item % 2 !== 0);
    console.log(oddOnly);
})();


// the product of an integer and all the integers below it
function calculateFactorial(n){
    if(n === 0 || n === 1){
        return 1;
    }else {
        return n * calculateFactorial(n -1);
    }
}

console.log(calculateFactorial(10));

//a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// JavaScript function that returns the Fibonacci sequence up to a given number of terms  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
function generateFibonacciSequence(numberOfItems){
    if(numberOfItems === 0){
        return [];
    }

    if(numberOfItems === 1){
        return [0];
    }

    let sequence = [0, 1];
    while(sequence.length < numberOfItems){
        let next = sequence[sequence.length -1] + sequence[sequence.length -2];
        sequence.push(next);
    }

    return sequence;
}

console.log(generateFibonacciSequence(10));

//prime number: a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).
function isPrime(num){
    if(num <= 1) return false;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }

    return num > 1;
}

console.log(isPrime(6));

function capitalizeFirstLetter(string){
    const capitalized = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
    console.log(capitalized);
}

capitalizeFirstLetter('this is a test string');

//Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order
function sortArrayByAsc(array, key){
    return array.sort((a,b) => a[key] - b[key]);
}

function sortArrayByDesc(array, key){
    return array.sort((a,b) => b[key] - a[key]);
}

console.log(sortArrayByAsc([{name: 'John', value: 4}, {name: 'Ajith', value: 10}, {name: 'Betty', value: 3}], 'value'));
console.log(sortArrayByDesc([{name: 'John', value: 4}, {name: 'Ajith', value: 10}, {name: 'Betty', value: 3}], 'value'));