
function CheckPrime(num){

    let res = true;

    if(num<1)
        {
            res = false;
        }
           for(let i = 2; i*i<=num; i++){

            if(num%i===0){
                res = false;
                break;
            }
           }
           if(res){
            console.log(num,"is a prime number")
           }
           else{
            console.log(num,"is a Not prime number")
           }
}

CheckPrime(5);
CheckPrime(8);