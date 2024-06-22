
const startChar = 'M';
const endChar = 'Z';
const result = [];

for (let charCode = startChar.charCodeAt(0);
charCode <= endChar.charCodeAt(0);
charCode++){
    result.push(String.fromCharCode(charCode));
}

console.log(result);