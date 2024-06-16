
let arr = [1,2,3,4,5];

console.log(`Array Elements Before element addition: ${arr}`);

function myGFG() {
    arr.splice(0,0, "6");
    console.log(`Arr Elements After element addition: ${arr}`);
}

myGFG();