let arr = ["Apple", "Mango", "Orange", "Orange","Apple"];

function removeDuplicate(arr){

    return arr.filter((item,index) => arr.indexOf(item) === index);
}

console.log(removeDuplicate(arr));