
let arr1 = [1,4,6];

let arr2 = [2,4,5,3,6];

let newArr = arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0));

console.log(newArr);