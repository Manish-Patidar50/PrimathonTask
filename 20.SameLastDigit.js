
function LastSameDigit(num1, num2){

    let LastNumber1 = num1.toString().slice(-1);
    let LastNumber2 = num2.toString().slice(-1);

    return LastNumber1 === LastNumber2;

}

let number1 = 134;
let number2 = 994;

let result= LastSameDigit(number1,number2);

console.log(result);