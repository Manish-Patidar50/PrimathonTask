
let startAndEnd = (str, startIndex, endIndex) =>{

let startCheck = str.startsWith(startIndex);

let endCheck = str.endsWith(endIndex);

return startCheck && endCheck;

};

let str = "Hello-javascript";

let startIndex = "H";

let endIndex = "t";

if(startAndEnd(str, startIndex, endIndex)){
    console.log("True");
}
else{
    console.log("false");
}