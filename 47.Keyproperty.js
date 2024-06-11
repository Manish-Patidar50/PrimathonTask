
let user = {
  
     name : "Manish",
     age : 30,
     email : "manish12@gmail.com",
     address : {

        street : "C-scheme Jaipur",
        city : "Jaipur",
        state : "Rajasthan"
     }
};

const temp = Object.getOwnPropertyNames(user);

const count = temp.length;

console.log("Number of keys: " + count);