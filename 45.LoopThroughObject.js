

const person = {
    obj1: {name: "Takshu", age: 4},
    obj2: {name: "Tanisha", age: 8},
    obj3: {name: "Ram", age: 25},
};

Object.values(person).forEach(obj => {

    console.log("name :" + obj.name, "age :" + obj.age);
});