
let a = [34, 35, 45, 48, 49];
let b = [48, 55];

/*
Merge two arrays and remove duplicates
 */
function mergeTwoArrays(){
    // Returns merged array
    let merged = [...a, ...b];

    // Add to a set to remove duplicates
    let mergedSet = new Set(merged);

    // Convert the set to an array
    let mergedDistinctArray = [...mergedSet]

    console.log(mergedDistinctArray);
}


const array1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const array2 = [{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }];
/*
Merge two arrays and remove duplicates
 */
function mergeTwoObjectArrays(array1, array2){
    // Merge two arrays tp one array
    let merged = [...array1, ...array2];

    // Set to track the unique field
    let existsId = new Set();

    // Filter the merged array by adding the unique field to the array, and
    // then only adding the item to the distinct array if the unique field is not already in the set.
    let mergedDistinctArray = merged.filter(item => {
        if(!existsId.has(item.id)){
            existsId.add(item.id);
            return true;
        }

        return false
    })

    console.log(mergedDistinctArray);
}

// mergeTwoObjectArrays(array1, array2);

/*
Merge two arrays keep only common
 */
function mergeTwoObjectArraysCommon(array1, array2){
    let uniqueArray1 = [...new Set(array1)];
    let uniqueArray2 = [...new Set(array2)];

    //Get the unique field from one array as an array
    let idsFromUniqueArray1 = uniqueArray1.map(i => i.id);

    //Filter the second array by checking to see if the second array unique field exists in idsFromUniqueArray1
    let mergedCommon = uniqueArray2.filter(item => idsFromUniqueArray1.includes(item.id));

    console.log(mergedCommon);
}

// mergeTwoObjectArraysCommon(array1, array2);

function arrayMap(){
    let array = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

    let updatedArray = array.map((item, index) => {
        return {...item, age: 20}
    })

    console.log(updatedArray);
}

function arrayReduce(){
    let array = [{ id: 1, name: 'Alice', age: 10}, { id: 2, name: 'Bob', age: 15 }, { id: 3, name: 'Charlie', age: 33 }];

    let total = array.reduce((prev, current) => {
        return ({age: prev.age + current.age})
    });

    console.log(total);
}

/*
The flat() method is a built-in method in JavaScript that can be used to flatten an array. It takes a depth parameter,
which specifies how many levels of nested arrays should be flattened. If no depth parameter is provided, it defaults to 1.
 */
function flattenArray(){
    let nestedArray = [1, [2, [3, 4], 5], 6];

    let flattenedArray = nestedArray.flat(2); // returns [1, 2, 3, 4, 5, 6]

    console.log(flattenedArray)
}


function finditemIndex(){
    let a = [34, 35, 45, 48, 49];
    let indx = a.findIndex((item) => item === 45);
    console.log(indx)
}

function finditemAtIndex(){
    let a = [34, 35, 45, 48, 49];
    let item = a.find((item, index) => index === 4);
    console.log(item)
}


/* Sort array alphabatic string type */
function sortArrayAsc(array, key){
    let sorted =  array.sort((a,b) => a[key].localeCompare(b[key]));
    console.log(sorted);
}

/* Sort array descending string type */
function sortArrayDesc(array, key){
    let sorted =  array.sort((a,b) => b[key].localeCompare(a[key]));
    console.log(sorted);
}

/* Sort array alphabatic number type */
function sortArrayAscNum(array, key){
    let sorted =  array.sort((a,b) => a[key] - b[key]);
    console.log(sorted);
}

/* Sort array descending number type */
function sortArrayDescNum(array, key){
    let sorted =  array.sort((a,b) => b[key] - a[key]);
    console.log(sorted);
}

let test = [
    {
        color: "red",
        value: "#f00",
        age: 4,
    },
    {
        color: "b",
        value: "#0f0",
        age: 1,
    },
    {
        color: "c",
        value: "#00f",
        age: 13,
    },
    {
        color: "a",
        value: "#0ff",
        age: 23,
    },
];

sortArrayDesc(test, "color");
sortArrayAscNum(test, "age");
sortArrayDescNum(test, "age");

