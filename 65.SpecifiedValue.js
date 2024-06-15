
let num = [2,6,1,4,5,8,9,10];

function check(element){

    for (let i = 0; i < num.length; i++){
        if (num[i] == element)

            return element + " is present in the array.";
    }
    return element + " is not present in the array.";
}
console.log(check(5));