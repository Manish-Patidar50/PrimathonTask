
function findlargest(num1, num2, num3){

    return num1 >= num2 && num1 >= num3 ? num1    // without inbuild function
     : num2 >= num1 && num2 >= num3 ? num2 :  num3;

    // return Math.max(num1,num2,num3);  with inbuild function
}

const LargestNum = findlargest(25,74,70);
console.log("The Largest Number is :", LargestNum);