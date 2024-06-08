

function  myhcfgcd(a,b){

    if(b === 0){

        return a;
    }
    return myhcfgcd(b, a % b);

}

let num1 = 6;
let num2 = 9;

let result = myhcfgcd(num1,num2);

console.log(`GCD of ${num1} and ${num2} is ${result}`);