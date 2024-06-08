

function isArmstrong(number){

    let digit = number.toString().split('');
    let order = digit.length;
    let sum = digit.reduce((acc, digit) => acc + Math.pow(parseInt(digit), order), 0);

    if(sum === number){

        console.log(number + " is an Armstrong Number");
    }

    else{

        console.log(number + " is not an Armstrong Number")
    }
}

isArmstrong(153);
isArmstrong(520);