
console.time('abc');

let fun = function() {
    console.log('fun is running');
}
let fun2 = function() {
    console.log('fun2 is running..');
}
fun();
fun2();

console.timeEnd('abc');