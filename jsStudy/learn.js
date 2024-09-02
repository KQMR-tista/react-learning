let test = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "b",
        value: "#0f0"
    },
    {
        color: "c",
        value: "#00f"
    },
    {
        color: "a",
        value: "#0ff"
    },
    {
        color: "z",
        value: "#f0f"
    },
    {
        color: "x",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
];

// Sort array ascending by key
const sortArrayAsc = (array, key) => {
    return array.sort((a,b) => {
       return a[key].localeCompare(b[key]);
    });
}

// Sort array descending by key
const sortArrayDes = (array, key) => {
    return array.sort((a,b) => {
        return b[key].localeCompare(a[key]);
    });
}

//console.log(sortArrayDes(test, 'color'));

const obj = {
    name: "Conner",
    age: 27,
    greet: function () {
        console.log(`Hey, my name is ${this.name}`);
    },
};
obj.greet();

const object1 = {
    a: 10,
    b: 20,
    c: function (a, b) {
        console.log(a + b);
    },
};
const func = object1.c;
func(object1.a, object1.b);


function calculateTip(amount, tipPercent){
    let tip = (tipPercent/100) * amount;
    console.log(tip);
}
calculateTip(200, 20);


function fetchData(callback) {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error));
}
// fetchData(function (error, data) {
//     if (error) {
//         console.log('Error:', error);
//     } else {
//         console.log('Data:', data);
//     }
// });


function testTimeOut(){
    setTimeout(() => {console.log('here')}, 5000)
}

//testTimeOut();


const fetchDATA = async () => {
    const response = await fetch("https://api.samplewebsite.com/data");
    const data =  response.json();
};


// const promise1 = Promise.resolve("One");
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
// const promise3 = Promise.reject("Three");
// Promise.allSettled([promise1, promise2, promise3]).then((results) => console.log(results));


function urlShortner(url){
    let domainName = url.split('/')[2].split('.')[1];
    console.log(domainName);
}

//urlShortner('http://www.google.com');

function autoComplete(search){
    return test.filter(item => item?.color?.includes(search.toString())).map(fi => fi.color);
}

// console.log(autoComplete('red'));
// console.log(autoComplete('b'));


const object2 = {
    prop1: "value1",
    prop2: {
        prop3: "value3",
    },
};
const newObj = new Object(object2);
newObj.prop2.prop3 = "newValue3";
newObj.prop1 = 'ajit';
console.log(object2);
console.log(newObj);


class Bird {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Crow extends Bird{
    speak() {
        super.speak();
        console.log(`${this.name} sings.`);
    }
}
const crow = new Crow("Tim");
// crow.speak();



//Union of two arrays
var a = [34, 35, 45, 48, 49];
var b = [48, 55];
var union = [...new Set([...a, ...b])];
console.log(union);

//Union of two arrays of objects remove duplicates
const array1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const array2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
const seenIds = new Set();
const unionArray = [...array1, ...array2].filter(item => {
    if (!seenIds.has(item.id)) {
        seenIds.add(item.id);
        return true;
    }
    return false;
});

console.log(unionArray);


const commonId = new Set();
const unionDupArray = [...array1, ...array2].filter((item, index) => {
    if(index === 0){
        commonId.add(item.id);
        return true;
    }else {
        if (seenIds.has(item.id)) {
            seenIds.add(item.id);
            return true;
        }
        return false;
    }

});

console.log(unionDupArray);
