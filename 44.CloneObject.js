
let person = {

    name : 'Madhav',
    age : 21,
}

let ClonePerson = Object.assign({}, person);

console.log(ClonePerson);

ClonePerson.name = 'Krishna';

console.log(ClonePerson.name);

console.log(person.name);