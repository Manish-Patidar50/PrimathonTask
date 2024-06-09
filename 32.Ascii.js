
let input = "JavaScript";
let asciiValue = Array.from(input,(char) =>{
    return char.charCodeAt(0);
});

console.log("ASCII values of characters in '" + input + "':" + asciiValue.join(","));