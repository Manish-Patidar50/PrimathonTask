
const number = 2500;

//const result = '$ ' + number.toFixed(2);

// using toLocaleString 

const result = (2500).toLocaleString('en-US', {  
    style : 'currency',
    currency : 'USD'
});

console.log(result);