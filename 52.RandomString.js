
function Str_Random(length){

    let result = '';
    const characters = 'abcsefghijklmnopqrstuvwxyz0123456789';

    for(let i= 1; i < length; i++){

        const randomInd = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomInd);
    }
      return result;
}

console.log(Str_Random(10));