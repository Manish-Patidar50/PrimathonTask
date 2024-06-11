
let obj = { organisation : "IIT"};

let entries = Object.entries(obj);

entries.push(['field','Computer Science']);

let newObj = Object.fromEntries(entries);

console.log(newObj);