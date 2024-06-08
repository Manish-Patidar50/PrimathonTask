
let prompt=require('prompt-sync')()
function fibonacci(n){

    if(n <= 2){

        return n;
    }
      else
      {
        return fibonacci(n-1) + fibonacci(n-2);
}
}

    let num = parseInt(prompt("Enter the number of terms: -"));

    if(num <=0){
     console.log(`Enter the Positive Number. `)
    }

    else {
         for(let i = 0; i < num; i++)
            {
                console.log(fibonacci(i));
            }
    }
 