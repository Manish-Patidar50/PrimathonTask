
function gcd(a,b){

    while (b !== 0){

        let temp = b;
        b = a % b;
        a = temp;

            
    }
     return a;
}

  function lcm(a,b){

     return Math.abs(a * b) / gcd(a,b);
  }

  let num1 = 12;
  let num2 = 18;
  console.log(`LCM of ${num1} and ${num2} is ${lcm(num1, num2)}`);