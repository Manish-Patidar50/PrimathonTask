
function findsum(n){

    if(n !== 0)

        return  n + findsum(n - 1);

        else

        return n;
}

const n = 10;
console.log(findsum(n));