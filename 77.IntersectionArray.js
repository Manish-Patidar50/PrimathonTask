
let first_array = [1,3,5,7,9];

let second_array = [2,3,4,5,6,9,1,7];

let new_array = first_array.filter((element) => second_array.includes(element));

console.log("Array obtainedis :");
console.log(new_array);