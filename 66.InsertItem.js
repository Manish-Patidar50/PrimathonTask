
function insertElement() {
    let arr = [1,3,4,5,6];

    let index = 1;
    let element = 2;

    arr.splice(index, 0, element);

    console.log(arr);
}

insertElement();