
let arr = [1,2,3,4,5];

console.log("Array Elements: " + arr);
console.log("Array length: " + arr.length);

function emptyArray() {

    arr.length = 0;
    console.log("Empty Array Elements: " + arr);
    console.log("Empty Array Length: " + arr.length);
}

emptyArray();