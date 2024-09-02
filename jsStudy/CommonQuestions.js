function reverseString(str){
    console.log(str.split('').reverse().join(''));
}

function iPalindrome(str){
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }

    return n * factorial(n -1)
}

function fiboSequence(n){
    if(n === 0){
        return [];
    }

    if(n === 1){
        return [0];
    }

    let fiboArray = [0,1];

    while(fiboArray.length < n){
        let next = fiboArray[fiboArray.length -1] + fiboArray[fiboArray.length -2];
        fiboArray.push(next)
    }
    return fiboArray;
}

function capitalizeFirstLetter(string = 'this is a test string'){
       let capitalizedString =  string.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
       console.log(capitalizedString)
}

capitalizeFirstLetter();