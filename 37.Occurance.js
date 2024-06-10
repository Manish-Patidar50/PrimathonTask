
let str = 'Javascript and React'

let result = {}

for(let i = 0; i < str.length; i++)
    {
        let ch = str.charAt(i)
        if(! result[ch]){

            result [ch] =1;

        }
        else{
            result [ch]+=1
        }
    }

    console.log("The occurance of each letter in given string is :",result);